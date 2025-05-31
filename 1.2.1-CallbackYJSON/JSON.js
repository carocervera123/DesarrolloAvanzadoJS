const token = {
    uuid: "eyEndfdd539hguia8276",
    timestamp: '2025-05-06T19:45:41-06:00'
}

const tokenJSON = JSON.stringify(token);

localStorage.setItem('token', tokenJSON);

const browserToken = localStorage.getItem('token');
console.log(browserToken);

const parsedToken = JSON.parse(browserToken);

console.log(parsedToken);

localStorage.removeItem('token')