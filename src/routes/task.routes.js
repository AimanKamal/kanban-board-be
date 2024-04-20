const router = require("express").Router();

const { 
    getAllTasks,
    getTaskById,
    createTask,
    deleteTask,
    updateTask
} = require("../controllers/tasks/index");

router.get("/", async (req, res) => {
    const [tasks, error] = await getAllTasks();
    if (error) {
        return res.status(error.statusCode).json({ error: error.message });
    }
    return res.status(200).json({ tasks });
});

router.get("/:id", async (req, res) => {
    const id = parseInt(req.params.id);

    const [tasks, error] = await getTaskById(id);
    if (error) {
        return res.status(error.statusCode).json({ error: error.message });
    }
    return res.status(200).json({ tasks });
});

router.post("/", async (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const status = req.body.status;

    const [result, error] = await createTask({ title, description, status });
    if (error) {
        return res.status(error.statusCode).json({ error: error.message });
    }

    return res.status(201).json({ result });
});

router.delete("/:id", async (req, res) => {
    const id = req.params.id;

    const [result, error] = await deleteTask(id);
    if (error) {
        return res.status(error.statusCode).json({ error: error.message });
    }
    return res.status(200).json({ result });
});

router.put("/:id", async (req, res) => {
    // FIXME: maybe make it more dynamic? instead of defining every single column values
    const id = req.params.id;
    const title = req.body.title;
    const description = req.body.description;
    const status = req.body.status;

    const [result, error] = await updateTask({ id, title, description, status });
    if (error) {
        return res.status(error.statusCode).json({ error: error.message });
    }
    return res.status(201).json({ result });
});

module.exports = router;
