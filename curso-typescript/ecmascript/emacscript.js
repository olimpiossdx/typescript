"use strict";
// let & const
var seraQuePode = '?'; //hoisting
console.log('seraQuePode', seraQuePode);
var estaFrio = true;
if (estaFrio) {
    var acao = 'Colocar o casaco!!';
    console.log('acao', acao);
}
var cpf = '123.456.000-99';
// // cpf = '789.101.132-78';
console.log('cpf', cpf);
var segredo = 'externo!';
function revelar() {
    var segredo = 'interno';
    console.log('segredo-Interno', segredo);
}
revelar();
console.log('segredo-externo', segredo);
{
    {
        var def = 'def';
        console.log('def', def);
    }
}
for (var i = 0; i < 10; i++) {
    console.log('i =', i);
}
// console.log('i', i);
// Arrow Function
var somar = function (n1, n2) {
    return n1 + n2;
};
//ou
// function somar(n1: number, n2: number) {
//     return n1 + n2;
//   };
console.log('somar(2,2)', somar(2, 2));
var subtrair = function (n1, n2) { return n1 - n2; };
console.log('subtrair(3,2)', subtrair(3, 2));
var saudacao = function () { return console.log('Olá'); };
saudacao();
var falarCom = function (pessoa) { return console.log('Ola + pessoa =', pessoa); };
falarCom('Jujé');
// this
// function normalComThis() {
//   console.log('this', this);
// }
// normalComThis();
// // const normalComThisEspecial = normalComThis.bind(2);
// const normalComThisEspecial = normalComThis.bind({ nome: 'Ana' });
// normalComThisEspecial();
// // this ???
// console.log('this', this);
// const arrowComThis = () => console.log('this', this);
// arrowComThis();
// Parâmetros padrão
function contagemRegressiva(inicio, fim) {
    if (inicio === void 0) { inicio = 3; }
    if (fim === void 0) { fim = inicio - 5; }
    console.log('inicio', inicio);
    while (inicio >= fim) {
        inicio--;
        console.log('inicio', inicio);
    }
    console.log('fim');
}
contagemRegressiva();
contagemRegressiva(5);
// operadoor rest ou spread
var numbers = [1, 10, 99 - 5];
// jeito antigo
console.log('Math.max()', Math.max(numbers[0], numbers[1], numbers[2]));
//jeito novo
console.log('Math.max(spread)', Math.max.apply(Math, numbers));
var turmaA = ['João', 'Maria', 'Fernanda'];
var turmaB = ['Fernando', 'Miguel', 'Lorena'].concat(turmaA);
console.log('turmaB', turmaB);
// operador rest !!
function retornarArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
var numeros = retornarArray(1, 2, 3, 4, 5, 6);
console.log('numeros', numeros);
console.log('retornarArray()', retornarArray.apply(void 0, numbers));
// Rest e Spread (tupla)
var tupla = [1, 'abc', false];
function tuplaParam1(a, b, c) {
    console.log("1) " + a + " " + b + " " + c);
}
tuplaParam1.apply(void 0, tupla);
function tuplaParam2() {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
    }
    console.log('Array.isArray(params)', Array.isArray(params));
    console.log("2) " + params[0] + " " + params[1] + " " + params[2]);
}
tuplaParam2.apply(void 0, tupla);
//destructuring (array)
var caracteristica = ['motor Zetec 1.8', 2020];
// const motor = caracteristica[0];
// const ano = caracteristica[1]
var motor = caracteristica[0], ano = caracteristica[1];
console.log(motor);
console.log(ano);
//destructuring (Objeto)
var item = {
    nome: 'SSD 480G',
    preco: 200,
    caracteristica: {
        w: 'Importado'
    }
};
var nomeItem = item.nome;
var precoItem = item.preco;
console.log('nomeItem', nomeItem);
console.log('precoItem', precoItem);
var n = item.nome, p = item.preco, w = item.caracteristica.w;
console.log('n', n);
console.log('p', p);
console.log('w', w);
// template string
var usuarioID = 'SuporteCod3r';
var notificacoes = '19';
var boasVindas = 'Boas vindas ' + usuarioID + 'Notificações: ' + notificacoes;
console.log('boasVindas', boasVindas);
var boasVindasTemplateString = "\n            Boas vindas " + usuarioID + ", \n            Notifica\u00E7\u00F5es: " + (parseInt(notificacoes) > 9 ? '+9' : notificacoes);
console.log('boasVindasTemplateString', boasVindasTemplateString);
console.log('templateString', "" + (1 + 1) * 30);
console.log('templateString', "Mtoro :" + caracteristica[0]);
//Desafio
// Exercicio 1
// var dobro = function(valor) {
//   return valor * 2;
// };
// console.log(dobro(10));
//Resposta
var dobro = function (valor) { return valor * 2; };
console.log(dobro(10));
// Exercicio 2
// var dizerOla = function(nome) {
//   if (nome === undefined) {
//     nome = 'Pessoa';
//   }
//   console.log('Ola, ' + nome);
// };
// dizerOla();
// dizerOla('Anna');
//Resposta
var dizerOla = function (nome) {
    if (nome === void 0) { nome = 'Pessoa'; }
    if (nome === undefined) {
        nome = 'Pessoa';
    }
    console.log('Ola, ' + nome);
};
dizerOla();
dizerOla('Anna');
// Exercicio 3
// var nums = [-3, 33, 38, 5];
// Imprimir menor valor
// console.log('???');
//resposta
var nums = [-3, 33, 38, 5];
console.log('Menor valor ', Math.min.apply(Math, nums));
// Exercicio 4
// var array = [55, 20];
// Adicionar todos os elementos de "nums" em array
// console.log(array);
//Resposta
var array = [55, 20].concat(nums);
console.log(array);
// Exercicio 5
// var notas = [8.5, 6.3, 9.4];
// var notas1 = notas[0];
// var notas2 = notas[1];
// var notas3 = notas[2];
// console.log(nota1, nota2, nota3);
//Resposta
var notas = [8.5, 6.3, 9.4];
var notas1 = notas[0], notas2 = notas[1], notas3 = notas[2];
console.log(notas1, notas2, notas3);
// Exercicio 6
// var cientista = { primeiroNome: 'Will', experiencia: 12 };
// var primeiroNome = cientista.primeiroNome;
// var experiencia = cientista.experiencia;
// console.log(primeiroNome, experiencia);
//Resposta
var cientista = {
    primeiroNome: 'Will',
    experiencia: 12
};
var primeiroNome = cientista.primeiroNome, experiencia = cientista.experiencia;
console.log(primeiroNome, experiencia);
