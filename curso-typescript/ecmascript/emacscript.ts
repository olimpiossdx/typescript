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

const saudacao = () => console.log('Olá');
saudacao();

const falarCom = (pessoa: string) => console.log('Ola + pessoa =', pessoa);
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

function contagemRegressiva(
  inicio: number = 3,
  fim: number = inicio - 5
): void {
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
const numbers = [1, 10, 99 - 5];

// jeito antigo
console.log('Math.max()', Math.max(numbers[0], numbers[1], numbers[2]));

//jeito novo
console.log('Math.max(spread)', Math.max(...numbers));

const turmaA: string[] = ['João', 'Maria', 'Fernanda'];
const turmaB: string[] = ['Fernando', 'Miguel', 'Lorena', ...turmaA];
console.log('turmaB', turmaB);

// operador rest !!
function retornarArray(...args: number[]): number[] {
  return args;
}

const numeros = retornarArray(1, 2, 3, 4, 5, 6);
console.log('numeros', numeros);

console.log('retornarArray()', retornarArray(...numbers));

// Rest e Spread (tupla)

const tupla: [number, string, boolean] = [1, 'abc', false];

function tuplaParam1(a: number, b: string, c: boolean) {
  console.log(`1) ${a} ${b} ${c}`);
}

tuplaParam1(...tupla);

function tuplaParam2(...params: [number, string, boolean]) {
  console.log('Array.isArray(params)', Array.isArray(params));
  console.log(`2) ${params[0]} ${params[1]} ${params[2]}`);
}
tuplaParam2(...tupla);
