import {mainPage} from './mainpage.js';
import {menuPage, addMenuItem} from './menupage.js';
import {contactPage} from './contactpage.js';
import './style.css';
import homeImage from './images/amphora.png';
import menuImage from './images/amphora(1).png';
import contactImage from './images/vase.png';

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

function imageInserter(pageID, image){
    const page = document.getElementById(pageID);
    const imageCreator = document.createElement('img');
    imageCreator.src = image;
    imageCreator.style.height = '100px';
    imageCreator.style.width  = '100px';
    imageCreator.style.display = 'block';
    imageCreator.style.margin = '0 auto';
    imageCreator.style.padding = '3rem';
    page.appendChild(imageCreator);
}

navCreator('Home', () => {
        mainPage();
        imageInserter('main-page', homeImage);
    }
);
navCreator('Menu', () => {
        menuPage();
        addMenuItem();
        imageInserter('menu-page', menuImage);
    }
);
navCreator('Visit Us', () => {
        contactPage();
        imageInserter('contact-page', contactImage);
    }
);


mainPage();
imageInserter('main-page', homeImage);



