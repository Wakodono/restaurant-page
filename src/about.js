
function createAbout() {
    const about = document.createElement('div');
    about.classList.add('about');

    const heading = document.createElement('h1');
    heading.textContent = 'About Us';

    const story = document.createElement('div');
    story.classList.add('story');

    const storyHeading = document.createElement('h2');
    storyHeading.textContent = 'Our Story';

    const storyText = document.createElement('p');
    storyText.textContent = 'Founded in 2024, our restaurant brings together the finest ingredients and culinary expertise to create an unforgettable dining experience.';

    const hours = document.createElement('div');
    hours.classList.add('hours');

    const hoursHeading = document.createElement('h2');
    hoursHeading.textContent = 'Hours';

    const hoursList = document.createElement('ul');
    const hoursItems = [
        'Monday - Friday: 11am - 10pm',
        'Saturday - Sunday: 10am - 11pm'
    ];

    hoursItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        hoursList.appendChild(li);
    });

    story.appendChild(storyHeading);
    story.appendChild(storyText);

    hours.appendChild(hoursHeading);
    hours.appendChild(hoursList);

    about.appendChild(heading);
    about.appendChild(story);
    about.appendChild(hours);

    return about;
}

export default createAbout;
