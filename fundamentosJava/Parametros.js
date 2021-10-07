//Parametros são quantos códigos são declarados 
//parametros x Argumentos

function soma (num1, num2){
    return num1 + num2;
}
console.log(soma(2, 4))
console.log(soma(16, 25))
console.log(soma(72 , 213))

//pode ser aplicado também para multiplicações ou pegar o resultado de um calculo e fazer outro 
function multiplica (num1, num2){
    return num1 * num2;
}
console.log(multiplica(2, 4))
console.log(multiplica (soma(12, 3), soma(21, 2)))
