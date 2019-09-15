"use strict";
console.log('\n Classes \n');
class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
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
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversarioEsperto = new DataEsperta(3, 11, 1991);
aniversarioEsperto.dia = 4;
console.log('aniversarioEsperto.dia', aniversarioEsperto.dia);
console.log('aniversarioEsperto', aniversarioEsperto);
const casamentoEsperto = new DataEsperta(); // pode se criar sem usar os (), exempo: const casamentoEsperto = new Data
casamentoEsperto.ano = 2017;
console.log('casamentoEsperto:', casamentoEsperto);
