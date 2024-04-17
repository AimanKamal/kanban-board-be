const express = require("express");

const app = express();

app.get("/", (_, res) => { res.status(200).send({ message: "All good here, sir!" }) });

module.exports = app;