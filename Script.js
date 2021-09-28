// var (variavel)
//criação de um retângulo

var altura = 5;
var comprimento = 7;

area = altura * comprimento;
console.log(area)
var area;

//O var pode ser declarado após a criação da variavel pois o terminal vai ler primeiro todas as var.

//let 

let forma = "retângulo";
let altura = 5;
let comprimento = 7;

if (forma === "retângulo"){
    area = altura * comprimento;
}else{
    (altura * comprimento) /2;
}
let area;
console.log(area)

//let e var consigo utilizar praticamente para as mesmas coisas porem a var seria mais solta e não necessário declarar.

// const (constante)

// a const não pode ser mudada, ela é fixa. Nesse caso não conseguiria calcular a area dos exercicios acima.
