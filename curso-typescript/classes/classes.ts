console.log('\n Classes \n');
class Data {
  // Público po padrão
  dia: number;
  public mes: number;
  ano: number;

  constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;
  }
}

const aniversario = new Data(3, 11, 1991);
aniversario.dia = 4;
console.log('aniversario.dia', aniversario.dia);
console.log('aniversario', aniversario);

const casamento = new Data(); // pode se criar sem usar os (), exempo: const casamento = new Data
casamento.ano = 2017;
console.log('casamento:', casamento);

class DataEsperta {
  constructor(
    public dia: number = 1,
    public mes: number = 1,
    public ano: number = 1970
  ) {}
}

const aniversarioEsperto = new DataEsperta(3, 11, 1991);
aniversarioEsperto.dia = 4;
console.log('aniversarioEsperto.dia', aniversarioEsperto.dia);
console.log('aniversarioEsperto', aniversarioEsperto);

const casamentoEsperto = new DataEsperta(); // pode se criar sem usar os (), exempo: const casamentoEsperto = new Data
casamentoEsperto.ano = 2017;
console.log('casamentoEsperto:', casamentoEsperto);

// Desafio Classe Produto
// Atributos: nome, preco e desconto
// Criar o construtor
// Obs 1: Desconto é opcional (valor padrão 0)
// Obs 2: Criar dois produtos: passando dois e três params
class Produto {
  constructor(
    public nome: string,
    public preco: number,
    public desconto: number = 0
  ) {}
  // Criar método precoComDesconto
  // Quais são os parâmetros e o retorno?
  // Alterar métdodo resumo para mostar o preço com desconto
  public precoComDesconto(): number {
    return this.preco * (1 - this.desconto);
  }
  public resumo(): string {
    return `${this.nome} custa R$${this.precoComDesconto()} (${this.desconto *
      100}% off)`;
  }
}
const prod1 = new Produto('Caneta Bic Preta', 4.2);
prod1.desconto = 0.06;
console.log('prod1:', prod1.resumo());

const prod2 = new Produto('Caderno Escolar', 18.8, 0.15);
console.log('prod2:', prod2.resumo());

// Modificadores de acesso

class Carro {
  private velocidadeAtual: number = 0;

  constructor(
    public marca: string,
    public moddelo: string,
    private velocidadeMaxima: number = 200
  ) {}
  private alterarVelocidade(delta: number): number {
    const novaVelocidade = this.velocidadeAtual + delta;
    const velocidadeValida =
      novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;
    if (velocidadeValida) {
      this.velocidadeAtual = novaVelocidade;
    } else {
      this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
    }

    return this.velocidadeAtual;
  }
  public acelerar(): number {
    return this.alterarVelocidade(5);
  }
  /**
   * frear
   */
  public frear(): number {
    return this.alterarVelocidade(-5);
  }
}

const carro1 = new Carro('Ford', 'ka', 185);
Array(50)
  .fill(0)
  .forEach(() => carro1.acelerar());
console.log('carro1.acelacelerarear', carro1.acelerar());

Array(35)
  .fill(0)
  .forEach(() => carro1.frear());
console.log('carro1.frear', carro1.frear());

/// simular "erros"
// carro1.velocidadeAtual = 300;
// console.log('carro1.velocidadeAtual', carro1.velocidadeAtual);

// carro1.velocidadeMaxima = 500;
// console.log('carro1.velocidadeMaxima', carro1.velocidadeMaxima);

// carro1.alterarVelocidade(150);
// console.log('carro1.velocidadeAtual', carro1.velocidadeAtual);
