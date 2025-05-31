// Datos iniciales de libros en formato JSON
let biblioteca = {
    "libros": [
        { "titulo": "Cien años de soledad", "autor": "Gabriel García Márquez", "genero": "Realismo mágico", "disponible": true },
        { "titulo": "1984", "autor": "George Orwell", "genero": "Distopía", "disponible": true }
    ]
};

// Función para simular la lectura de datos (asimilar la lectura de un archivo JSON)
function leerDatos(callback) {
    console.log("Simulando lectura de datos...");
    setTimeout(() => {
        // Aquí simulas leer el JSON con un retraso de 1 segundo
        callback(biblioteca);
    }, 1000);
}

// Función para mostrar todos los libros en consola
function mostrarLibros() {
    leerDatos((datos) => {
        console.log("\n--- Inventario de libros ---");
        if (datos.libros.length === 0) {
            console.log("La biblioteca está vacía.");
            return;
        }
        datos.libros.forEach((libro, index) => {
            console.log(`${index + 1}. "${libro.titulo}" - ${libro.autor} (${libro.disponible ? 'Disponible' : 'Prestado'})`);
        });
        console.log("----------------------------\n");
    });
}

// Función para agregar un nuevo libro
function agregarLibro(titulo, autor, genero, disponible) {
    const nuevoLibro = { titulo, autor, genero, disponible };

    setTimeout(() => {
        // Agregamos el nuevo libro directamente al array 'libros' en el objeto 'biblioteca'
        biblioteca.libros.push(nuevoLibro);
        console.log(`"${titulo}" ha sido agregado a la colección.`);
        // Llamamos a mostrarLibros después de que la adición "asíncrona" se complete
        // Ten en cuenta que esta llamada también activará una simulación de lectura.
        mostrarLibros();
    }, 1000); // Retraso de 1 segundo para simular la escritura
}

// Función para cambiar la disponibilidad de un libro
function actualizarDisponibilidad(titulo, nuevoEstado) {
    setTimeout(() => {
        // Busca el libro por título directamente en el array 'libros' de 'biblioteca'
        const libroEncontrado = biblioteca.libros.find(libro => libro.titulo === titulo);

        if (libroEncontrado) {
            libroEncontrado.disponible = nuevoEstado; // Cambia la propiedad 'disponible'
            console.log(`La disponibilidad de "${titulo}" ha sido actualizada a: ${nuevoEstado ? 'Disponible' : 'Prestado'}.`);
            // Llama a mostrarLibros después de que la actualización "asíncrona" se complete
            // Esto también activará una simulación de lectura.
            mostrarLibros();
        } else {
            console.log(`"${titulo}" no fue encontrado en la colección.`);
        }
    }, 1000); // Retraso de 1 segundo para simular la escritura
}

// Ejemplo de cómo ejecutar la aplicación
mostrarLibros();
agregarLibro("El principito", "Antoine de Saint-Exupéry", "Fábula", true);
actualizarDisponibilidad("1984", false);