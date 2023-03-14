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

    if(coupon == 'IngElkinMorales'){
        discount = 25
    } else if (coupon == 'DXNColombia'){
        discount = 20
    } else {
        discountCouponResult.innerText = 'El cupón no es válido';
        return;
    }

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

console.group();

const radioCirculo = 6;
const diametroCirculo = radioCirculo*2;


console.groupEnd();

console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado,
    perimetroTriangulo,
    areaTriangulo,
});