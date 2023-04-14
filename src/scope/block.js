function fruits(){
    if(true){
        var fruit1 = 'Apple';       // Function Scope
        let fruit2 = 'Kiwi';        // Block Scope
        const fruit3 = 'Banana';    // Block Scope
        console.log(fruit2);
        console.log(fruit3);
    }
    console.log(fruit1);
}

fruits()

/*  Este versión muestra un "ReferenceError" debido a que al errores de Scope
function fruits(){
    if(true){
        var fruit1 = 'Apple';       // Function Scope
        let fruit2 = 'Kiwi';        // Block Scope
        const fruit3 = 'Banana';    // Block Scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits()

*/