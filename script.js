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

const container3 = document.querySelector('#container3');

const content3 = document.createElement('h3');
content3.classList.add('content');
content3.textContent = 'I\'m a blue h3';
content3.style.color = 'blue';

container3.appendChild(content3);

const container4 = document.querySelector('#container4');

const div = document.createElement('div');
container4.appendChild(div);

const content4 = document.createElement('h1');
content4.classList.add('content');
content4.textContent = 'I\'m in a div';
content4.style.borderWidth = '2px';
content4.style.borderColor = 'black';
content4.style.backgroundColor = 'pink';

container4.appendChild(content4);

