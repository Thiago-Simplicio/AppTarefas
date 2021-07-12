const express = require("express");
const route = express.Router();

const Tarefas = require("../ControllerTarefas/ControllerTarefas");

route.get("/tarefas", Tarefas.index);
route.post("/tarefas", Tarefas.create);
route.delete("/tarefas/:_id", Tarefas.delete);
route.put("/tarefas/", Tarefas.update);
route.get("/tarefas/:_id", Tarefas.listar);

module.exports = route;
