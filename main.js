console.log('JS run')
const discountButton = document.querySelector('#DiscountButton');

const perimetroTrianguloResult = document.querySelector('#perimetroTrianguloResult');
const areaTrianguloResult = document.querySelector('#areaTrianguloResult');
const alturaTrianguloResult = document.querySelector('#alturaTrianguloResult');


const trianguloButton = document.querySelector('#trianguloButton');
trianguloButton.addEventListener('click', calcularTriangulo);

const inputPriceCoupon = document.querySelector('#PriceCoupon');
const inputDiscountCoupon = document.querySelector('#DiscountCoupon');
const discountCouponButton = document.querySelector('#DiscountCouponButton');
discountCouponButton.addEventListener('click', calcularDescuentoConCupon);
const discountCouponResult = document.querySelector('#DiscountCouponResult');

const promedioResult = document.querySelector('.PromedioResult');
const promedioResultButton = document.querySelector('.PromedioResultButton');
promedioResultButton.addEventListener('click', calcularPromedio);

let arrayPromedio = [1,2,3,4,5,6];


let ladoCuadrado = 5;
let perimetroCuadrado = ladoCuadrado*4;

let areaCuadrado = ladoCuadrado*ladoCuadrado

let inputLadoTriangulo1 = document.querySelector('#Lado1');
let inputLadoTriangulo2 = document.querySelector('#Lado2');
let inputLadoTrianguloBase = document.querySelector('#Lado3');

discountButton.addEventListener('click', calcularDiscount);
let inputPrice = document.querySelector('#Price');
let inputDiscount = document.querySelector('#Discount');
let discountResult = document.querySelector('#DiscountResult')

function calcularDiscount(){
    let price = Number(inputPrice.value);
    let discount = Number(inputDiscount.value);

    if(!price || !discount){
        alert ('Ingresa valores válidos');
        return;
    }
    if (price === 0 || discount === 0 || price == null || discount == null) {
        alert ('Los valores deben ser mayor a cero');
        return;
    }
    if (discount > 100){
        alert ('¿Dónde encontraste un descuento mayor al 100%?');
        return;
    }

    let newPrice = (price * (100 - discount))/100

    discountResult.innerText = 'Aplicando el descuento el nuevo precio es: $ ' + newPrice
}

function calcularDescuentoConCupon(){
    console.log('Escuchando');
    
    let price = Number(inputPriceCoupon.value);
    let coupon = inputDiscountCoupon.value;
    let discount;

    if(!price || !coupon){
        alert ('Ingresa valores válidos');
        return;
    }

    
    function isCouponInArray(couponElement){
        return couponElement.name == coupon;
    }
    
    const couponInArray = couponList.find(isCouponInArray);

    if(couponInArray){
        discount = couponInArray.discount;
    } else {
        discountCouponResult.innerText = 'El cupón no es válido';
        return;
    }

    console.table({
        coupon,
        discount,
        couponInArray,
        couponList,
    })
    /* 
    lógica con un array
    if(couponInArray.length > 0){
        discount = couponInArray[0].discount;
    } else {
        discountCouponResult.innerText = 'El cupón no es válido';
        return;
    }

    console.table({
        coupon,
        discount,
        couponInArray,
        couponList,
    }) */

    /* 
    lógica con un objeto
    if (couponsObj[coupon]){
        discount = couponsObj[coupon];
    } else {
        discountCouponResult.innerText = 'El cupón no es válido';
        return;
    } */

    let newPrice = (price * (100 - discount))/100

    discountCouponResult.innerText = 'Aplicando el descuento el nuevo precio es: $ ' + newPrice
}

function calcularTriangulo(){
    let lado1 = Number(inputLadoTriangulo1.value);
    let lado2 = Number(inputLadoTriangulo2.value);
    let base = Number(inputLadoTrianguloBase.value);

    let semiperimetro = Number((lado1 + lado2 + base)*0.5)
   
    if(lado1 == 0 || lado2 == 0 || base == 0){
        alert('Ingresa datos válidos, diferentes a cero');
        return;
    }
    if(lado1 < 0 || lado2 < 0 || base < 0){
        alert('Un triángulo no puede tener medidas negativas');
        return;
    }

    let PerimetroResultCalc = lado1 + lado2 + base;
    let AreaResultCalc = Number(Math.pow(semiperimetro*(semiperimetro-lado1)*(semiperimetro-lado2)*(semiperimetro-base),0.5));
    let AlturaResultCalc = Number((2*(Math.pow(semiperimetro*(semiperimetro-lado1)*(semiperimetro-lado2)*(semiperimetro-base),0.5)))/base);

    perimetroTrianguloResult.innerText = PerimetroResultCalc + " u";
    areaTrianguloResult.innerText = AreaResultCalc + " u²";
    alturaTrianguloResult.innerText = AlturaResultCalc + " u"
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

function calcularPromedio(){
    /* console.log('Escuchando'); */
    
    /* 
    //Solución con ciclo for
    let sumaLista = 0;
    for (let i = 0; i < arrayPromedio.length; i++) {
        sumaLista = sumaLista + arrayPromedio[i];        
    }; */

    /* 
    //Solución con el reduce
    function SumarTodosLosElementos(valorAcumulado, nuevoValor){
        return valorAcumulado + nuevoValor;
    };
    const sumaLista = arrayPromedio.reduce(SumarTodosLosElementos); */

    /*
    //Solución con arrowFuntion
    const SumarTodosLosElementos = (valorAcumulado, nuevoValor) => {
        return valorAcumulado + nuevoValor;
    };
    const sumaLista = arrayPromedio.reduce(SumarTodosLosElementos); */

    const SumarTodosLosElementos = (valorAcumulado, nuevoValor) => valorAcumulado + nuevoValor;
    const sumaLista = arrayPromedio.reduce(SumarTodosLosElementos);

    let promedio = sumaLista / arrayPromedio.length;

    promedioResult.innerText = promedio;
}
function isArrayPair (arrayPromedio){
    /* let pairOrNot; */

    if (Number.isInteger(arrayPromedio.length/2)) {
        return true;
       /*  pairOrNot = 'La lista es par'; */
    } else {
        return false;
        /* pairOrNot = 'La lista es impar'; */
    }
}

function calcularMediana(lista){
    const listaEsPar = isArrayPair(lista);
    
    if(listaEsPar){
        const indexMedianaPar1 = lista[Math.floor((lista.length/2)-1)];
        const indexMedianaPar2 = lista[Math.floor((lista.length/2))];

        return calcularPromedio ([indexMedianaPar1,indexMedianaPar2]);

        console.log({
            indexMedianaPar1,
            indexMedianaPar2,
        })
    } else {
        const indexMedianaImpar = Math.floor((lista.length/2));

        console.log(lista[indexMedianaImpar]);
    }
}
console.group();

const radioCirculo = 6;
const diametroCirculo = radioCirculo*2;


console.groupEnd();

