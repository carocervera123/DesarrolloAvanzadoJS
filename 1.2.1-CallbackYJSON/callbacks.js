/* function procesarEntradaUsuario(callback) {
    let nombre = prompt("Por favor ingresa tu nombre.");
    callback(nombre);
}

procesarEntradaUsuario((nombre) => {
    alert("Hola " + nombre);
});
*/


let value = 1;

setTimeout(() =>{
    value = 2;
}, 1000)

console.log(value);

setTimeout(() => {
    console.log(value);
}, 2000)