console.log("Welcome to Blackjack");

function getMessage(mano){                          // Regresa un mensaje avisando si Ganasta, Perdiste o Sigue Jugando segun el valor de tu "mano"
    if(mano == 21){
        return "BLACKJACK"
    }else{
        var mensaje = mano > 21 ? "PERDISTE" : "Sigue Jugando"
        return mensaje
    }
}


function getRamdonCard(){                           // Retorna un numero alazar entre 1 a 11
    return Math.floor(Math.random() * 11) + 1
}

function getCustomCard(mano){                       // Retorna un numero 21 menos el valor de "mano" para conseguir Blackjack
    return 21 - mano
}

var carta1 = getRamdonCard();
var carta2 = getRamdonCard();

console.log(`carta 1: ${carta1} carta 2: ${carta2}`);
var mano = carta1 + carta2;
console.log(`mano: ${mano}`);

var message = getMessage(mano);
while(message == "Sigue Jugando"){
    mano += getRamdonCard();
    var message = getMessage(mano)
}
console.log(`mano: ${mano}, ${message}`);