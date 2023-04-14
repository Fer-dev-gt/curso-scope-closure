const myGlobal = 0;

// El ambito léxico significa que la accesibilidad de las variables esta determinada por la posición de las mismas dentro de los ambitos anidados (funciones o bloques de código)
function myFunction(){
    const myNumber = 1;
    console.log(myGlobal);

    function parent(){                  // Función interna (Desde acá ya estoy creando un "Closure")
        const inner = 2;
        console.log(myNumber, myGlobal);

        function child(){
            console.log(inner, myNumber, myGlobal);         // Tiene acceso a las variables declarada afuera de su alcance o arriba de esta función
        }

        return child();
    }

    return parent();
}

myFunction();