import "./styles.css";

const num1 : number = document.getElementById("num1");
const num2 : number = document.getElementById("num2");
const btn = document.getElementById("btn");
let suma : number = 0;

//let txt = document.getElementById("txt"); (INNECESARIA?)
//let num1 = prompt("Ingrese nro")
//let num1 = prompt("Ingrese nro")

btn.addEventListener ("click" , () => {
    let nro1 = Number(num1.value);
    let nro2 = Number(num2.value);
 for (let i = nro1; i <= nro2; i++) {
     suma = suma + i;  
 }
 console.log(suma)
 txt.innerText = " - El resultado de la suma es " + suma;  
})

/*
Cuando escribo por prompt, toma el valor de una
Cuando escribimos por input, debe tomar el valor
mediante una nueva variable q sea la otra.value
Ponemos adelante la funcion Number() porque lo que
ingresa por input es por defecto un string
*/