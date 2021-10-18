const cliente = {
    nome: "Junior",
    idade: 26,
    cpf: "21312332123",
    email: "junior@blablabla.com",
    fones: ["11952995896", "11983996597"]
}

cliente.dependentes = {
    nome: "Sophia",
    parentesco: "filha",
    dataNasc: "01/11/2014"
}
console.log(cliente)

//aqui troquei o valor do dependente tambem entrando no objeto e dependentes
cliente.dependentes.nome = "Sophia Higuti Bueno"
console.log(cliente)