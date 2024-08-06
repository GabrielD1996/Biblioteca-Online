import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./index.scss";
import { LivrosService } from "../../api/LivrosService";

const LivrosCadastro = () => {
  const [livro, setLivro] = useState([]);
  const navigate = useNavigate();
  async function createLivro(event) {
    event.preventDefault();
    const body = {
      id: Number(livro.id),
      titulo: livro.titulo,
      num_paginas: Number(livro.num_paginas),
      isbn: livro.isbn,
      editora: livro.editora,
    };
    if (
      livro.id != undefined &&
      livro.id != "" &&
      livro.titulo != undefined &&
      livro.titulo != "" &&
      livro.num_paginas != undefined &&
      livro.num_paginas != "" &&
      livro.isbn != undefined &&
      livro.isbn != "" &&
      livro.editora != undefined &&
      livro.editora != ""
    ) {
      await LivrosService.createLivro(body)
        .then((response) => {
          console.log("chegou ate aqui", body)
          alert(response.data.message);
          navigate(`/livros/${response.data.livro.id}`)
        })
        .catch(({ response: { data, status } }) => {
          const mensagemErro = data.message || "Erro desconhecido";
          alert(`${status} - ${mensagemErro}`);
        });
    }
  }

  return (
    <>
      <Header />
      <div className="livrosCadastro">
        <h1>Cadastro de Livros</h1>
        <div>
          <form id="formulario" onSubmit={createLivro}>
            <div className="form-group">
              <label>Id</label>
              <input
                type="text"
                id="id"
                required
                onChange={(event) => {
                  setLivro({ ...livro, id: event.target.value });
                }}
              ></input>
            </div>
            <div className="form-group">
              <label>Titulo</label>
              <input
                type="text"
                id="titulo"
                required
                onChange={(event) => {
                  setLivro({ ...livro, titulo: event.target.value });
                }}
              ></input>
            </div>
            <div className="form-group">
              <label>Número de Páginas</label>
              <input
                type="text"
                id="num"
                required
                onChange={(event) => {
                  setLivro({ ...livro, num_paginas: event.target.value });
                }}
              ></input>
            </div>
            <div className="form-group">
              <label>ISBN</label>
              <input
                type="text"
                id="isbn"
                required
                onChange={(event) => {
                  setLivro({ ...livro, isbn: event.target.value });
                }}
              ></input>
            </div>
            <div className="form-group">
              <label>Editora</label>
              <input
                type="text"
                id="editora"
                required
                onChange={(event) => {
                  setLivro({ ...livro, editora: event.target.value });
                }}
              ></input>
            </div>
            <div className="form-group">
              <button type="submit">Cadastrar Livro</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LivrosCadastro;
