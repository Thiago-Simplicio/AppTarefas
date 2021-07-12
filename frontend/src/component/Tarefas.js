import React, { useEffect } from "react";

const Tarefas = ({ data, handleDelete, handleEdit }) => {
  return (
    <div>
      <li>
        <div className="header">
          <p>{data.title}</p>
          <span onClick={() => handleDelete(data._id)}>X</span>
        </div>
        <textarea value={data.descricao}></textarea>
        <div className="acao">
          <button onClick={() => handleEdit(data._id)}>Editar</button>
        </div>
      </li>
    </div>
  );
};

export default Tarefas;
