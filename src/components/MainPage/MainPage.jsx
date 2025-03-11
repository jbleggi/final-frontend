

function getSubscriptions() {
  fetch('http://localhost:3001/api/v1/subscriptions')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error.message))
}