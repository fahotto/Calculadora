
//Declaramos las variables
let suma;
let resta, multiplicacion, division;
let numeroUno, numeroDos;

let resultado = document.getElementById("resultado");

console.log(resultado);

function saludar() {
    saludar= prompt('Como te llamas?')
    resultado.innerHTML= `Hola ${saludar}, un placer!!!`;    
}


    /* 
    numeroUno =  parseInt(prompt('Ingrese un número: '));
    numeroDos = parseInt(prompt('Ingrese otro número: ')); 
    */

    /*Variables locales: sólo están en esta función
    datoUno = prompt('Ingrese un número: ');
    let datoDos = prompt('Ingrese otro número: ');

    numeroUno = parseFloat(datoUno);
    numeroDos = parseFloat(datoDos);

    console.log(numeroUno, numeroDos);
} */ 
function iniciar() {
    numeroUno=parseFloat(prompt("Ingrese un numero :"));
   
    while (isNaN (numeroUno) || numeroUno ==="" )numeroUno=parseFloat(prompt("Debe ingresar un numero :"));
       

    numeroDos=parseFloat(prompt("Ingrese otro numero :"))
    while (isNaN (numeroDos) || numeroDos ==="" )numeroDos=parseFloat(prompt("Debe ingresar otro numero :"));
  
  }

/*function validar() {
    if (numeroUno == NaN && numeroDos == NaN) {
        alert('Es necesario llenar el dato')
    } 
} 
*/

function sumar() {
    //Validación con un if
    //true / false
   
    if (numeroUno === undefined && numeroDos === undefined) {
        alert('Es necesario llenar el dato, click en Iniciar Cálculos')
    }else {
        suma = numeroUno + numeroDos;
        resultado.innerHTML= `El resultado de la suma es: ${suma}`; 
        console.log('EL resultado de la suma es ' + suma);
    }
    
}

function restar() {
   
    resta = numeroUno - numeroDos;
    resultado.innerHTML= `El resultado de la resta es: ${resta}`; 
    console.log('EL resultado de la suma es ' + suma);
}

function multiplicar() {
    multiplicacion = numeroUno * numeroDos;
    resultado.innerHTML= `El resultado de la multiplicacion es: ${multiplicacion}`
}

function dividir() {
    division = numeroUno / numeroDos;
    resultado.innerHTML=`El resultado de la division es: ${division}`
}










