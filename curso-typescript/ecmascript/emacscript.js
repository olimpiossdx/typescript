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
