/*
010accumulator.js/.html:  Crear una función constructor Accumulator(startingValue).
El objeto que crea debería:  Almacenar el “valor actual” en la propiedad value. El valor 
inicial se establece en el argumento del constructor startingValue.
El método read() debe usar prompt para leer un nuevo número y agregarlo a value.
En otras palabras, la propiedad value es la suma de todos los valores ingresados por el 
usuario con el valor inicial startingValue.
let accumulator = new Accumulator(1); // valor inicial 1
accumulator.read(); // agrega el valor introducido por el usuario
accumulator.read(); // agrega el valor introducido por el usuario
alert(accumulator.value); // muestra la suma de estos valores
*/

function Accumulator(valorInicial) {

    this.value =valorInicial,

    this.read =function(){
        this.numeroUsuario = + prompt("Dime un numero")
        this.value = this.value + this.numeroUsuario;
    }
    
};
let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();

alert(accumulator.value);