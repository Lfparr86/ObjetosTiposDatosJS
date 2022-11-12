"use strict"
/*
006calculator.js/.html: Crea un objeto calculator con tres métodos:
read() pide dos valores y los almacena como propiedades de objeto con nombres a y b.
sum() devuelve la suma de los valores almacenados.
mul() multiplica los valores almacenados y devuelve el resultado.
let calculator = {
  // ... tu código ...
};
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
*/



let calculator={//tres funciones dentro del ojbeto recordar la coma ,

        //numeroA : +prompt("Introduce el primer numero"),podemos hacer la llamada directamente
        //numeroB : +prompt("Introduce el segundo numero"),

    read(){

        this.numeroA = +prompt("Introduce el primer numero");

        this.numeroB = +prompt("Introduce el segundo numero");
    },

    sum(){
        
        this.resultado = this.numeroA + this.numeroB;//this pera llamar pero NaN
        return this.resultado;
    },

    mul(){
        
        this.resultado = this.numeroA * this.numeroB;//this pera llamar pero NaN
        return this.resultado;
    }

};

//calculator.numeroA;
//calculator.numeroB;
calculator.read();//llamamos al objeto calculator que tiene la funcion read.
alert( calculator.sum() );//llamamos a la funcion
alert( calculator.mul() );
