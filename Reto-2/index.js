let usuario = {
    nombre: "Jacqueline",
    apellido: "Becerra",
    cuenta: 1029384756,
    pin: 7934,
    saldo: 100000,
};

let cuenta = prompt("Ingresa tu número de cuenta");

if (cuenta == usuario.cuenta) {
    addpin();
} else {
    alert("Estimado usuario su número de cuenta es incorrecto; por favor verifique bien el número ingresado. Gracias");
}

function addpin() {
    let pin = prompt("Ingresa tu pin");

    if (pin == usuario.pin) {
        alert("Bienvenida: " + " " + usuario.nombre + " " + usuario.apellido);
        opciones();
    } else {
        alert(
            "Pin Incorrecto, verifique si ingreso algún número mal; vuelva a ingresar de nuevo");
    }
}

function opciones() {
    // Aquí va la lógica de lo que el usuario puede hacer si ingresa el PIN correcto

    let opciones = prompt("Selecciona una opción: \n1.Ver saldo disponible \n2.Retirar dinero \n3.Salir ")

    switch (opciones) {
        case "1":
            alert("Tu saldo disponible es de: $100000 pesos");
            break;

        case "2":
            let saldo = 100000;
            let retiro = prompt(`Ingresa el valor que deseas retirar:`);
            primerRetiro = true;

            alert(`Tu saldo ahora es de: ${saldo - retiro}`);
            break;

        case "3":
            alert("Hasta luego" + " " + usuario.nombre);
            break;

        default:

            break;
    }
}

