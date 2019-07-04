const buildTabNav = (el, components) => {
  const tabNav = document.createElement('div');
  tabNav.classList.add('tab-nav');
  const ul = document.createElement('ul');
  tabNav.appendChild(ul);
  Object.keys(components).forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    li.id = item.toLowerCase();
    li.addEventListener('click', el);
    ul.appendChild(li);
  });
  return tabNav;
};

export default buildTabNav;
