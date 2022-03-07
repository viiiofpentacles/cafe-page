function mainPage() {
    const mainContent = document.createElement('div');
    mainContent.id = 'main-page';
    const mainHeader = document.createElement('h1');
    mainHeader.textContent = 'msqt is steeped in history.';
    mainContent.appendChild(mainHeader);
    const bodyContent = document.createElement('div');
    bodyContent.textContent = 'Situated right next to the Excepteur campus, msqt is a cafe that has it\'s origins in the Occaecat Cupidatat movement in the 1400s.'
                                + ' Today, the cafe serves as a rendezvous for like-minded individuals to trade their best ideas over our house specialties, continuing an unbroken tradition spanning centuries.'
                                + ' Take a look at what we have to offer before visiting us or head straight on over for a personalised recommedation from our friendly staff.'
    mainContent.appendChild(bodyContent);
    
    document.getElementById('content').appendChild(mainContent);
}

export {mainPage};