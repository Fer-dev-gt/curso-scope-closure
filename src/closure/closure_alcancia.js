/*  Con la siguiente lógica los valores de las monedas ahorradas no se guardan

    function moneyBox(coins){
        let saveCoins = 0;
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }

    moneyBox(5);
    moneyBox(5);
*/


// Con esta lógica usando "Closure" si se guardan nuestras monedas

function moneyBox(){
    let saveCoins = 0;

    return function countCoins(coins){
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
}

console.log('El registro de mis ahorros');
const myMoneyBox = moneyBox();                  // Guardamos la funcion en una variabla, la cual usaremos para sumar más monedas
myMoneyBox(5);                                  // Los valores que enviamos van al parámetro de la función interna
myMoneyBox(5);
myMoneyBox(15);                                 // Los valores de las variablas se recuerdan es su debido "Entorno Léxico"

console.log('El registro de los ahorros de Ana');
const moneyBoxAna = moneyBox();                 // Instanciamos / creamos otro "Entorno Léxico" el cual lo guardamos en otra variable
moneyBoxAna(10);
moneyBoxAna(20);
moneyBoxAna(5);