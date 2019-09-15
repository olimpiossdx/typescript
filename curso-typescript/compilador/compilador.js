"use strict";
console.log('\n Compilador \n\n');
let canal = 'Gaveta';
let inscritos = 610234;
//canal = inscritos;
console.log(`Canal = ${canal}`);
// nome = 'Pedro';
// console.log(`Nome: ${nome}`);
// função auto-invocada
(function () {
    let nome = 'Ana';
})();
/// evitando 'any' implícito
function soma(a, b) {
    return a + b;
}
let qualquerCoisa;
qualquerCoisa = 12;
qualquerCoisa = 'abc';
function saudaer(isManha) {
    let saudacao;
    if (isManha) {
        saudacao = 'Bom dia!';
    }
    else {
        saudacao = 'tenha uma boa vinda!';
    }
    return saudacao;
}
