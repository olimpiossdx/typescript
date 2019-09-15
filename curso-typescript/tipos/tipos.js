"use strict";
//string
var nome = 'joão';
console.log(nome);
// numbers
var idade = 27;
console.log('idade:', idade);
idade = 27.5;
console.log('idade:', idade);
// boolean
var possuiHobbies = false;
console.log('possuiHobbies', possuiHobbies);
// tipos explícitos
var minhaIdade;
minhaIdade = 27;
console.log('typeof minhaIdade', typeof minhaIdade);
// minhaIdade = "27";
console.log('typeof minhaIdade', typeof minhaIdade);
//array
//array do tipo any[]
var hobbies = ['Cozinha', 'Pratica esportes'];
console.log('hobbies[0]:', hobbies[0]);
console.log('typeof hobbies', typeof hobbies);
hobbies = [100, 200, 300];
console.log('hobbies', hobbies);
//tupla
var endereco = ['Av Principal', 123, ''];
console.log('endereco:', endereco);
endereco = ['Rua Importante', 123, 'Bloco C'];
console.log('endereco:', endereco);
// enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 101] = "Azul";
    Cor[Cor["Laranja"] = 102] = "Laranja";
    Cor[Cor["Amarelo"] = 103] = "Amarelo";
    Cor[Cor["Vermelho"] = 104] = "Vermelho";
})(Cor || (Cor = {}));
var minhaCor = Cor.Verde;
console.log('minhaCor', minhaCor);
console.log('Cor.Azul', Cor.Azul);
console.log('Cor.Cinza', Cor.Cinza);
console.log('Cor.Verde', Cor.Verde);
console.log('Cor.Amarelo', Cor.Amarelo);
console.log('Cor.Vermelho', Cor.Vermelho);
// tipo any
var carro = 'BMW';
console.log('carro', carro);
carro = { marca: 'BMW', ano: 2019 };
console.log('carro', carro);
//funções
function retornaMeuNome() {
    // return minhaIdade;
    return nome;
}
console.log('retornaMeuNome()', retornaMeuNome());
function digaOi() {
    console.log('oi');
    // return minhaIdade
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
// console.log("multiplicar(2,'Bia')", multiplicar(2, "Bia"));
console.log('multiplicar(2,5)', multiplicar(2, 5));
// tipo função
// notação arrow para definir
var teste = function (a, b) {
    return true;
};
var calculo;
// calculo = digaOi;
// console.log(`calculo`);
// calculo();
calculo = multiplicar;
console.log('calculo(5,8)', calculo(5, 8));
// Objetos e tipos
// estruturado por chave: valor
//notação objeto de definição de tipos
var usuario = {
    nome: 'joão',
    idade: 27
};
console.log('usuario:', usuario);
// usuario = {}
// usuario = {
//   name: 'Maria',
//   age: 31
// }
usuario = {
    idade: 31,
    nome: 'Maria'
};
console.log('usuario:', usuario);
// Desafio
/**
 * Criar um objeto funcionário com:
 *  - Array de strings com os nomes dos supervisores
 *  - Função de bater ponto que recebe a hora (número)
 *        e retorna uma string
 *        -> Ponto normal ( <= 8 )
 *        -> Fora do horário ( > 8 )
 */
var funcionario = {
    supervisores: ['Joaquim', 'jujé', 'juaum', 'jaum'],
    baterPonto: function (hora) {
        return hora > 8 ? 'Fora do horário' : 'Ponto normal';
    }
};
console.log('minhaResposta');
console.log('funcionario.supervisores', funcionario.supervisores);
console.log('funcionario.supervisores', funcionario.baterPonto(10));
console.log('funcionario.supervisores', funcionario.baterPonto(5));
// outro modelo de reposta
console.log('Resposta do professor');
var funcionarioResposta = {
    supervisores: ['Ana', 'Fernando'],
    baterPonto: function (horario) {
        if (horario <= 8) {
            return 'Ponto Normal';
        }
        else {
            return 'Fora do horário';
        }
    }
};
console.log('funcionarioResposta.supervisores', funcionarioResposta.supervisores);
console.log('funcionarioResposta.baterPonto(8)', funcionarioResposta.baterPonto(8));
console.log('funcionarioResposta.baterPonto(9)', funcionarioResposta.baterPonto(9));
var Funcionario2 = {
    supervisores: ['Bia', 'Carlos'],
    baterPonto: function (horario) {
        if (horario <= 8) {
            return 'Ponto Normal';
        }
        else {
            return 'Fora do horário';
        }
    }
};
// Union Types
var nota = 10;
console.log("Minha nota \u00E9 " + nota + "!(number)");
nota = '10';
console.log("Minha nota \u00E9 " + nota + "!(string)");
// checando tipos em runtime
var valor = 30;
if (typeof valor === 'number') {
    console.log('esse valor é um number !');
}
else {
    console.log('typeof valor', typeof valor);
}
// tipo de retorno never (função que nunca vai retornar )
// pode ser usado para criar método personalizado de error em métodos e funções
function falha(msg) {
    throw new Error(msg);
}
var produto = {
    nome: 'Sabão',
    preco: 8,
    validarProduto: function () {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome');
        }
        if (this.preco <= 0) {
            falha('Preço inválido!');
        }
    }
};
produto.validarProduto();
// valores opcionais como null
var alturaOpcional = 12;
alturaOpcional = null;
var contato1 = {
    nome: 'Fulano',
    tel1: '982452',
    tel2: null
};
console.log('contato1.nome', contato1.nome);
console.log('contato1.tel1', contato1.tel1);
console.log('contato1.tel2', contato1.nome);
var podeSerNulo = null;
podeSerNulo = 12;
console.log('podeSerNulo', podeSerNulo);
podeSerNulo = 'abc';
console.log('podeSerNulo', podeSerNulo);
