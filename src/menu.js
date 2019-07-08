const menuList = {
  'Plate of Pasta': 'img/plate-of-pasta.jpg',
  'Capellini tomato sauce': 'img/capellini-tomato-soup.jpg',
  'Pesto Pasta': 'img/pesto-pasta.jpg',
  'Autumn Soup': 'img/autumn-soup.jpg',
  'Toast bread with blueberry': 'img/toast-bread.jpg',
  'Pancakes with fruit': 'img/pancakes-with-fruits.jpg'
};

const menu = document.createElement('div');
menu.classList.add('menu');

const menuTitle = document.createElement('h2');
menuTitle.textContent = 'Our Menu';
menuTitle.classList.add('menu-title');
menu.appendChild(menuTitle);

Object.keys(menuList).forEach(foodName => {
  const menuRow = document.createElement('div');
  menuRow.classList.add('menu-row');

  const img = document.createElement('img');
  img.src = menuList[foodName];
  img.alt = foodName;

  const name = document.createElement('div');
  name.textContent = foodName;
  name.classList.add('name');

  menuRow.appendChild(img);
  menuRow.appendChild(name);
  menu.appendChild(menuRow);
});

export default menu;
