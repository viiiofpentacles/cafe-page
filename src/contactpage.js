function contactPage() {
    const contactContent = document.createElement('div');
    contactContent.id = 'contact-page';
    const contactHeader = document.createElement('h1');
    contactHeader.textContent = 'Visit Us';
    contactContent.appendChild(contactHeader);

    const fontCredits = document.createElement('div');
    fontCredits.textContent = `Fonts from `;
    const fontCreditsLink = document.createElement('a');
    fontCreditsLink.setAttribute('href', `https://fonts.google.com/`);
    fontCreditsLink.textContent = 'Google Fonts';
    fontCreditsLink.style.textDecoration = 'none';
    fontCreditsLink.style.color = 'rgb(199, 110, 110)'
    fontCredits.appendChild(fontCreditsLink);

    const imageCredits = document.createElement('div');
    imageCredits.textContent = `Images from `;
    const imageCreditsLink = document.createElement('a');
    imageCreditsLink.setAttribute('href', `https://www.freepik.com/`);
    imageCreditsLink.textContent = 'freepik';
    imageCreditsLink.style.textDecoration = 'none';
    imageCreditsLink.style.color = 'rgb(199, 110, 110)'
    imageCredits.appendChild(imageCreditsLink);

    contactContent.appendChild(fontCredits);
    contactContent.appendChild(imageCredits);

    document.getElementById('content').appendChild(contactContent);
};

export {contactPage};