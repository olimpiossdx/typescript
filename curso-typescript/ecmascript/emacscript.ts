console.log('\n Emascript \n\n ');
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

//destructuring (array)

const caracteristica = ['motor Zetec 1.8', 2020];
// const motor = caracteristica[0];
// const ano = caracteristica[1]

const [motor, ano] = caracteristica;
console.log(motor);
console.log(ano);

//destructuring (Objeto)

const item = {
  nome: 'SSD 480G',
  preco: 200,
  caracteristica: {
    w: 'Importado'
  }
};

const nomeItem = item.nome;
const precoItem = item.preco;
console.log('nomeItem', nomeItem);
console.log('precoItem', precoItem);

const {
  nome: n,
  preco: p,
  caracteristica: { w }
} = item;
console.log('n', n);
console.log('p', p);
console.log('w', w);

// template string

const usuarioID: string = 'SuporteCod3r';
const notificacoes: string = '19';
const boasVindas = 'Boas vindas ' + usuarioID + 'Notificações: ' + notificacoes;
console.log('boasVindas', boasVindas);

const boasVindasTemplateString = `
            Boas vindas ${usuarioID}, 
            Notificações: ${parseInt(notificacoes) > 9 ? '+9' : notificacoes}`;

console.log('boasVindasTemplateString', boasVindasTemplateString);
console.log('templateString', `${(1 + 1) * 30}`);
console.log('templateString', `Mtoro :${caracteristica[0]}`);

//Desafio
// Exercicio 1
// var dobro = function(valor) {
//   return valor * 2;
// };
// console.log(dobro(10));
//Resposta
const dobro = (valor: number) => valor * 2;

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

const dizerOla = (nome: string = 'Pessoa'): void => {
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
const nums: number[] = [-3, 33, 38, 5];
console.log('Menor valor ', Math.min(...nums));

// Exercicio 4
// var array = [55, 20];
// Adicionar todos os elementos de "nums" em array
// console.log(array);
//Resposta
const array: number[] = [55, 20, ...nums];
console.log(array);

// Exercicio 5
// var notas = [8.5, 6.3, 9.4];
// var notas1 = notas[0];
// var notas2 = notas[1];
// var notas3 = notas[2];
// console.log(nota1, nota2, nota3);
//Resposta
const notas: number[] = [8.5, 6.3, 9.4];
const [notas1, notas2, notas3] = notas;
console.log(notas1, notas2, notas3);

// Exercicio 6
// var cientista = { primeiroNome: 'Will', experiencia: 12 };
// var primeiroNome = cientista.primeiroNome;
// var experiencia = cientista.experiencia;
// console.log(primeiroNome, experiencia);
//Resposta
const cientista: { primeiroNome: string; experiencia: number } = {
  primeiroNome: 'Will',
  experiencia: 12
};
const { primeiroNome, experiencia } = cientista;
console.log(primeiroNome, experiencia);

// Promises
// trabalhava antigamente com Callback
// function esperar3s(Callback: (dado: string) => void) {
//   setTimeout(() => {
//     Callback('3s depois...');
//   }, 3000);
// }

// esperar3s(function(resultado: string) {
//   console.log('resultado(callback na function esperar3s):', resultado);
// });

// // convertendo para Promise
// function esperar3sPromise() {
//   return new Promise((resolve: any) => {
//     setTimeout(() => {
//       resolve('3s depois...');
//     }, 3000);
//   });
// }
// esperar3sPromise().then(dado => console.log('dado(Usando Promoise):', dado));

// fetch('https://swapi.co/api/people/1')
//   .then(res => res.json())
//   .then(personagem => personagem.films)
//   .then(films => fetch(films[0]))
//   .then(resFilm => resFilm.json())
//   .then(filme => console.log(filme.title))
//   .catch(err => console.log('Catch!!!!' + err));
