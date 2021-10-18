const cliente = {
    nome: "Junior",
    idade: 26,
    cpf: "21312332123",
    email: "junior@blablabla.com"
}
//o "." ele define onde vou buscar o dado 

//console.log(`Meu nome é ${cliente.nome}, e tenho ${cliente.idade} anos, meu CPF é ${cliente.cpf} e meu email é ${cliente.email}`)

//esse substring deveria funcionar para mostrar o cpf cortado mas não sei pq nao foi 
console.log(cliente.cpf.substring(0,3))
