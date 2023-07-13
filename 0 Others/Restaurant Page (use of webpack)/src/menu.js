export function loadMenu(){

    //main body
    const containerMenu = document.createElement('div');
    containerMenu.classList.add('container');
    containerMenu.setAttribute('id','container-menu');
    content.appendChild(containerMenu);
    
    //menu item 1
    const menuItem1 = document.createElement('div');
    menuItem1.classList.add('menu-item');
    containerMenu.appendChild(menuItem1);
    //item image
    const menuItem1Img = document.createElement('img');
    menuItem1Img.src="matcha.jpg";
    menuItem1.appendChild(menuItem1Img);
    //item title
    const menuItem1Title = document.createElement('div');
    menuItem1Title.classList.add('item-title');
    menuItem1Title.textContent="Matcha";
    menuItem1.appendChild(menuItem1Title);
    //item description
    const menuItem1Desc = document.createElement('div');
    menuItem1Desc.classList.add('item-description');
    menuItem1Desc.textContent="The signature, the classic, the best.";
    menuItem1.appendChild(menuItem1Desc);
    //item price
    const menuItem1Price = document.createElement('div');
    menuItem1Price.classList.add('item-price');
    menuItem1Price.textContent="RM 12";
    menuItem1.appendChild(menuItem1Price);

    //menu item 2
    const menuItem2 = document.createElement('div');
    menuItem2.classList.add('menu-item');
    containerMenu.appendChild(menuItem2);
    //item image
    const menuItem2Img = document.createElement('img');
    menuItem2Img.src="houjicha.jpg";
    menuItem2.appendChild(menuItem2Img);
    //item title
    const menuItem2Title = document.createElement('div');
    menuItem2Title.classList.add('item-title');
    menuItem2Title.textContent="Houjicha";
    menuItem2.appendChild(menuItem2Title);
    //item description
    const menuItem2Desc = document.createElement('div');
    menuItem2Desc.classList.add('item-description');
    menuItem2Desc.textContent="For the hipsters.";
    menuItem2.appendChild(menuItem2Desc);
    //item price
    const menuItem2Price = document.createElement('div');
    menuItem2Price.classList.add('item-price');
    menuItem2Price.textContent="RM 12";
    menuItem2.appendChild(menuItem2Price);

    //menu item 3
    const menuItem3 = document.createElement('div');
    menuItem3.classList.add('menu-item');
    containerMenu.appendChild(menuItem3);
    //item image
    const menuItem3Img = document.createElement('img');
    menuItem3Img.src="cake.jpg";
    menuItem3.appendChild(menuItem3Img);
    //item title
    const menuItem3Title = document.createElement('div');
    menuItem3Title.classList.add('item-title');
    menuItem3Title.textContent="Matcha Cake";
    menuItem3.appendChild(menuItem3Title);
    //item description
    const menuItem3Desc = document.createElement('div');
    menuItem3Desc.classList.add('item-description');
    menuItem3Desc.textContent="Sweet yet refreshing.";
    menuItem3.appendChild(menuItem3Desc);
    //item price
    const menuItem3Price = document.createElement('div');
    menuItem3Price.classList.add('item-price');
    menuItem3Price.textContent="RM 6";
    menuItem3.appendChild(menuItem3Price);

    //menu item 4
    const menuItem4 = document.createElement('div');
    menuItem4.classList.add('menu-item');
    containerMenu.appendChild(menuItem4);
    //item image
    const menuItem4Img = document.createElement('img');
    menuItem4Img.src="puff.jpg";
    menuItem4.appendChild(menuItem4Img);
    //item title
    const menuItem4Title = document.createElement('div');
    menuItem4Title.classList.add('item-title');
    menuItem4Title.textContent="Puff";
    menuItem4.appendChild(menuItem4Title);
    //item description
    const menuItem4Desc = document.createElement('div');
    menuItem4Desc.classList.add('item-description');
    menuItem4Desc.textContent="The puff is amazing.";
    menuItem4.appendChild(menuItem4Desc);
    //item price
    const menuItem4Price = document.createElement('div');
    menuItem4Price.classList.add('item-price');
    menuItem4Price.textContent="RM 12";
    menuItem4.appendChild(menuItem4Price);
}