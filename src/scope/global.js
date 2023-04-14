// variables
var a;                  // Declarando
var b = 'b';            // Declaramos y asignamos
b = 'bb';               // Reasignación
var a = 'aa';           // Redeclaración (Solo funciona con "var")

// Global Scope
var fruit = 'Apple';    // Variable global
console.log(fruit);

function bestFruit(){
    console.log(fruit);
}

bestFruit();


// Otra forma de crear una Variable Global (Hay que tener cuidado porque podríamos crearla sin darnos cuenta)
// Sucede cuando no Declaramos la variable y solamente la Asignamos

function countries(){
    country = 'Colombia';       // Como no la Declaramos y solo la Asignamos, la variable "country" se vuelve Global
    console.log(country);
}

countries();
console.log(country);           // Mostrará la variable incluso al haber sido asignada dentro de una función debido a que esta siendo considerada como Global