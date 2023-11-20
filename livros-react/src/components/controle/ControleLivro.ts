//a) Importar a classe Livro
import Livro from '../modelo/Livro';


//b) Definir a variável livros, como Array<Livro>, contendo ao menos três elementos, no formato JSON
const livros: Livro[] = [
    new Livro(1,1, 'Programação Web com plataforma Java', 'Este livro apresenta as informações necessárias para que a pessoa estudante de programação possa implementar uma aplicação web utilizando a plataforma Java.', ['João Alexandre Magri']),
    new Livro(2,2, 'Aplicativos com Bootstrap e Angular', 'Uma breve introdução ao JavaScript e ao jQuery, linguagens fundamentais ao desenvolvimento web, e mostra as funcionalidades de HTML5', ['Diego Zabot', 'Ecivaldo Matos']),
    new Livro(3,3, 'Projetos com Python e Arduino', 'Esta obra apresenta projetos que unem essas tecnologias com o objetivo de criar projetos didáticos, mas que podem ser utilizados ou adaptados para diversos fins.', ['Cláudio Luis Vieira Oliveira', 'Humberto Augusto Piovesana Zanetti'])
];

//c) Criar a classe ControleLivro, contendo os métodos obterLivros, incluir e excluir
class ControleLivros {

    //d) Implementar o método obterLivros, com o retorno do vetor livros
    obterLivros(): Livro[]{
        return livros;
    }

    //e) Implementar o método incluir, recebendo um objeto do tipo Livro, que terá o código trocado pelo código mais alto do vetor, incrementado de um, e depois será adicionado ao vetor
    incluir(novoLivro: Livro): void{
        const novoCodigo = livros.reduce((maxCodigo, livro) => Math.max(maxCodigo, livro.codigo), 0) +1;
        novoLivro.codigo = novoCodigo;
        livros.push(novoLivro)
    }
    // f) Implementar o método excluir, recebendo um código numérico, que irá encontrar o índice do livro com o código fornecido, através de findIndex, e removê-lo com o uso de splice
    excluir(codigo: number) : void {
        const livroIndex = livros.findIndex(livro => livro.codigo === codigo);
        if (livroIndex !== -1){
            livros.splice(livroIndex, 1);
        }
    }
}

export default ControleLivros;