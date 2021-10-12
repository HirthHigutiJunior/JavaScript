const notas = [10,9,8,7,6]

//map ele retorna uma array  
const notasAtualizadas = notas.map(nota => nota == 10 ? nota : ++nota)

console.log(notasAtualizadas)
