import buildTabNav from './tabs';

const buildLayout = (el, components) => {
  const layout = document.createElement('div');
  layout.classList.add('container');

  const title = document.createElement('h1');
  title.classList.add('title');
  title.textContent = 'Restaurant Page';
  layout.appendChild(title);

  const tabs = buildTabNav(el, components);
  layout.appendChild(tabs);

  const tabContentElem = document.createElement('div');
  tabContentElem.classList.add('tab-content');
  layout.appendChild(tabContentElem);

  return { layout, tabContentElem };
};

export default buildLayout;
