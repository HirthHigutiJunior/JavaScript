let x = "";
console.log(x)
x = "oi";
// o código tem que ser declarado antes para o console fazer a leitura


//aqui coloquei uma funçao para a "impressao"
//||||||||||||||||| String
function impressao (texto){
    console.log(texto)
}

//aqui declarei o "Ola" para o nome impressao, sendo que posso declarar mais de 1 vez 
impressao ("Ola");
impressao ("tudo bem?");

//posso tambem declarar type number sem valor para a funçao 

//porem utilizo a função "return" para ele me retornar o que estou pedindo 
function soma (){
    return 2 + 2;
}
console.log(soma())
