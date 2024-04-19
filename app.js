const express = require("express");
const TaskRoutes = require("./src/routes/task.routes");

const app = express();

// enable json body
app.use(express.json());

// health check
app.get("/", (_, res) => { res.status(200).send({ message: "All good here, sir!" }) });

// handle task's CRUD
app.use("/tasks", TaskRoutes);

module.exports = app;