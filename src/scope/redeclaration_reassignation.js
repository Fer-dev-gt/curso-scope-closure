// Usando "var"
var firstName;                  // Undefined
firstName = 'Oscar';
console.log(firstName);

var lastName = "David";         // Declaramos / Asignamos
lastName = 'Ana';               // Reasignamos
console.log(lastName);          // Mostramos

var secondName = 'David';       // Declaramos / Asignamos
var secondName = 'Ana';         // Redeclaramos / Reasignamos
console.log(secondName);

// Usando "let"
let fruit = 'Apple';             // Declaramos / Asignamos
fruit = 'Kiwi';                  // Reasignamos
console.log(fruit);

//let fruit = 'Banana';          // No se puede redeclarar con "let"
//console.log(fruit);            // Muestra un SyntaxError

// Usando "const"
const animal = 'Dog';            // Declaramos / Asignamos
//animal = 'Cat';                  // No podemos reasignar con "const"
console.log(animal);


// Cuando se trata de Array y Objetos, "const" no impide que no cambiemos el valor de una propiedad dentro del Array u Objeto, solo evita que no la Redeclaremos o Reasignemos
const vehicles = [];
vehicles.push('🚗');
console.log(vehicles);

vehicles.pop();
console.log(vehicles);
