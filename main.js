console.log('JS run')

let ladoCuadrado = 5;
let perimetroCuadrado = ladoCuadrado*4;

let areaCuadrado = ladoCuadrado*ladoCuadrado

let ladoTriangulo1 = 6;
let ladoTriangulo2 = 6;
let ladoTrianguloBase = 4;
let alturaTriangulo = 7;

let perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;

let areaTriangulo = (ladoTrianguloBase*alturaTriangulo)/2;

function calcularTriangulo(lado1,lado2,base){
    let semiperimetro = (lado1 + lado2 + base)*0.5
    return{
        perimetro: lado1+lado2+base + " U",
        area: Math.pow(semiperimetro*(semiperimetro-lado1)*(semiperimetro-lado2)*(semiperimetro-base),0.5) +" U²",
        alturaLado1: Math.pow((Math.pow(lado1,)))
    };
}

function calcularRectangulo(lado1,lado2){
    return{
        perimetro: 2*(lado1+lado2) + " U",
        area: lado1*lado2 + " U²"
    }
}

function calcularCirculo(radio){
    return{
        circunferencia: 2*radio*Math.PI + " U",
        area: Math.PI*Math.pow(radio,2) + " U²",
    }
}

console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado,
    perimetroTriangulo,
    areaTriangulo,
});