import React, { useEffect, useState } from "react";

import { Container, BlocoDeTarefa, MainContainer } from "./StyledApp";

import Tarefas from "./component/Tarefas";

import api from "./services/api";

const App = () => {
  const [title, setTitle] = useState("");
  const [descricao, setDescricao] = useState("");
  const [allTarefas, setAllTarefas] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.post("/tarefas", {
      title,
      descricao,
    });

    setTitle("");
    setDescricao("");

    setAllTarefas([...allTarefas, response.data]);
  }

  useEffect(() => {
    async function getAllTarefas() {
      const response = await api.get("/tarefas");

      setAllTarefas([...response.data]);
    }
    getAllTarefas();
  }, []);

  useEffect(() => {
    function ativaSave() {
      const botao = document.querySelector("#botao");
      botao.style.backgroundColor = "#fba69d";
      botao.style.cursor = "no-drop";

      if (title && descricao) {
        botao.style.backgroundColor = "#fa7a6b";
        botao.style.cursor = "pointer";
      }
    }
    ativaSave();
  }, [title, descricao]);

  async function handleDelete(id) {
    if (window.confirm("Excluir essa Tarefa ?")) {
      var resultado = await api.delete("/tarefas/" + id);
      window.location.href = "/";
    }
  }

  async function handleEdit(id) {
    const response = await api.get("/tarefas/" + id);
    console.log(response);
  }

  return (
    <Container>
      <BlocoDeTarefa>
        <span>Bloco De Tarefas</span>
        <form onSubmit={handleSubmit}>
          <div className="boxField">
            <label>Preencha o Bloco de Tarefa</label>
            <input
              onChange={(event) => setTitle(event.target.value)}
              value={title}
            />
          </div>
          <div className="boxField">
            <label>Descricao da Tarefa</label>
            <textarea
              onChange={(event) => setDescricao(event.target.value)}
              value={descricao}
            ></textarea>
          </div>
          <div className="botao">
            <button id="botao">Salvar Tarefa</button>
          </div>
        </form>
      </BlocoDeTarefa>
      <MainContainer>
        <ul>
          {allTarefas.map((data) => (
            <Tarefas
              key={data.id}
              data={data}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          ))}
        </ul>
      </MainContainer>
    </Container>
  );
};

export default App;
