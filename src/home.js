function createHome() {
    const home = document.createElement('div');
    home.classList.add('home');

    const heading = document.createElement('h1');
    heading.textContent = 'Welcome to Our Restaurant';

    const description = document.createElement('p');
    description.textContent = 'Experience the finest dining with our carefully crafted menu and warm atmosphere.';

    home.appendChild(heading);
    home.appendChild(description);

    return home;
}

export default createHome;
