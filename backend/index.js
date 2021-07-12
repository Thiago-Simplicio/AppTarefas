const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost:27017/Bloco-da-Tarefas", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  })
  .then(function () {
    console.log("Servidor conectado ao MongoDB");
  })
  .catch(function (error) {
    console.log("Erro ao se conectar ao MongoDB " + error);
  });

const route = require("./Route/Route");
app.use("/", route);

const port = 9091;
app.listen(port, function () {
  console.log("Servidor rodando em http://localhost:9091");
});
