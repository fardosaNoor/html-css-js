// your javascript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const para = document.createElement('p');
para.textContent = "Hey I'm red!";
para.style.color = 'red';
const headingThree = document.createElement('h3');
headingThree.textContent = "I'm a blue h3!";
const pinkDiv = document.createElement('div');
pinkDiv.setAttribute('style', 'backgroundColor:pink', 'border: black');
const inAdiv = document.createElement('h1');
inAdiv.textContent= "I'm in a div";
const paraTwo = document.createElement('p');
paraTwo.textContent = "ME TOO!";
pinkDiv.append(inAdiv, paraTwo);
container.append(para, headingThree, pinkDiv);

