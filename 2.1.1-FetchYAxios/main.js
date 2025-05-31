/* const todosArray = [];

for(let i = 1; i < 50; i++){
    fetch(`https://jsonplaceholder.typicode.com/todos/${i}`)
    .then((response) => response.json())
    .then((data) => todosArray.push(data))
    .catch((err) => console.error(err))
    .finally(() => {
        printTodos(todosArray);
})
}

function printTodos(todos){
    todos.forEach(todo => {
        console.log(todo.title);
    });
} 
*/

axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => console.log(response.data))
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
    });


