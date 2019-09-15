"use strict";
var canal = 'Gaveta';
var inscritos = 610234;
//canal = inscritos;
console.log("Canal = " + canal);
// nome = 'Pedro';
// console.log(`Nome: ${nome}`);
// função auto-invocada
(function () {
    var nome = 'Ana';
})();
/// evitando 'any' implícito
function soma(a, b) {
    return a + b;
}
var qualquerCoisa;
qualquerCoisa = 12;
qualquerCoisa = 'abc';
function saudaer(isManha) {
    var saudacao;
    if (isManha) {
        saudacao = 'Bom dia!';
    }
    else {
        saudacao = 'tenha uma boa vinda!';
    }
    return saudacao;
}
