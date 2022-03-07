import {mainPage} from './mainpage.js';
import {menuPage} from './menupage.js';
import {contactPage} from './contactpage.js';
import './style.css';

const createSideBar = (() => {
    const sideBar = document.createElement('div');
    sideBar.id = 'sidebar';
    const navigation = document.createElement('ul');
    sideBar.appendChild(navigation);
    document.getElementById('content').appendChild(sideBar);
    return {navigation};
})();

function navCreator(name, func) {
    const navLink = document.createElement('li');
    navLink.textContent = name;
    navLink.addEventListener('click', () => {
        const contentDiv = document.getElementById('content');
        contentDiv.removeChild(contentDiv.lastChild);
        func();
    })
    createSideBar.navigation.appendChild(navLink);
}

navCreator('Home', mainPage);
navCreator('Menu', menuPage);
navCreator('Visit Us', contactPage);
mainPage();



