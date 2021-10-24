class Cliente{
    constructor(nome,email,cpf,saldo){
    this.nome = nome
    this.email = email
    this.cpf = cpf
    this.saldo = saldo
    }
    depositar(valor){
        this.saldo += saldo
    }
    exibirSaldo(){
        console.log(this.saldo)
    }
}

const junior = new Cliente("Junior","baall@gmail.com","1234213123123",100)

//console.log(junior)
//aqui criei uma classe para ir adicionando meus clientes depois para ficar mais facil e não ficar digitando tudo

junior.exibirSaldo()
//classes sempre começa com letras maiusculas e posso fazer as funçoes sem declarar a function 
