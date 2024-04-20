const { getAllTasks, getTaskById } = require("./get-tasks");
const { createTask } = require("./create-task");
const { deleteTask } = require("./delete-task");
const { updateTask } = require("./update-task");

// TODO: Refactor controller so that database logic should be in a separate folder

exports.getAllTasks = getAllTasks;
exports.getTaskById = getTaskById;
exports.createTask = createTask;
exports.deleteTask = deleteTask;
exports.updateTask = updateTask;