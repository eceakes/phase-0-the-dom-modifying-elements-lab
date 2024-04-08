// Write your code here!
const mainElement = document.querySelector('main');
mainElement.removeAttribute('id');
const newHeader = document.createElement('h1');
newHeader.setAttribute('id', 'victory');
newHeader.textContent = "Eric is the champion";
document.body.append(newHeader);