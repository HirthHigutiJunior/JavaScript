const nomes = ['João', 'Juliana', 'Caio', 'Ana']
const media = [10, 7, 9, 6]
let listaNotasEAlunos = [nomes, media]

const exibeNotaENome = (nomeDoAluno) =>{
    if (listaNotasEAlunos[0].includes(nomeDoAluno)){
        let indice = listaNotasEAlunos[0].indexOf(nomeDoAluno)
        return listaNotasEAlunos[0][indice] + ' ,sua média é ' + listaNotasEAlunos[1][indice]
    }else{
        return "O aluno não está cadastrado"
    }
}
console.log(exibeNotaENome("Fernando"))
//includes ele inclui e retorna true ou false 
//indexOf ele retorna um tipo numérico 