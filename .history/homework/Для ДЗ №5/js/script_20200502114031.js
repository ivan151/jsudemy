let menu = document.getElementsByClassName('menu')[0],
    menuItems = document.querySelectorAll('.menu-item'),
    header = document.getElementsByTagName('header'),
    column = document.querySelector('.column'),
    menuItemLi = document.createElement('li');


menu.insertBefore(menuItems[2],menuItems[1]);
menuItemLi.classList.add('menu-item');
menuItemLi.textContent = 'Пятый элемент';
menu.append(menuItemLi);

menu.append()

