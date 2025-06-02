document.getElementById('registroEvento').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita el envío automático del formulario

    // Variables
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const telefono = document.getElementById('telefono').value;
    const intereses = document.querySelectorAll('input[name="intereses"]:checked');
    const horario = document.querySelector('input[name="horario"]:checked');
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;

    // Validaciones básicas
    if (!nombre || !correo || !telefono || intereses.length === 0 || !horario) {
        alert('Por favor, completa todos los campos obligatorios.');
        return;
    }

    //Validación de Horario 
    if (!horario) {
        displayError('horario', 'Por favor, selecciona tu horario preferido.');
        formIsValid = false;
    }

    //Validación de Fecha(no puede ser anterior a hoy)
    const fechaEvento = new Date(fecha);
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0); // Para comparar solo la fecha, sin la hora
    if (!fecha) {
        displayError('fecha', 'La fecha del evento es obligatoria.');
        formIsValid = false;
    } else if (fechaEvento < hoy) {
        displayError('fecha', 'La fecha del evento no puede ser anterior al día de hoy.');
        formIsValid = false;
    }

    //Validación de Archivo (tipo y tamaño, si se sube)
    if (identificacion) {
        const maxFileSize = 2 * 1024 * 1024; // 2 MB en bytes
        if (identificacion.type !== 'application/pdf') {
            displayError('identificacion', 'El documento debe ser un archivo PDF.');
            formIsValid = false;
        } else if (identificacion.size > maxFileSize) {
            displayError('identificacion', 'El tamaño máximo del archivo es 2MB.');
            formIsValid = false;
        }
    }

    
    // Si todo está bien
    alert('Registro exitoso. ¡Gracias por registrarte!');
});