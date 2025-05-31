const orderList = document.getElementById('orderList');
const addOrderBtn = document.getElementById('addOrderBtn');

let orderId = 1; // Para identificar los pedidos

addOrderBtn.addEventListener('click', () => {
    const order = { id: orderId++, status: 'En Proceso' };
    addOrder(order);
    processOrder(order);
});

function addOrder(order) {
    const listItem = document.createElement('li');
    listItem.id = `order-${order.id}`;
    listItem.textContent = `Pedido #${order.id}: ${order.status}`;
    orderList.appendChild(listItem);
}

function updateOrderStatus(order, status) {
    const listItem = document.getElementById(`order-${order.id}`);
    if (listItem) {
        listItem.textContent = `Pedido #${order.id}: ${status}`;
    }
}

async function processOrder(order) {
    console.log(`Pedido #${order.id}: Iniciando preparación...`);

    // TODO: Simular la preparación del pedido usando setTimeout y Promise
    const preparationTime = Math.floor(Math.random() * 4000) + 1000; // Tiempo aleatorio entre 1 y 5 segundos

    await new Promise(resolve => {
        setTimeout(() => {
            resolve(); // La promesa se resuelve después del tiempo de preparación
        }, preparationTime);
    });

    // TODO: Actualizar el estado del pedido a "Completado"
    updateOrderStatus(order, 'Completado');
    console.log(`Pedido #${order.id}: Completado en ${preparationTime / 1000} segundos.`);
}