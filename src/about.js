const about = document.createElement('div');
about.classList.add('about');

const aboutTitle = document.createElement('h2');
aboutTitle.textContent = 'About Us';

const aboutText = document.createElement('p');
aboutText.textContent =
  'Take a culinary journey at La Pasta, a modern restaurant specializing in fresh and simple Italian cuisine. Experience the fresh pasta, freshly made pizza and salads all served against the backdrop of innovative décor in woody surroundings. An open kitchen with an oven exclusively for baking pizzas offers diners a wonderful dining experience.';

about.appendChild(aboutTitle);
about.appendChild(aboutText);

export default about;
