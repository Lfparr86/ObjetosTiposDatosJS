"use strict"

/*
007ladder.js/.html: Hay un objeto ladder que permite subir y bajar.
let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // muestra el peldaño actual
    alert( this.step );
  }
};
Ahora, si necesitamos hacer varios llamados en secuencia podemos hacer algo como 
esto:
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0
Modifica el código de “arriba” up, “abajo” down y “mostrar peldaño” showStep para 
hacer los llamados encadenables como esto:
ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0
Tal enfoque es ampliamente usado entre las librerías JavaScript.
*/

let ladder = {
    step: 0,
    up() {
      this.resultado = this.step++;
      return this.resultado;
    },
    down() {
        this.resultado = this.step--;
        return this.resultado;
    },
    showStep: function() { // muestra el peldaño actual
      this.resultado = alert( this.step );
      return this.resultado;
    }
  };

// ladder.up();//undefined? Recordar poner return
// ladder.up();
// ladder.down();
// ladder.showStep();//undefined? ya tiene un alert
 ladder.up().up().down().showStep().down().showStep();//Pendiente de ver