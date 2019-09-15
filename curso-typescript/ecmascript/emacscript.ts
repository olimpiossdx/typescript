// let & const
let seraQuePode = '?'; //hoisting
console.log('seraQuePode', seraQuePode);

let estaFrio = true;
if (estaFrio) {
  let acao = 'Colocar o casaco!!';
  console.log('acao', acao);
}

const cpf: string = '123.456.000-99';
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
    const def = 'def';
    console.log('def', def);
  }
}

for (let i = 0; i < 10; i++) {
  console.log('i =', i);
}
// console.log('i', i);

// Arrow Function

const somar = function(n1: number, n2: number) {
  return n1 + n2;
};
//ou

// function somar(n1: number, n2: number) {
//     return n1 + n2;
//   };

console.log('somar(2,2)', somar(2, 2));

const subtrair = (n1: number, n2: number): number => n1 - n2;
console.log('subtrair(3,2)', subtrair(3, 2));
