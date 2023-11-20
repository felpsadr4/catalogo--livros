import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import ControleLivros from '../controle/ControleLivro'; 
import ControleEditora from '../controle/ControleEditora';

const LivroDados = () => {
  const controleLivro = new ControleLivros();
  const controleEditora = new ControleEditora();
  const navigate = useNavigate();

  const opcoes = useMemo(() => {
    return controleEditora.getEditoras().map(editora => ({
      value: editora.codEditora,
      text: editora.nome,
    }));
  }, [controleEditora]);

  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [autores, setAutores] = useState('');
  const [codEditora, setCodEditora] = useState(opcoes[0]?.value || 0);

  const tratarCombo = (evento) => {
    setCodEditora(Number(evento.target.value));
  };

  const incluir = (evento) => {
    evento.preventDefault();

    const novoLivro = {
      codigo: 0,
      titulo,
      resumo,
      autores: autores.split('\n'),
      codEditora,
    };

    controleLivro.incluir(novoLivro);
    navigate('/');
  };

  return (
    <main className="container mt-4">
      <h1 className="mb-4">Cadastro de Livro</h1>
      <form onSubmit={incluir}>
        <div className="mb-3">
          <label htmlFor="titulo" className="form-label">Título:</label>
          <input
            type="text"
            className="form-control"
            id="titulo"
            value={titulo}
            onChange={(evento) => setTitulo(evento.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="resumo" className="form-label">Resumo:</label>
          <textarea
            className="form-control w-200"
            id="resumo"
            value={resumo}
            onChange={(evento) => setResumo(evento.target.value)}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="codEditora" className="form-label">Editora:</label>
          <select
            className="form-select"
            id="codEditora"
            value={codEditora}
            onChange={tratarCombo}
          >
            {opcoes.map((opcao) => (
              <option key={opcao.value} value={opcao.value}>
                {opcao.text}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="autores" className="form-label">Autores (um por linha):</label>
          <textarea
            className="form-control"
            id="autores"
            value={autores}
            onChange={(evento) => setAutores(evento.target.value)}
          ></textarea>
        </div>
       
        <button type="submit" className="btn btn-primary">Salvar Dados</button>
      </form>
    </main>
  );
};

export default LivroDados;
