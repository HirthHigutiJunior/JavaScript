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
//aqui criei uma função para ele me deixar como modelo
const junior = new cliente("junior","35520435842","baall.higuti@gmail.com",100)
console.log(junior)
//essa aula falou de prototype ".__proto__" no console do navegador para acessar as propriedades e fazer a verificação
