// Importamos Zod
const { z } = window.Zod;

// Esquema para validar los datos del formulario
const registerSchema = z.object({
    // PISTA: Define que el nombre debe ser una cadena no vacía.
    name: z.string().min(1, { message: "El nombre no puede estar vacío." }),

    // PISTA: Valida que el correo tenga el formato correcto.
    email: z.string().email({ message: "Formato de correo electrónico inválido." }),

    // PISTA: La contraseña debe tener al menos 6 caracteres.
    password: z.string().min(6, { message: "La contraseña debe tener al menos 6 caracteres." }),
});

document.getElementById("registerForm").addEventListener("submit", (event) => {
    event.preventDefault();

    // Capturamos los valores ingresados
    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
    };

    try {
        // PISTA: Usa el método correcto de Zod para validar el esquema.
        registerSchema.parse(formData);
        alert("¡Registro exitoso!");
        console.log("Datos válidos:", formData);
        document.getElementById("registerForm").reset(); // Limpia el formulario
    } catch (error) {
        // PISTA: Muestra los mensajes de error en la página.
        document.getElementById("errors").textContent = error.errors.map(e => e.message).join("\n");
    }
});
