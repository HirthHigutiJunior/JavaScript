// Arrow "=>" é utilizado esse código para atribuir 
//arrow function só pode ser utilizada para declaração de 1 linha de código 


function apresentar (nome){
    return `Meu nome é ${nome}`;
}

const apresentarArrow = nome => `Meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

//arrow com + de 1 linha ex:
// operador de ou "||"
const somaNumerosPequenos = (num1, num2) =>{
    if (num1 || num2 > 10){
        return "somente numeros de 1 a 9"
    } else{
            return num1 +num2;
        }
    }
console.log(somaNumerosPequenos(1, 2))
//hoisting se comporta da mesma forma que arrow function 
