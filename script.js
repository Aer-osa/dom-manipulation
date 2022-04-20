const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const container2 = document.querySelector('#container2');

const content2 = document.createElement('p');
content2.classList.add('content');
content2.textContent = 'Hey I\'m Red';
content2.style.color = 'red';

container2.appendChild(content2);

