// Primera solución
export function sumWithClosure(firstNumber) {
    let myNumber = firstNumber;

    function sumarNumeros(secondNumber) {
      let myOtherNumber = secondNumber;
      if (!myOtherNumber){                      // Si no mandan un segundo número, entonces solo retornamos el primero
        return myNumber;
      }else{
        return myNumber + myOtherNumber;        // Si enviaron un segundo número, hacemos la suma
      }
    }

    return sumarNumeros;                        // Retornamos el resultado de la función interna "sumarNumeros"
  }
  

  // Segunda solución 
  export function sumWithClosure(firstNumber = 0) {         // Para evitar hacer una validación, definimos que los parámetros tengan un valor de 0 por defecto
    return function (secondNumber = 0) {
      return firstNumber + secondNumber;
    }
  }


  // Otra solución con Arrow Function
  export function sumWithClosure(firstNum) {
    return (secondNum = 0 ) => firstNum + secondNum 
  }

  // Solución en una sola linea
  export const sumWithClosure = (firstNum) => (secN = 0) => firstNum + secN