"use strict";
//string
var nome = "joão";
console.log(nome);
// numbers
var idade = 27;
console.log("idade:", idade);
idade = 27.5;
console.log("idade:", idade);
// boolean
var possuiHobbies = false;
console.log("possuiHobbies", possuiHobbies);
// tipos explícitos
var minhaIdade;
minhaIdade = 27;
console.log("typeof minhaIdade", typeof minhaIdade);
// minhaIdade = "27";
console.log("typeof minhaIdade", typeof minhaIdade);
//array
//array do tipo any[]
var hobbies = ["Cozinha", "Pratica esportes"];
console.log("hobbies[0]:", hobbies[0]);
console.log("typeof hobbies", typeof hobbies);
hobbies = [100, 200, 300];
console.log("hobbies", hobbies);
//tupla
var endereco = ["Av Principal", 123, ""];
console.log("endereco:", endereco);
endereco = ["Rua Importante", 123, "Bloco C"];
console.log("endereco:", endereco);
// enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 101] = "Azul";
    Cor[Cor["Laranja"] = 102] = "Laranja";
    Cor[Cor["Amarelo"] = 103] = "Amarelo";
    Cor[Cor["Vermelho"] = 104] = "Vermelho";
})(Cor || (Cor = {}));
var minhaCor = Cor.Verde;
console.log("minhaCor", minhaCor);
console.log("Cor.Azul", Cor.Azul);
console.log("Cor.Cinza", Cor.Cinza);
console.log("Cor.Verde", Cor.Verde);
console.log("Cor.Amarelo", Cor.Amarelo);
console.log("Cor.Vermelho", Cor.Vermelho);
// tipo any
var carro = "BMW";
console.log("carro", carro);
carro = { marca: "BMW", ano: 2019 };
console.log("carro", carro);
