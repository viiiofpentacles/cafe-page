function contactPage() {
    const contactContent = document.createElement('div');
    contactContent.id = 'contact-page';
    const contactHeader = document.createElement('h1');
    contactHeader.textContent = 'Visit Us';
    contactContent.appendChild(contactHeader);

    document.getElementById('content').appendChild(contactContent);
};

export {contactPage};