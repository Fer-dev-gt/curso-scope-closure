function greeting(){
    let userName = 'Ana';
    console.log(userName);

    if(userName === 'Ana'){
        console.log(`Hello ${userName}!`);
    }
}

greeting();

//console.log(userName);      // Va a mostrar Error debido a que no tengo acceso a esta variable con Function Scope