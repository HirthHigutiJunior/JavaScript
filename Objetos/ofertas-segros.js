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

    // aqui vou oferecer um seguro de vida caso tenha dependentes 
    // const proprsCliente = Object.keys(cliente)

    //console.log(proprsCliente)
    // até aqui consegui localizar meus parametros no console 
    //agora irei criar uma função para ele me dar um retorno especifico para caso tenha dependentes
    //como ele me deu um array 

    function oferecerSeguro(obj){
        const proprsCliente = Object.keys(obj);
        if(proprsCliente.includes("dependentes")){
            console.log(`Oferta de seguro de vida para ${obj.nome}`)
        }
    }
    //aqui nao precisei dar o console porque já tinha dentro da minha funçao
    oferecerSeguro(cliente)
    //".keys" para pegar as chaves
    //".values" para pegar os valores 
    //".entries" dar uma array e me dar com varios valores porem outras estruturas[0]= chave [1]= valor 
    