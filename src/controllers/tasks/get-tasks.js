const { pool } = require("../../configs/db.config");
const { tableName } = require("../../entities/task.entities");
const { dbError, validationError } = require("../../utils/error.utils");

exports.getAllTasks = async () => {
    const sql = `SELECT * FROM ${tableName} ORDER BY id ASC`;
    try {
        const dbResult = await pool.query(sql);
        return [dbResult.rows, null];
    } catch (error) {
        const dbErr = dbError(error.message);
        return [null, dbErr];
    }
};

exports.getTaskById = async (id) => {
    // parse ID to integer since it is stored as integer in DB
    try {
        id = parseInt(id);
    } catch (error) {
        const validateError = validationError(error.message);
        return [null, validateError];
    }

    const sql = `SELECT * FROM ${tableName} WHERE id = $1`;
    try {
        const dbResult = await pool.query(sql, [id]);
        return [dbResult.rows[0], null];
    } catch (error) {
        const dbErr = dbError(error.message);
        return [null, dbErr];
    }

}