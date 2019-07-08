import buildTabNav from './tabs';

const buildLayout = (components, cb) => {
  const layout = document.createElement('div');
  layout.classList.add('container');

  const title = document.createElement('h1');
  title.classList.add('title');
  title.textContent = 'Restaurant La Pasta';
  layout.appendChild(title);

  const tabs = buildTabNav(components, cb);
  layout.appendChild(tabs);

  const tabContentElem = document.createElement('div');
  tabContentElem.classList.add('tab-content');
  layout.appendChild(tabContentElem);

  const footer = document.createElement('div');
  footer.classList.add('footer');
  footer.textContent = 'La Pasta - ' + new Date().getFullYear();
  layout.appendChild(footer);

  return { layout, tabContentElem };
};

export default buildLayout;
