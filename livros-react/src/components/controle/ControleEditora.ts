//a) Importar a classe Editora:
import Editora from '../modelo/Editora';

//b) Definir a variável editoras, como Array<Editora>, contendo ao menos três elementos, no formato JSON

const editoras: Editora[] = [
    new Editora(1, 'Editora Josef'),
    new Editora(2, 'Editora Codando'),
    new Editora(3, 'Editora React')
];

//c) Criar a classe ControleEditora, contendo os métodos getNomeEditora e getEditoras

class ControleEditora{
    //d) Implementar o método getEditoras, com o retorno do vetor editoras
    getEditoras(): Editora[]{
        return editoras;
    }


//e) Implementar o método getNomeEditora, recebendo codEditora, do tipo numérico, e retornando o nome da editora, através de uma operação filter sobre o vetor editoras

getNomeEditora(codEditora: number): string | undefined{
    const editora = editoras.find(editora => editora.codEditora === codEditora);
    return editora ? editora.nome : undefined;
    }
}

export default ControleEditora;