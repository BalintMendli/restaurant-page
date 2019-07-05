const menu = document.createElement('div');
menu.classList.add('menu');

const menuList = {
  'Plate of Pasta': 'img/plate-of-pasta.jpg',
  'Capellini tomato sauce': 'img/capellini-tomato-soup.jpg',
  'Pesto Pasta': 'img/pesto-pasta.jpg',
  'Autumn Soup': 'img/autumn-soup.jpg',
  'Toast bread with blueberry on black plate': 'img/toast-bread.jpg',
  'Pancakes with fruit': 'img/pancakes-with-fruits.jpg'
};

Object.keys(menuList).forEach(foodName => {
  const menuRow = document.createElement('div');
  menuRow.classList.add('menu-row');

  const img = document.createElement('img');
  img.src = menuList[foodName];
  img.alt = foodName;

  const name = document.createElement('div');
  name.textContent = foodName;

  menuRow.appendChild(img);
  menuRow.appendChild(name);
  menu.appendChild(menuRow);
});

// <img
//   src="https://source.unsplash.com/qE1jxYXiwOA/300x300"
//   alt="restaurant"

export default menu;
