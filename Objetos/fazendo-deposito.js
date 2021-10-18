const cliente = {
    nome: "Junior",
    idade: 26,
    cpf: "21312332123",
    email: "junior@blablabla.com",
    fones: ["11952995896", "11983996597"],
    dependentes: [{
        nome: "Sophia Higuti Bueno",
        parentesco: "filha",
        dataNasc: "01/11/2014"},
        {
    nome: "Daniel Bueno Higuti",
    parentesco: "filho",
    dataNasc: "07/12/2020",
        }],
        saldo:100,
        depositar:function(valor) {
            this.saldo += valor},
            sacar:function (valor) {
                this.saldo -= valor
            }
    }
    //console.log(cliente.saldo)
    //cliente.depositar(50)
   //console.log(cliente.saldo)
    
   //aqui cliente uma funçao no objeto para depositar e irei tentar fazer a mesma coisa para tirar o valor 
    cliente.sacar(20)
console.log(cliente.saldo)
//consegui porra uhuuul