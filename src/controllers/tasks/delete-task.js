const { pool } = require("../../configs/db.config");
const { tableName } = require("../../entities/task.entities");
const { validationError, dbError } = require("../../utils/error.utils");

exports.deleteTask = async (id) => {
    // return [id, null]
    try {
        id = parseInt(id);
    } catch (error) {
        const validateError = validationError(error.message);
        return [null, validateError];
    }

    const sql = `DELETE FROM ${tableName} WHERE id = $1`;
    try {
        await pool.query(sql, [id]);
        const successMsg = `Task with ID ${id} has been deleted.`;
        return [successMsg, null]
    } catch (error) {
        const dbErr = dbError(error.message);
        return [null, dbErr];
    }
}