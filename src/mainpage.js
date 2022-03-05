function mainPage() {
    const mainContent = document.createElement('div');
    mainContent.id = 'main-page';
    const headerContent = document.createElement('h1');
    headerContent.textContent = 'msqt is steeped in history.';
    mainContent.appendChild(headerContent);

    document.getElementById('content').appendChild(mainContent);
}

export {mainPage};