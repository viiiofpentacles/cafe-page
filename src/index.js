import {mainPage} from './mainpage.js';
import {menuPage} from './menupage.js';

const createSideBar = (() => {
    const sideBar = document.createElement('div');
    sideBar.id = 'sidebar';
    const navigation = document.createElement('ul');
    sideBar.appendChild(navigation);
    document.getElementById('content').appendChild(sideBar);
    return {navigation};
})();

function menuCreator(name, func) {
    const menuLink = document.createElement('li');
    menuLink.textContent = name;
    menuLink.addEventListener('click', () => {
        const contentDiv = document.getElementById('content');
        contentDiv.removeChild(contentDiv.lastChild);
        func();
    })
    createSideBar.navigation.appendChild(menuLink);
}

menuCreator('Home', mainPage);
menuCreator('Menu', menuPage);
mainPage();

