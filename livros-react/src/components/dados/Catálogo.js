
import React, { useState, useEffect, useMemo } from 'react';
import ControleLivros from '../controle/ControleLivro';
import ControleEditora from '../controle/ControleEditora';

const LinhaLivro = ({ livro, excluir }) => {
    const controleEditora = new ControleEditora();
    const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

    return (
        <div className="container col-10">
            <div className='row p-3 text-start'>            
                <div className='col-2'>{livro.titulo} <br></br> <button type="button" className="btn btn-danger" onClick={() => excluir(livro.codigo)}>Excluir</button></div>
                <div className='col-6'>{livro.resumo}</div>
                <div className='col-2'>{nomeEditora}</div>
                <ul className='col-2'>
                    {livro.autores.map((autor, index) => (
                        <li key={index}>{autor}</li>))}
                </ul>
            </div>
        </div>
    );
};

const Catalogo = () => {
    const [livros, setLivros] = useState([]);
    const [carregado, setCarregado] = useState(false);

    // Utilizando useMemo para memoizar a criação de controleLivro
    const controleLivro = useMemo(() => new ControleLivros(), []);

    useEffect(() => {
        if (!carregado) {
            setLivros(controleLivro.obterLivros());
            setCarregado(true);
        }
    }, [carregado, controleLivro]);

    const excluir = (codigo) => {
        controleLivro.excluir(codigo);
        setCarregado(false);
    };

    return (
        <main>
        
            <div className="container col-10">
                <h1 className='pt-5 text-start'>Catálogo de Livros</h1>
                
                <div className='row bg-dark text-light p-3 text-start'>
                    <div className='col-2'>Título</div>
                    <div className='col-6'>Resumo</div>
                    <div className='col-2'>Editora</div>
                    <div className='col-2'>Autores</div>
                </div>
            </div>
            
            <div>
                {livros.map((livro) => (
                    <LinhaLivro key={livro.codigo} livro={livro} excluir={excluir} />
                ))}
            </div>
        </main>
    );
};

export default Catalogo;
