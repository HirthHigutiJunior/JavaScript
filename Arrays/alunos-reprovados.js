const alunos = ["Ana","Caio","João","Fernando"]
const notas = [7,4.5,8,7.5]

const reprovados = alunos.filter((aluno,indice) => notas[indice] < 5)

console.log(`Os alunos reprovados: ${reprovados}`)
