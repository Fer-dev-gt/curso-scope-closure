'use strict';                   // Cuando usamos "Strict mode" tenemos que declarar y asigar una variable (incluso si esta con "var")
pi = 3.1416;
console.log(pi);

function myFunction(){
    'use strict';
    return pi = 3.1416;         // Va a lanzar el mismo error
}
console.log(myFunction()); b 