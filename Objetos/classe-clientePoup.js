class Cliente{
    constructor(nome,email,cpf,saldo){
    this.nome = nome
    this.email = email
    this.cpf = cpf
    this.saldo = saldo
    }
    depositar(valor){
        this.saldo += valor
    }
    exibirSaldo(){
        console.log(this.saldo)
    }
}
class ClientePoup extends Cliente{
    constructor(nome,email,cpf,saldo,saldoPoup){
        super(nome,email,cpf,saldo)
        this.saldoPoup = saldoPoup
    }
    depositarPoup(valor){
        this.saldoPoup += valor
    }
}
const junior = new ClientePoup("Junior","baall@gmail.com","231242142131",100,200)
console.log(junior)

junior.depositar(50)
junior.depositarPoup(50)
console.log(junior)

//aqui finalizei fazendo uma nova funçao para depoisitar tanto no cliente como na poup
//aqui também consegui corrigir meus erros sozinho verificando pelo terminal onde errei 
