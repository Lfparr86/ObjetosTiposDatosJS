"use strict"
/*
003sumProperties.js/.html: Tenemos un objeto que almacena los salarios de nuestro 
equipo:
let salaries = {
  Harry: 100,
  Ron 160,
  Hermione: 130
}
Escribe el código para sumar todos los salarios y almacenar el resultado en la variable 
sum. En el ejemplo de arriba nos debería dar 390. Si salaries está vacío entonces el 
resultado será 0.
*/

let salaries = {
    Harry: 100,
    Ron: 160,
   Hermione: 130
  }

// let sum = salaries.Harry + salaries.Ron + salaries.Hermione;

  let sum =0;

  let resultado = function sumarSalario() {

        for(let key in salaries){
            sum = sum + salaries[key];
         }
         return(sum);
    }
  

alert(resultado())


