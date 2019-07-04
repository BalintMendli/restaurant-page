import buildLayout from './layout';
import menu from './menu';
import contact from './contact';
import about from './about';

const components = { about, menu, contact };
let activeTab = about;

const tabClick = e => {
  activeTab = components[e.target.id];
  setTabContent(activeTab);
  const navElems = [...e.target.parentNode.children];
  navElems.forEach(n => n.classList.remove('active'));
  e.target.classList.add('active');
};

const { layout, tabContentElem } = buildLayout(tabClick, components);

const content = document.querySelector('#content');
content.appendChild(layout);

const setTabContent = content => {
  [...tabContentElem.children].forEach(el => el.remove());
  tabContentElem.appendChild(content);
};

setTabContent(activeTab);
