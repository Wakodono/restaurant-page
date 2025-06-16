function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    const heading = document.createElement('h1');
    heading.textContent = 'Our Menu';

    const menuItems = [
        {
            name: 'Signature Dish',
            description: 'Our chef\'s special creation',
            price: '$24.99'
        },
        {
            name: 'Classic Entrée',
            description: 'A timeless favorite',
            price: '$19.99'
        }
    ];

    const menuList = document.createElement('div');
    menuList.classList.add('menu-items');

    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');

        const name = document.createElement('h3');
        name.textContent = item.name;

        const description = document.createElement('p');
        description.textContent = item.description;

        const price = document.createElement('p');
        price.textContent = item.price;

        menuItem.appendChild(name);
        menuItem.appendChild(description);
        menuItem.appendChild(price);
        menuList.appendChild(menuItem);
    });

    menu.appendChild(heading);
    menu.appendChild(menuList);

    return menu;
}

export default createMenu;
