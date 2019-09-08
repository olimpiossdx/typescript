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
