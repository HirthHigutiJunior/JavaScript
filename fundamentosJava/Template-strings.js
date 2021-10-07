// Forma de criação de textos mais fácil

const nome = "Junior";
const idade = 2021-1994;
const minhaCidade = "São Paulo";

//const apresentacao = "meu nome é " +nome+ " minha idade é " +idade+"e nasci na cidade de " + minhaCidade;
//const apresentacao = "meu nome é xxx, minha idade é xxx, nasci na cidade de xxx"
//as ("") serão trocadas pelo acento grave (`)

const apresentacao =`meu nome é ${nome}, minha idade é ${idade}, nasci na cidade de ${minhaCidade}`;

console.log(apresentacao)

