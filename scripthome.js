//TEST DE INICIO INFO DE LOCAL STORAGE:
console.log("Mail desde home local storage: "+ localStorage.getItem("mail"));
console.log("Password desde home local storage: "+ localStorage.getItem("password"));
console.log("Balance desde home local storage: "+ localStorage.getItem("balance"));




// MENSAJE DE BIENVENIDA AL USUARIO:
document.getElementById("titulo").innerHTML = `Bienvenido: ${localStorage.getItem("mail")}`;



// DEFINICION DE FUNCION QUE MUESTRA EL SALDO:
function rendering(){

// DEIFINICION DEL FORMTA DE MONEDA Y REGION
let f = new Intl.NumberFormat("en-US",{ style: "currency", currency: "USD", minimumFractionDigits: 2});

// console.log(f.format(localStorage.getItem("balance")));

// INSERTAR EN PANTALLA EL SALDO ACTUAL CON FORMATO Y DESDE LOCAL STORAGE:
document.getElementById("saldo").innerHTML = `Tu saldo actual es: ${f.format(localStorage.getItem("balance"))}`;

}

// DEFINICION DE FUNCION DEPOSITAR:

function depositar(){
    const input = document.querySelector("input");
    let saldo = localStorage.getItem("balance");

    console.log("La cantidad ingresada es: " + input.value);

    let testNewbalanceAdd = parseFloat(input.value) + parseFloat(saldo);

    if(testNewbalanceAdd > 990){

        document.getElementById("demasiado").style.display= "block";
        console.log("El valor de testnewbalanceAdd es: " + testNewbalanceAdd);

    }else{

        let newBalance = parseFloat(input.value) + parseFloat(saldo);

        console.log("La cantidad ingresada despues de parseint es: " + input.value);
        console.log("El saldo anterior de balance es: " + localStorage.getItem("balance"));
        console.log("El nuevo saldo es: " + newBalance);
    
        // GUARDA EL NUEVO VALOR EN LOCAL STORAGE:
        localStorage.setItem("balance", newBalance);
    
        // LLAMADA A LA FUNCION QUE MUESTRA EL SALDO:
        rendering();  

    }


  
}


// DEFINICION DE FUNCION RETIRAR:

function retirar(){
    const input = document.querySelector("input");
    let saldo = localStorage.getItem("balance");

    // console.log("La cantidad ingresada es: " + input.value);

    let testNewBalance = parseFloat(saldo) - parseFloat(input.value);
    
    if(testNewBalance < 10){
        
        document.getElementById("error").style.display= "block";
        console.log("El valor de testnewbalance es: " + testNewBalance);

        // MENSAJE DE ERROR POR SALDO MENOR A $10:
        // document.getElementById("error").innerHTML = `No es posible hacer el retiro y dejar un saldo menor a $10.00`;

    } else{

    let newBalance = parseFloat(saldo) - parseFloat(input.value);

    console.log("La cantidad ingresada despues de parseint es: " + input.value);
    console.log("El saldo anterior de balance es: " + localStorage.getItem("balance"));
    console.log("El nuevo saldo es: " + newBalance);

    // GUARDA EL NUEVO VALOR EN LOCAL STORAGE:
    localStorage.setItem("balance", newBalance);

    // LLAMADA A LA FUNCION QUE MUESTRA EL SALDO:
    rendering();    

    }
}



// una cuenta no debe de tener más de $990 

function cerrarmensajedemasiado(){
    document.getElementById("demasiado").style.display= "none";
}


// DEFINICION CERRAR MENSAJE:

function cerrarmensajeerror(){

    document.getElementById("error").style.display= "none";
}



// LLAMADA A LA FUNCION QUE MUESTRA EL SALDO:
// rendering();


function salir(){
    // REDIRECCION A PAGINA HOME SI LA VALIDACION ES CORRECTA:
    window.location.replace("/index.html");
}


//--------------------------------------




/* componente funcional */
function renderingBalance() {
    let template = `
    <div class="mt-5">
        
        <h2>Saldo ${localStorage.getItem("balance")}</h2>

        <div class="my-3 col-4">
            <label for="usuario" class="form-label">Incrementar saldo</label>
            <input name="saldo" type="number" min="0" class="form-control" id="input_saldo">
        </div>
        
        <button id="add_balance_btn" class="btn btn-primary mt-5">agregar saldo</button>
    </div>
    `

    homeSection.innerHTML = template;

    const addBalanceButton = document.querySelector("#add_balance_btn");

    addBalanceButton.addEventListener("click", addBalanceHandler);
}



function addBalanceHandler(e) {

    const addBalanceInput = document.querySelector("#input_saldo");
    const current = localStorage.getItem("balance");

    let newBalance = parseInt(current) + parseInt(addBalanceInput.value);

    localStorage.setItem("balance", newBalance);

    const mail = localStorage.getItem("mail");
    const balance = localStorage.getItem("balance");

    renderingBalance({ mail: mail, balance: balance });

}


renderingBalance();




/*
function suma(){
    const formu = document.getElementById("formu");
    let operadorA = formu["operadorA"];
    let operadorB = formu["operadorB"];
    let resultado = parseInt(operadorA.value) + parseInt(operadorB.value);
    if(isNaN(resultado))
        resultado = "La operacion no incluye numeros";
    
    document.getElementById("resultado").innerHTML = `El Resultado es: ${resultado}`;
    console.log(`El resultado es: ${resultado}`);
}

function resta(){
    const formu = document.getElementById("formu");
    let operadorA = formu["operadorA"];
    let operadorB = formu["operadorB"];
    let resultado = parseInt(operadorA.value) - parseInt(operadorB.value);
    if(isNaN(resultado))
        resultado = "La operacion no incluye numeros";
    
    document.getElementById("resultado").innerHTML = `El Resultado es: ${resultado}`;
    console.log(`El resultado es: ${resultado}`);
}

*/