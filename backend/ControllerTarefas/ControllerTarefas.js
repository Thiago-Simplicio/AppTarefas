const Tarefas = require("../Data/DataTarefas");

module.exports = {
  async index(req, res) {
    const Notes = await Tarefas.find();
    return res.json(Notes);
  },

  async create(req, res) {
    const { title, descricao } = req.body;

    var data = {};

    var Notes;
    if ((title, descricao)) {
      data = { title, descricao };
      Notes = await Tarefas.create(data);
      return res.status(200).json(Notes);
    } else {
      return res.status(400).json({ message: "Erro ao salvar Tarefa" });
    }
  },

  async update(req, res) {
    const { title, descricao } = req.body;
    const data = { _id, title, descricao };
    var Notes = await Tarefas.findOneAndUpdate({ _id }, data, { new: true });
    return res.json(Notes);
  },

  async delete(req, res) {
    var { _id } = req.params;
    var Notes = await Tarefas.findOneAndDelete({ _id });
    return res.json(Notes);
  },

  async listar(req, res) {
    var { _id } = req.params;
    var Notes = await Tarefas.findOne({ _id });
    return res.json(Notes);
  },
};
