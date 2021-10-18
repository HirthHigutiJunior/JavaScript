const cliente = {
    nome: "Junior",
    idade: 26,
    cpf: "21312332123",
    email: "junior@blablabla.com",
    fones: ["11952995896", "11983996597"],
    dependentes: [{
        nome: "Sophia Higuti Bueno",
        parentesco: "filha",
        dataNasc: "01/11/2014",
    }]
}
//aqui adicionei mais 1 dependente 
cliente.dependentes.push({
    nome: "Daniel Bueno Higuti",
    parentesco: "filho",
    dataNasc: "07/12/2020",
})
//console.log(cliente)

//aqui entrei na lista e filtrei a chave por chave e peguei o nome do daniel no parametro [0]
const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc === "07/12/2020")
console.log(filhaMaisNova[0].nome)