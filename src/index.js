import buildLayout from './layout';
import menu from './menu';
import contact from './contact';
import about from './about';

const components = { about, menu, contact };
let activeTab = about;

const tabClick = e => {
  activeTab = components[e.target.id];
  setTabContent(activeTab, tabContentElem);
  setActiveTab(e.target);
};

const setTabContent = (content, elem) => {
  [...elem.children].forEach(el => el.remove());
  elem.appendChild(content);
};

const setActiveTab = navElem => {
  const navElems = [...navElem.parentNode.children];
  navElems.forEach(n => n.classList.remove('active'));
  navElem.classList.add('active');
};

const { layout, tabContentElem } = buildLayout(components, tabClick);

const content = document.querySelector('#content');
content.appendChild(layout);

setTabContent(activeTab, tabContentElem);
