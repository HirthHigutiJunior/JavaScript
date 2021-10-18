const cliente = {
    nome: "Junior",
    idade: 26,
    cpf: 21312332123,
    email: "junior@blablabla.com"
}

const chaves = ["nome", "idade", "cpf", "email"]

console.log(cliente[chaves[3]])
//isso usei objetos com array para buscar uma informação 

//isso que usei é uma funçao array callback também para me dar toda uma listagem da minha array
chaves.forEach(info => console.log(cliente[info]))