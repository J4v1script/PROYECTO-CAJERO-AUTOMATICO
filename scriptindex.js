//  1   DEFINICION DEL EVENTO Y EJECUCION DE FUNCION VALIDADORA:

const submitbuton = document.querySelector("#forma");

submitbuton.addEventListener("submit", validation);


// 2   DEFINICION DE BASE DE DATOS:

const accounts = [
    { mail: "javi@gmail.com", balance: 100, password: "123"},
    { mail: "mali@gmail.com", balance: 200, password: "456"},
    { mail: "gera@gmail.com", balance: 290, password: "789"},
    { mail: "maui@gmail.com", balance: 67, password: "321"},
    
];




//  3 FUNCION VALIDADORA DE DATOS:

function validation(e){
  
//  previene la ejecucion del envio del formulario:
    e.preventDefault();



//  4 ASIGNACION DE DATOS INGRESADOS A VARIABLES:

    
    let user = e.target.user.value;
    let password = e.target.password.value;
    let loginFlagyes = 4;

    console.log("Los datos obtenidos son:");
    console.log("El usuario escrito es:  "+ user);
    console.log("El password escrito es:  "+ password);
    

// console.log("Prueba de la base de datos:");
// console.log(accounts[0].mail);
// console.log(accounts[0].password);





for (let i = 0; i < accounts.length; i++){

    if (accounts[i].mail === user && accounts[i].password === password){
       
        loginFlagyes = i;
        console.log("Se encontro los datos en el indice: " + i);
    } else{
                
        loginFlagno = 4;
    }


}


// VALIDACION DEL RESULTADO DE LA BUSQUEDA DEL FOR EN LA BASE DE DATOS:

if(loginFlagyes <= 3){
    console.log("Valor de loginFlag despues del for: " + loginFlagyes);
    console.log("se llamó a la funcion exitosa en el indice: " + loginFlagyes);
    loginSuccessfully(loginFlagyes);

} else{

    loginNoSuccessfully();
        console.log("se llamó a la funcion NO exitosa");

}


// FUNCION SI LA VALIDACION ES ESXITOSA:

function loginSuccessfully(){
    console.log("Validacion exitosa desde la funcion en el indice: " + loginFlagyes);


    // GUARDAR INFO EN LOCAL STORAGE:
    localStorage.setItem("mail", accounts[loginFlagyes].mail);
    localStorage.setItem("password", accounts[loginFlagyes].password);
    localStorage.setItem("balance", accounts[loginFlagyes].balance);

   

    console.log("Mail desde local storage: "+ localStorage.getItem("mail"));
    console.log("Password desde local storage: "+ localStorage.getItem("password"));
    console.log("Balance desde local storage: "+ localStorage.getItem("balance"));



    // REDIRECCION A PAGINA HOME SI LA VALIDACION ES CORRECTA:
     window.location.replace("home.html");

    
};


// FUNCION SI LA VALIDACION NO ES ESXITOSA:
function loginNoSuccessfully(){
    console.log("Validacion NO fue exitosa desde la funcion");
    alert("Usuario o contraseña incorrectos, intente de nuevo...");
};



}




