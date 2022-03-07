function contactPage() {
    const contactContent = document.createElement('div');
    contactContent.id = 'contact-page';
    const contactHeader = document.createElement('h1');
    contactHeader.textContent = 'Visit Us';
    contactContent.appendChild(contactHeader);

    const credits = document.createElement('div');
    credits.textContent = `Fonts from `;
    const fontCredits = document.createElement('a');
    fontCredits.setAttribute('href', `https://fonts.google.com/`);
    fontCredits.textContent = 'Google Fonts';
    fontCredits.style.textDecoration = 'none';
    fontCredits.style.color = 'rgb(199, 110, 110)'
    credits.appendChild(fontCredits);

    contactContent.appendChild(credits);

    document.getElementById('content').appendChild(contactContent);
};

export {contactPage};