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
    Let i = 0;
    while (paises.length >i) {
        console.log(paises[i]);
        i = i+1;
    }
}