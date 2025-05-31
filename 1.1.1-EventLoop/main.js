console.log("a");

setTimeout(() =>{
    console.log("b");
}, 0)

Promise.resolve().then(() => console.log("c"));

console.log("d");

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
.then((request) => request.json())
.then((data) => console.log(data))