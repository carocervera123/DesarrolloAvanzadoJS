const resolveAfter = () => {
    return new Promise((resolve, reject) => {
        let valor = false;
        setTimeout(() => {
            return (valor) ? resolve([1,2,3]) : reject("Rechazado");
        }, 6000)
    })
}

const asyncCall = async () => {
    try {
        console.log("Llamando a la funcion");
        const result = await resolveAfter();
        return result;
    } catch (error) {
        console.error(error);
        return new Promise((resolve, reject) => reject("La peticion no paso :("))
    }
}

const numbers = asyncCall();

numbers
.then((value) => console.log(value))
.catch((err) => console.error(err))

const apiCall = async (url, property=null) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        if(property){
            console.log(data[property]);
        } else {
            console.log(data);
        }
        
    } catch (error) {
        console.error(error);
    }
}

apiCall("https://rickandmortyapi.com/api/character", "results");

apiCall("https://jsonplaceholder.typicode.com/todos/1");


