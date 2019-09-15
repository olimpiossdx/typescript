//string
let nome: string = "joão";
console.log(nome);

// numbers
let idade: number = 27;
console.log("idade:", idade);
idade = 27.5;
console.log("idade:", idade);

// boolean
let possuiHobbies: boolean = false;
console.log("possuiHobbies", possuiHobbies);

// tipos explícitos
let minhaIdade: number;
minhaIdade = 27;
console.log("typeof minhaIdade", typeof minhaIdade);
// minhaIdade = "27";
console.log("typeof minhaIdade", typeof minhaIdade);

//array
//array do tipo any[]
let hobbies: any[] = ["Cozinha", "Pratica esportes"];
console.log("hobbies[0]:", hobbies[0]);
console.log("typeof hobbies", typeof hobbies);

hobbies = [100, 200, 300];
console.log("hobbies", hobbies);

//tupla
let endereco: [string, number, string] = ["Av Principal", 123, ""];
console.log("endereco:", endereco);
endereco = ["Rua Importante", 123, "Bloco C"];
console.log("endereco:", endereco);

// enums
enum Cor {
  Cinza, // 0
  Verde = 100, // 1
  Azul, //2
  Laranja,
  Amarelo,
  Vermelho
}

let minhaCor: Cor = Cor.Verde;
console.log("minhaCor", minhaCor);

console.log("Cor.Azul", Cor.Azul);
console.log("Cor.Cinza", Cor.Cinza);
console.log("Cor.Verde", Cor.Verde);
console.log("Cor.Amarelo", Cor.Amarelo);
console.log("Cor.Vermelho", Cor.Vermelho);

// tipo any
let carro: any = "BMW";
console.log("carro", carro);
carro = { marca: "BMW", ano: 2019 };
console.log("carro", carro);

//funções

function retornaMeuNome(): string {
  // return minhaIdade;
  return nome;
}
console.log("retornaMeuNome()", retornaMeuNome());

function digaOi(): void {
  console.log("oi");
  // return minhaIdade
}

digaOi();

function multiplicar(numA: number, numB: number): number {
  return numA * numB;
}
// console.log("multiplicar(2,'Bia')", multiplicar(2, "Bia"));
console.log("multiplicar(2,5)", multiplicar(2, 5));

// tipo função

// notação arrow para definir
const teste = function(a: number, b: number): boolean {
  return true;
};
let calculo: (numeroA: number, numeroB: number) => number;
// calculo = digaOi;
// console.log(`calculo`);
// calculo();

calculo = multiplicar;
console.log("calculo(5,8)", calculo(5, 8));

// Objetos e tipos
// estruturado por chave: valor

//notação objeto de definição de tipos
let usuario: { nome: string; idade: number } = {
  nome: "joão",
  idade: 27
};

console.log("usuario:", usuario);
// usuario = {}

// usuario = {
//   name: 'Maria',
//   age: 31
// }

usuario = {
  idade: 31,
  nome: "Maria"
};
console.log("usuario:", usuario);

// Desafio
/**
 * Criar um objeto funcionário com:
 *  - Array de strings com os nomes dos supervisores
 *  - Função de bater ponto que recebe a hora (número)
 *        e retorna uma string
 *        -> Ponto normal ( <= 8 )
 *        -> Fora do horário ( > 8 )
 */
let funcionario: {
  supervisores: string[];
  baterPonto: (hora: number) => string;
} = {
  supervisores: ["Joaquim", "jujé", "juaum", "jaum"],
  baterPonto: (hora: number) => {
    return hora > 8 ? "Fora do horário" : "Ponto normal";
  }
};
console.log("minhaResposta");
console.log("funcionario.supervisores", funcionario.supervisores);
console.log("funcionario.supervisores", funcionario.baterPonto(10));
console.log("funcionario.supervisores", funcionario.baterPonto(5));

// outro modelo de reposta
console.log("Resposta do professor");
let Funcionario: {
  supervisores: string[];
  baterPonto: (hora: number) => string;
} = {
  supervisores: ["Ana", "Fernando"],
  baterPonto(horario: number): string {
    if (horario <= 8) {
      return "Ponto Normal";
    } else {
      return "Fora do horário";
    }
  }
};

console.log("Funcionario.supervisores", Funcionario.supervisores);
console.log("Funcionario.baterPonto(8)", Funcionario.baterPonto(8));
console.log("Funcionario.baterPonto(9)", Funcionario.baterPonto(9));
