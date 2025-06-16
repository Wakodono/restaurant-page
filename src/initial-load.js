import restaurant from "./volkan-vardar-1H30uRC1plc-unsplash.jpg"

export default () => {
    const contentDiv = document.getElementById('content');

    const headline = document.createElement('h1');
    headline.innerText = 'Welcome to Wako Food';

    const synopsis = document.createElement('p');
    synopsis.innerText = "This restaurant is the first of it's kind in Aberdeen!";

    const heroImg = new Image(500, 500)
    heroImg.src = restaurant

    contentDiv.appendChild(headline);
    contentDiv.appendChild(heroImg);
    contentDiv.appendChild(synopsis);
}