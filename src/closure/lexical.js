/*const myGlobal = 0;

// El ambito léxico significa que la accesibilidad de las variables esta determinada por la posición de las mismas dentro de los ambitos anidados (funciones o bloques de código)
function myFunction(){
    const myNumber = 1;
    console.log(myGlobal);

    function parent(){                  // Función interna (Desde acá ya estoy creando un "Closure")
        const inner = 2;
        console.log(myNumber, myGlobal);

        function child(){
            console.log(inner, myNumber, myGlobal);         // Tiene acceso a las variables declaradas afuera de su alcance o arriba de esta función
        }

        return child();                                     // Esta parte del "return" la podemos colocar en la declaracion de la función
    }

    return parent();
}

myFunction();*/


// Manera mas corta de hacer el código de arriba

const myGlobal = 0;

function myFunction(){
    const myNumber = 1;
    console.log(myGlobal);

    return function parent(){
        const inner = 2;
        console.log(myNumber, myGlobal);

        return function child(){
            console.log(inner, myNumber, myGlobal);
        }
    }
}

const prueba = myFunction();
const prueba2 = prueba();
prueba2();
