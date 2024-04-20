const { pool } = require("../../configs/db.config");
const { tableName, columnNames, Task } = require("../../entities/task.entities");
const { validationError, dbError } = require("../../utils/error.utils");

exports.updateTask = async ({ id, title, description, status}) => {
    try {
        id = parseInt(id);
    } catch (error) {
        const validateError = validationError(error.message);
        return [null, validateError];
    }

    const newTask = new Task({ title, description, status });
    const [, error] = newTask.validate();
    if (error) {
        const validateError = validationError(error);
        return [null, validateError];
    }

    const sql = `UPDATE ${tableName} SET 
                ${columnNames[0]} = $1,
                ${columnNames[1]} = $2,
                ${columnNames[2]} = $3
                WHERE id = $4`;
    try {
        await pool.query(sql, [title, description, status, id]);
        const successMsg = `Task with ID ${id} has been modified.`;
        return [successMsg, null];
    } catch (error) {
        const dbErr = dbError(error.message);
        return [null, dbErr];
    }
}