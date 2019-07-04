const contact = document.createElement('div');
contact.classList.add('contact');

const heading = document.createElement('h2');
heading.textContent = 'Reach out to us!';

const form = document.createElement('form');

const nameInput = document.createElement('input');
nameInput.setAttribute('placeholder', 'Your name');

const emailInput = document.createElement('input');
emailInput.setAttribute('type', 'email');
emailInput.setAttribute('placeholder', 'Your email');

const message = document.createElement('textarea');
message.setAttribute('placeholder', 'Message');

const sendButton = document.createElement('button');
sendButton.textContent = 'Send';

form.appendChild(nameInput);
form.appendChild(emailInput);
form.appendChild(message);
form.appendChild(sendButton);
contact.appendChild(heading);
contact.appendChild(form);

export default contact;
