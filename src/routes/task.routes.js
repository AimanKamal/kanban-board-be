const router = require("express").Router();
const { getAllTasks, getTaskById } = require("../controllers/tasks/get-tasks");
const { createTask } = require("../controllers/tasks/create-task");
const { deleteTask } = require("../controllers/tasks/delete-task");


router.get("/", (req, res) => {
    const [tasks, error] = getAllTasks();
    if (error) {
        return res.status(error.statusCode).json({ error: error.message });
    }
    return res.status(200).json({ tasks });
});

router.get("/:id", (req, res) => {
    const id = req.params.id;

    const [tasks, error] = getTaskById(id);
    if (error) {
        return res.status(error.statusCode).json({ error: error.message });
    }
    return res.status(200).json({ tasks });
});

router.post("/", (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const status = req.body.status;

    const [result, error] = createTask({ title, description, status });
    if (error) {
        return res.status(error.statusCode).json({ error: error.message });
    }

    return res.status(201).json({ result });
});

router.delete("/:id", (req, res) => {
    const id = req.params.id;

    const [result, error] = deleteTask(id);
    if (error) {
        return res.status(error.statusCode).json({ error: error.message });
    }
    return res.status(204).json({ result });
})

module.exports = router;
