// TODO: connect to postgresql

const { Task } = require("../../entities/task.entities");

exports.createTask = (newTask)  => {
    const task = new Task(newTask);
    const [result, error] = task.validate();

    if (error) {
        const validateError = { statusCode: 403, message: error };
        return [null, validateError]
    }

    // TODO: Do the DB process
    return [result, null];
};