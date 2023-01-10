function seriesPares(){
    var serie="Resultado: ";
    var i=2;
    while(i<=12){
        serie+=`${i} - `;
        document.getElementById("resultado").innerHTML=serie;
        i=i+2;
    }
}
function serieImpar(){
    var serie="Resultado: ";
    var i=1;
    while(i<=12){
        serie+=`${i} - `;
        document.getElementById("resultado").innerHTML=serie;
        i=i+2;
     }
}
function numeros(){
    var serie="Resultado: ";
    var i=1;
    while(i<=12){
        serie+=`${i} - `;
        document.getElementById("resultado").innerHTML=serie;
        i++;//i=i+1
    }
}
function paises(){
    const paises = ['peru', 'uruguay', 'chile'];
    let i = 0;
    while (paises.length >i) {
        console.log(paises[i]);
        i = i+1;
    }
}
function hola(){
//const patron= /hola/;
const patron= /^[0-9]+$/;
let dato;
do {
    dato=prompt('Ingresa el valor: ');
} while (!patron.test(dato));
alert("Expresión valida");
}
function suma(a,b){
    resultado=a+b;
    return resultado;
}
//Craando las funciones
function resta(a,b){
    resultado=a-b;
    return resultado;
}
function multiplicacion(a,b){
    resultado=a*b;
    return resultado;
}
function division(a,b){
    resultado=a/b;
    return resultado;
}
function potencia(a,b){
    resultado=a**b;
    return resultado;
}
function residuo(a,b){
    resultado=a%b;
    return resultado;
}
//Llamada a funciones
multiplicacion(12,5);
document.getElementById("resultado").innerHTML=resultado;
console.log(resultado);