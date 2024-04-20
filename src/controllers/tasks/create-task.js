const _ = require("lodash");
const { pool } = require("../../configs/db.config");
const { Task, tableName, columnNames } = require("../../entities/task.entities");
const  { validationError, dbError } = require("../../utils/error.utils");

exports.createTask = async (newTask)  => {
    const task = new Task(newTask);
    const [, error] = task.validate();

    if (error) {
        const validateError = validationError(error);
        return [null, validateError]
    }

    const sql = `INSERT INTO ${tableName}(${columnNames.join(", ")}) 
                VALUES ($1, $2, $3) RETURNING *`;

    // FIXME: use ORM instead of pure sql statement for simplicity. e.g. can pass whole object instead of passing the values one by one
    try {
        const dbResult = await pool.query(sql, [task.title, task.description, task.status]);
        const successMsg = `Task created successfully with ID: ${_.get(dbResult, "rows[0].id")}.`
        return [successMsg, null];
    } catch (error) {
        const err = dbError(error.message)
        return [null, err]
    }
};