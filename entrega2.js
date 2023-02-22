class user {
    constructor(telefono, dni, nombre){
    this.telefono = telefono;
    this.dni = dni;
    this.nombre = nombre;
  }
}

const saldoMatias = new user (3415101123, 45639779, "Matias");
const saldoEugenio = new user (3415292682, 18451234, "Eugenio");
const saldoMonica =new user (3418728119, 25824971, "Monica");
 
const arrayuser = [saldoMatias, saldoEugenio, saldoMonica];
console.log(arrayuser);

function start(){
    alert("Bienvenido a Neck");
    let opcion = parseInt(prompt("Ingrese una opcion: 1) Saldo 2) finalizacion del descuento 3) Abono mensual 4) salir"));
    return opcion;
}


function cliente(){
    let telefono = prompt("Introduzca su numero de celular");
    let dni = prompt("Introduzca su dni");
    let nombre = prompt ("Introduzca su nombre");
   let user = new user (telefono, dni, nombre)
}
arrayuser.push(user);
console.log(arrayuser);

function bajaDeServicio(){
    let telefono = parseInt(prompt("Ingrese su telefono"));
    let nombre = arrayuser.find(nombre => user.nombre === nombre);
    let indice = arrayuser.indexOf(nombre);
    arrayuser.splice(indice, 1);
    console.log(arrayuser);
}

function salir(){
    alert("gracias por tu consulta");
}

let opcion = start();
switch(opcion) {
    case 1:
        cliente();
        break;
    case 2:
        start();
        break;
    case 3:
        bajaDeServicio();
        break;
    case 4:
        salir();
        break
    default:
        alert("opcion incorrecta");
        break
}
