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
