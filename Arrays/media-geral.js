const salaJavaSpript = [7,8,8,7,10,6.5,4,10,7]
const salaDeJava = [6,5,8,9,5,6]
const salaPython = [7,3.5,8,9.5]

//reduce vai diminutir todos os numeros em um numero só.

function mediaSala(notasDaSalas){
    const somaDasNotas = notasDaSalas.reduce((acum, atual) => atual + acum,0)
    return somaDasNotas/notasDaSalas.length
}
console.log(`Média da sala JavaSpript: ${mediaSala(salaJavaSpript)}`)
console.log(`Média da sala Java: ${mediaSala(salaDeJava)}`)
console.log(`Média da sala Python: ${mediaSala(salaPython)}`)