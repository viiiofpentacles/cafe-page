function menuPage() {
    const menuContent = document.createElement('div');
    menuContent.id = 'menu-page';
    const menuHeader = document.createElement('h1');
    menuHeader.textContent = 'Menu';
    menuContent.appendChild(menuHeader);

    const cardContainer = document.createElement('div');
    menuContent.appendChild(cardContainer);

    cardContainer.style.display = 'grid';
    cardContainer.style.gridTemplateColumns = '1fr 1fr';
    cardContainer.style.gap = '2rem';
    cardContainer.style.overflow = 'auto';

    document.getElementById('content').appendChild(menuContent);
    
    cardContainer.appendChild(menuItem('Floral Tea', `Our award-winning floral teas are brewed with sustainably-sourced flowers in support of our local flower farmers. The flowers are picked fresh daily, and every day a unique flavor is offered. Please approach our counter staff for the flowers of the day.`));
    cardContainer.appendChild(menuItem('Floral Coffee', 'Introduced by popular demand, msqt now offers a coffee counterpart to the house-favorite floral tea. Available hot or iced, the floral coffee is sure to be an effective pick-me-up to start off your day. Flowers used vary daily.'));
    cardContainer.appendChild(menuItem('Cheesecake', 'Patrons to the cafe enjoy the harmony of the smoky, crumbly biscuit base and the creamy cheese. Whole cakes have to be ordered at least one day in advance.'));
}

const menuItem = (name, desc) => {
    const menuCard = document.createElement('div');
    menuCard.style.paddingBottom = '1rem';
    menuCard.classList.add('menu-card');
    const foodName = document.createElement('h3');
    foodName.textContent = name;
    const foodDesc = document.createElement('div');
    foodDesc.textContent = desc;

    menuCard.appendChild(foodName);
    menuCard.appendChild(foodDesc);
    
    return menuCard;
}





export {menuPage};