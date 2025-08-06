let confirmacion = true;

while (confirmacion) {
    let numero = prompt("Ingresa un número del 1 al 10");
    let tablas = parseInt(numero);

    if (isNaN(tablas) || numero < 1 || numero > 10) {
        alert("Error: Por favor ingresa un número válido");
        continue;
    }
    console.log(`\nTabla del ${numero}: `);

    for (let i = 0; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }

    confirmacion = confirm("¿Quieres ver otra tabla de multiplicar?");
}
console.log("Espero te haya servido");

