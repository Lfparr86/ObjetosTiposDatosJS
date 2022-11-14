"use strict"
/*
013sumVisitorNumbers.js/.html: Crea un script que pida al visitante que ingrese dos 
números y muestre su suma. P.D. Hay una trampa con los tipos de valores.
*/

let numeroA =  +prompt("Introduce el primer numero");//Cuando no se pone el simbolo + delante del pront devuelve un string.
let numeroB =  +prompt("Introduce el segundo numero");
let resultado =0;

resultado =numeroA + numeroB;// sin el + delante del pront es 55 ya que lo concatena.

alert(resultado);
