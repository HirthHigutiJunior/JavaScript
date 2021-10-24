const clientes = [
    {
    nome: "Junior",
    idade: 26,
    cpf: "21312332123",
    dependentes: [{
        nome: "Sophia Higuti Bueno",
        parentesco: "filha",
        dataNasc: "01/11/2014",
    },
    {
    nome: "Daniel Bueno Higuti",
    parentesco: "filho",
    dataNasc: "07/12/2020"
}],
    },
    { 
    nome: "Grabriel",
    idade: "velho",
    cpf: "094912040291",
    dependentes: [{         
    nome: "Jinx",         
    parentesco: "filha",         
    dataNasc: "25/02/2018"}], 
    }
]

const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]

//aqui posso também criar uma tabela no meu console
console.table(listaDependentes)
//aqui fiquei uma cota para resolver mas era porque não estava fechando as "{}" do dependentes