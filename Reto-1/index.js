let nombre = prompt("Ingrese su nombre");
let edad = prompt("Ingresa tu edad");
let tieneInvitacion = confirm("¿Tienes invitación?");

console.log("El tipo de dato de nombre es:" + typeof (nombre));
console.log("El tipo de dato de edad es:" + typeof (edad));
console.log("El tipo de dato de tieneInvitacion es:" + typeof (tieneInvitacion));

if (edad >= 18 && tieneInvitacion) {
    alert("Bienvenid@" + " " + nombre + "," + " puedes ingresar ");
} else {
    alert("Lo siento" + " " + nombre + "," + " pero no puedes ingresar. " + " No cumples con los requisitos");
}