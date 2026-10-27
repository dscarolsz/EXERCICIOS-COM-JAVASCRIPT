//informações pessoais

//const nome = "Steve"
//let idade = 52
//const altura = 1.82
//let estudante = true
//let apelido = null
//let tipoNome = (typeof nome)
//let tipoIdade = (typeof idade)
//let tipoAltura = (typeof altura)
//let tipoApelido = (typeof apelido)

//console.log(`Me chamo ${nome} \ntenho ${idade} anos de idade\nsou estudante?: ${estudante}, estudo engenharia da computação\ntenho ${altura} metros de altura.`)

//console.log(`\n=== Tipos das Variaveis ===\nnome: ${tipoNome}\nidade: ${tipoIdade}\naltura: ${tipoAltura}\nestudante: ${tipoEstudante}\napelido: ${tipoApelido}`)

//comparação de números

// console.log(10 > 5)
// console.log(10 < 5)
// console.log(10 >= 10)
// console.log(5 === 5)
// console.log(5 === "5")
// console.log(5 == "5")
// console.log(5 !== 3)

// = guarda (atribui)
// === é igual a
// !== é diferente de
// > < >= <= maior, menor, maior ou igual, menor ou igual

//ingressos conforme idade

// const idade = 12; // menor de idade
// const temIngresso = false; // não tem ingresso

// console.log (idade >= 18 && temIngresso === true)
// console.log (idade <= 12 || idade >= 60)
// console.log (temIngresso === true)
// console.log (temIngresso !== true)

//media de notas

// const notaUm = 1;
// const notaDois = 2;
// const notaTres = 3;
// const media = (notaUm+notaDois+notaTres)/3;

// console.log ('media: ', media)
// console.log ('aprovado?: ', media >= 7)

const precoPao = 0.75
const quantidadePao = 12
const precoLeite = 5.5
const quantidadeLeite = 2

const subTotal = (precoPao * quantidadePao + precoLeite * quantidadeLeite)
const comDesconto = subTotal * 0.9

console.log ('Subtotal: R$', subTotal);
console.log ('com 10% de desconto: R$', comDesconto);
console.log ("Subtotal passou de R$20? ", subTotal > 20);
console.log ("Chegou a R$20?: ", subTotal >= 20);

