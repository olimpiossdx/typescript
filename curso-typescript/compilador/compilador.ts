console.log('\n Compilador \n\n');
let canal: string = 'Gaveta';
let inscritos: number = 610234;

//canal = inscritos;
console.log(`Canal = ${canal}`);

// nome = 'Pedro';
// console.log(`Nome: ${nome}`);

// função auto-invocada

(function() {
  let nome: string = 'Ana';
})();

/// evitando 'any' implícito

function soma(a: any, b: any) {
  return a + b;
}
let qualquerCoisa;
qualquerCoisa = 12;
qualquerCoisa = 'abc';

function saudaer(isManha: boolean) {
  let saudacao: string;

  if (isManha) {
    saudacao = 'Bom dia!';
  } else {
    saudacao = 'tenha uma boa vinda!';
  }
  return saudacao;
}
