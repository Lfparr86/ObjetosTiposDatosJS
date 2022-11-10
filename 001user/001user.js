/*
001user.js/.html:  Escribe el código, una línea para cada acción:
Crea un objeto user vacío.
Agrega la propiedad name con el valor John Snow.
Agrega la propiedad surname con el valor Sam Sagaz.
Cambia el valor de name a Peter Pan.
Quita la propiedad name del objeto.
*/
"use strict"
let usuario={};

usuario.name="John Snow";
usuario.surname="Sam Sagaz";

alert(usuario.name);

usuario.name="Peter Pan";

delete usuario.name;

