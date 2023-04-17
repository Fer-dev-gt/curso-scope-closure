// Ejemplo 1
const maestro = "Dios";

function crearFamilia() {
  const abuela = "carlina";

  function hijosAbuela() {
    const hijoOne = "Martha";
    const hijoTwo = "Evelio";
    const hijoThree = "Rocio";

    function hijosDeHijosAbuela() {
      const nietos = [
        {
          hijosRocio1: "juan",
          hijosRocio2: "andrea",
          hijosMatha1: "Fabian",
          hijosMatha2: "Heidy",
          hijosEvelio1: "Nathy",
          hijosEvelio2: "Juancho",
          hijosEvelio3: "Santiago",
        },
      ];
      return {
        generacion: function () {
          nietos.map((nieto) => {
            console.log(
              `${maestro} crea a mi abuela ${abuela}
la abuela tuvo 3 hijos ${hijoOne}, ${hijoTwo}, ${hijoThree}
los hijos de la abuela tienen hijos. Hijos de ${hijoThree}: ${nieto.hijosRocio1} y ${nieto.hijosRocio2}, 
Los hijos de ${hijoOne}: ${nieto.hijosMatha1} y ${nieto.hijosMatha2} 
y por ultimo tenemos a los hijos de ${hijoTwo} que son: ${nieto.hijosEvelio1}, ${nieto.hijosEvelio2} y ${nieto.hijosEvelio3}`
            );
          });
        },
      };
    }
    return hijosDeHijosAbuela();
  }
  return hijosAbuela();
}

const generar = crearFamilia();
console.log(generar.generacion());



// Ejemplo 2
function shoppingCart(){
    let cart = [];
    function addItems(item){
        cart.push(item);
        console.log(cart);
    }
    return addItems;
}

const amazon = shoppingCart();
amazon("Mouse");
amazon("Keyboard");
amazon(`Display 24"`);


// Primera solucion al Playgrounds de Platzi
 function createPetList() {
    const petList = [];
     return function addPet(pet = 0) {
      if (pet != 0) {
        petList.push(pet);
      } else {
        return petList;
      }
    }
  }

const myPetList = createPetList();  

myPetList("michi");

myPetList("firulais");

myPetList();
  
// Segunda solucion al Playgrounds de Platzi
   function createPetList() {
    const petList = [];
    return function agregarMostrar(valor = 0) {
        if (!valor) {
          console.log(petList);
    } else {
        petList.push(valor);
      }
    }
  }


// Tercera solucion al Playgrounds de Platzi
   function createPetList() {
    const petList = [];
    return function addPet(pet) {
      if (pet) {
        petList.push(pet);
      }
      return petList;
    }
  }
  



console.log(myPetList.petList);

// Solucion más corta (No es la más legible)
 function createPetList() {
    const pets = []
    return (info) => info ? pets.push(info): pets
  }


// Tercer ejemplo 
function mosaico() {
  const figuras = [];

  return function pintar(nuevaFigura) {
    figuras.push(nuevaFigura);

    let resultado = '';
    const mainLength = figuras.length * 2;
    
    for (let fila = 0; fila < mainLength; fila++) {

      for(let columna = 0; columna < mainLength; columna++) {
        const valorMax = fila > columna ? fila : columna;
        const valorMin = fila < columna ? fila : columna;

        const valorPosible = mainLength - (valorMax + 1);

        const indexFigura = valorPosible < valorMin ? valorPosible : valorMin;
        

        resultado += `${figuras[indexFigura]} `;
      }
      resultado += '\n';
    }
    return resultado;
  }
}

const m = mosaico();
console.log(m('*'));
console.log(m('o'));
console.log(m('+'));
console.log(m('x'));



// cuarto ejercicio
function moneyBox (){
    
  let saveCoins = 0 ;

  return {
    depositar: function countCoins (coins){
        saveCoins += coins;
    },
    retirar: function countCoins (coins){
        saveCoins -= coins;
    },
    saldo: function countCoins (){
        return saveCoins
    }
  }

}

const moneyBoxAna = moneyBox();
console.log(moneyBoxAna.saldo());
moneyBoxAna.depositar(5);
console.log(moneyBoxAna.saldo());
moneyBoxAna.retirar(1)
console.log(moneyBoxAna.saldo());



// Ejercicio 5
function family() {
  let family = [];

  return function addMember(member) {
    family.push(member)
    console.log(`Esta familia está compuesta por ${family}`)
  }
}

let petersFamily = family();
petersFamily('Peter');
petersFamily('Camille');
petersFamily('John');

let emilysFamily = family();
emilysFamily('Emily')
emilysFamily('Carl')
emilysFamily('Sophy')