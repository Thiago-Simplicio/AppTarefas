const mongoose = require("mongoose");

const DataTarefas = new mongoose.Schema({
  title: String,
  descricao: String,
});

const Tarefas = mongoose.model("Tarefas", DataTarefas);
module.exports = Tarefas;
