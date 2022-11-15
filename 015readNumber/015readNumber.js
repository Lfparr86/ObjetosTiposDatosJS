"use strict"
/*
015readNumber.js/.html: Crea una función readNumber que pida un número hasta 
que el visitante ingrese un valor numérico válido. El valor resultante debe ser devuelto 
como number. El visitante puede también detener el proceso ingresando una línea 
vacía o presionando “CANCEL”. En tal caso la función debe devolver null.
*/
function readNumber() {
  
    let numero = + prompt("Introduce un numero");
    let iniciar = false;

    while (this.iniciar == false) {
        if (this.numero == null){
            this.iniciar =true;
        }else{
            alert(this.numero);
            this.numero = + prompt("Introduce un numero");
        }
        
    }
};

alert(readNumber());