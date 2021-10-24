//aqui vou criar uma função para meu cliente poupança 
function cliente(nome,cpf,email,saldo)
{
    this.nome = nome
    this.cpf  = cpf
    this.email = email
    this.saldo = saldo
    this.dep = function(valor){
        this.saldo += valor
    }
}
    function clientePoupanca(nome,cpf,email,saldo,saldoPoup)
    {
        cliente.call(this,nome,cpf.email,saldo)
        this.saldoPoup = saldoPoup
    }
const junior = new clientePoupanca("Junior","35520435862","baall.higuti@gmail.cm",100,200)
console.log(junior)
//o problema é que aqui tudo que eu for depositar ela vai ficar no saldo normal
//agora vou definir no protopyte que vou querer depositar na poupança

clientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor
}
junior.depositarPoup(40)
console.log(junior)