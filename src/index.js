import buildLayout from './layout';
import menu from './menu';
import contact from './contact';
import about from './about';

const components = { about, menu, contact };
let active = about;

const tabClick = e => {
  active = components[e.target.id];
  tabContent.innerHTML = active;
  const navElems = [...e.target.parentNode.children];
  navElems.forEach(n => n.classList.remove('active'));
  e.target.classList.add('active');
};

const { layout, tabContent } = buildLayout(tabClick, components);

const content = document.querySelector('#content');
content.appendChild(layout);

tabContent.innerHTML = active;
