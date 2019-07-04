const menu = document.createElement('div');
menu.classList.add('menu');

const menuList = {
  'Plate of Pasta': 'https://source.unsplash.com/ddZYOtZUnBk/300x300',
  'Capellini tomato sauce': 'https://source.unsplash.com/PLyJqEJVre0/300x300',
  'Pesto Pasta': 'https://source.unsplash.com/12eHC6FxPyg/300x300',
  'Autumn Soup': 'https://source.unsplash.com/w6ftFbPCs9I/300x300',
  'Toast bread with blueberry on black plate':
    'https://source.unsplash.com/zcUgjyqEwe8/300x300',
  'Pancakes with fruit': 'https://source.unsplash.com/GuvimT4IFok/300x300'
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
