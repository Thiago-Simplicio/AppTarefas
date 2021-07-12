import styled from "styled-components";

export const Container = styled("div")`
  width: 100%;
  height: 100%;
  background-color: #131313;
  display: flex;
  flex-direction: row;
`;

export const BlocoDeTarefa = styled("div")`
  width: 320px;
  height: 450px;
  margin-left: 85px;
  margin-top: 85px;
  background-color: white;
  position: fixed;
  border-radius: 15px;
  padding: 10px;
  box-shadow: 0px 5px 7px black;
  display: flex;
  align-items: center;
  flex-direction: column;

  span {
    width: 100%;
    color: salmon;
    font-family: sans-serif;
    text-align: center;
    font-size: 25px;
    text-shadow: 2px 2px 9px #fba69d;
  }

  form {
    margin-top: 85px;
    width: 100%;
  }
  form .boxField {
    margin-bottom: 20px;
  }
  form .boxField label {
    display: block;
    font-family: sans-serif;
    letter-spacing: 3px;
    color: #c1c1c1;
  }
  form .boxField input {
    width: 100%;
    padding: 7px 10px;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 2px solid #fba69d;
    color: #c1c1c1;
    outline: 0;
    font-size: 18px;
  }
  form .boxField textarea {
    padding: 7px 10px;
    border: 2px solid #fba69d;
    border-radius: 5px;
    width: 100%;
    height: 130px;
    resize: none;
    outline: 0;
    color: #c1c1c1;
    font-size: 16px;
  }
  form .botao {
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      padding: 10px 0px;
      width: 80%;
      background-color: #fba69d;
      color: white;
      font-family: sans-serif;
      text-transform: uppercase;
      border: none;
      outline: 0;
      cursor: no-drop;
    }
  }
`;

export const MainContainer = styled("div")`
  width: 100%;
  margin-left: 445px;
  margin-top: 85px;

  ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    gap: 25px;

    li {
      width: 320px;
      height: 180px;
      border-radius: 5px;
      padding: 10px;
      background-color: white;

      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        p {
          font-family: sans-serif;
          color: salmon;
          letter-spacing: 2px;
          font-weight: bold;
        }

        span {
          color: #fba69d;
          cursor: pointer;
          font-family: sans-serif;
          transition: all 0.3s ease;
        }
        span:hover {
          color: salmon;
        }
      }
      textarea {
        margin-top: 25px;
        width: 100%;
        height: 95px;
        resize: none;
        border: 1px solid #ccc;
        padding: 7px;
        font-family: sans-serif;
        color: #131313;
      }
      .acao {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        button {
          width: 25%;
          padding: 3px 0px;
          font-family: sans-serif;
          color: white;
          background-color: salmon;
          border: none;
          outline: 0;
          border-radius: 15px;
          cursor: pointer;
        }
      }
    }
  }
`;
