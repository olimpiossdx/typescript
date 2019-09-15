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
