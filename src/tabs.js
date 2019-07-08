const buildTabNav = (components, cb) => {
  const tabNav = document.createElement('div');
  tabNav.classList.add('tab-nav');

  const ul = document.createElement('ul');
  tabNav.appendChild(ul);

  Object.keys(components).forEach((item, i) => {
    const li = document.createElement('li');
    li.textContent = item;
    li.id = item.toLowerCase();
    if (i === 0) li.classList.add('active');
    li.addEventListener('click', cb);
    ul.appendChild(li);
  });

  return tabNav;
};

export default buildTabNav;
