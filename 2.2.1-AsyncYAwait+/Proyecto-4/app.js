// Simulando una base de datos de mesas
const mesasDisponibles = 5;  // Número de mesas disponibles para reservar

// Función que simula la verificación de disponibilidad de mesas
function verificarDisponibilidad(mesasSolicitadas) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (mesasSolicitadas <= mesasDisponibles) {
                resolve(`¡Mesas disponibles! Puedes reservar ${mesasSolicitadas} mesas.`);
            } else {
                reject(`Lo sentimos, solo quedan ${mesasDisponibles} mesas disponibles. No podemos reservar ${mesasSolicitadas}.`);
            }
        }, 2000);  // Simula un retraso en la verificación (2 segundos)
    });
}

// Función que simula el envío de un correo de confirmación
function enviarConfirmacionReserva(nombreCliente) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exitoEnvio = Math.random() > 0.3; // 70% de probabilidad de éxito (0.7)

            if (exitoEnvio) {
                resolve(`Correo de confirmación enviado exitosamente a ${nombreCliente}.`);
            } else {
                reject(`Fallo al enviar el correo de confirmación a ${nombreCliente}.`);
            }
        }, 1500);  // Simula el envío de un correo (1.5 segundos)
    });
}

// Función principal para manejar una reserva
async function hacerReserva(nombreCliente, mesasSolicitadas) {
    try {
        console.log("Verificando disponibilidad de mesas...");
        // Llama a la función de verificación y espera a que se resuelva
        const mensajeDisponibilidad = await verificarDisponibilidad(mesasSolicitadas);
        console.log(mensajeDisponibilidad); // Muestra el mensaje de éxito de disponibilidad

        // Completa el flujo aquí: Si hay mesas disponibles, llama a la función para enviar la confirmación.
        console.log("Mesas disponibles. Procediendo a enviar confirmación...");
        const mensajeConfirmacion = await enviarConfirmacionReserva(nombreCliente);
        console.log(mensajeConfirmacion); // Muestra el mensaje de éxito del envío de correo

        console.log(`¡Reserva completada exitosamente para ${nombreCliente}!\n`);

    } catch (error) {
        // Maneja los errores en cualquiera de las promesas
        console.error("Error en el proceso de reserva:", error);
        console.log("La reserva no pudo ser completada.\n");
    }

}


// Llamada de prueba exitosa
hacerReserva("José Pérez", 3);  // Intenta hacer una reserva para 3 personas

//No hay mesas disponibles
setTimeout(() => {
    hacerReserva("María Perez", 5); // Más mesas de las disponibles
}, 5000); // Espera a que termine la primera reserva

//Reserva exitosa, pero falla el envío del correo
setTimeout(() => {
    hacerReserva("Carlos Gómez", 3);
}, 10000); // Espera a que terminen las reservas anteriores

//Intentar una reserva con 0 mesas
setTimeout(() => {
    hacerReserva("Ana Ruiz", 0);
}, 15000);