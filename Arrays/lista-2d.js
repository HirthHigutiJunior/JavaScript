const nomes = ['João', 'Juliana', 'Caio', 'Ana']
const media = [10, 7, 9, 6]

let listaMediaNomes = [nomes, media]
//aqui acessei uma lista um pouco dificil de explicar mais fácio de entender
//                primeira lista/João                    segunda lista/primeira nota
console.log(`${listaMediaNomes[0][0]} sua média é: ${listaMediaNomes[1][0]}`)
