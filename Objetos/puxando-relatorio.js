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
    //aqui o banco de dados pediu apenas informações básicas do cliente 

    let relatorio=''

    for(let info in cliente) {
        if(typeof cliente[info] === 'object'||typeof cliente[info]==='function'){
            continue
        }else{
            relatorio += `                    ${info} ==> ${cliente[info]}
            `
        }
        }
        console.log(relatorio)

        // deu ruim essa, nao sei que merda eu fiz