function menuPage() {
    const menuContent = document.createElement('div');
    menuContent.id = 'menu-page';
    const menuHeader = document.createElement('h1');
    menuHeader.textContent = 'Menu';
    menuContent.appendChild(menuHeader);

    document.getElementById('content').appendChild(menuContent);
}

export {menuPage};