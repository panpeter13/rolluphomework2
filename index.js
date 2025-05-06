import jsImage from './assets/javascript.png.webp'

const heading = document.createElement('h1');
heading.textContent = 'I love JavaScript';

const image = document.createElement('img');
image.src = jsImage;
image.alt = 'JS logo';

document.body.append(heading, image)
