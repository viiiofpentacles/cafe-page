function contactPage() {
    const contactContent = document.createElement('div');
    contactContent.id = 'contact-page';
    const contactHeader = document.createElement('h1');
    contactHeader.textContent = 'Visit Us';
    contactContent.appendChild(contactHeader);
    
    document.getElementById('content').appendChild(contactContent);
};

function creditsInserter (item, sourceName, link) {
    const creditsHolder = document.createElement('div');
    creditsHolder.textContent = `${item} from `;
    const creditsLink = document.createElement('a');
    creditsLink.setAttribute('href', link);
    creditsLink.textContent = sourceName;
    creditsLink.style.textDecoration = 'none';
    creditsLink.style.color = 'rgb(199, 110, 110)'
    creditsHolder.appendChild(creditsLink);

    const contactContent = document.getElementById('contact-page');
    contactContent.appendChild(creditsHolder);
}

export {contactPage, creditsInserter};