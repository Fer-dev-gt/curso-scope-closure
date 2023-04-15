function greeting(){
    let username = 'Oscar';

    return function displayUserName(){
        return `Hello ${username}`;
    }
}

const saludo = greeting();
console.log(saludo);                            // Se imprime el "objeto" de la funcion (Function: nombreDeLaFuncion)
console.log(saludo());                          // Estoy ejecutando la función, se imprime el mensaje definido, el valor