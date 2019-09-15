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
