export function loadHomepage(){
    //appending the container
    const container = document.createElement('div');
    container.classList.add('container');
    content.appendChild(container);

    //append the title
    const containerTitle = document.createElement('div');
    containerTitle.classList.add('container-title');
    containerTitle.innerHTML = 'A description about the page/matcha.'+ '<br>' +'It is amazing.';
    container.appendChild(containerTitle);

    //append the image
    const containerImage = document.createElement('img');
    containerImage.classList.add('container-image');
    containerImage.src = 'logo.png';
    container.appendChild(containerImage);

    //append the CTA
    const containerCTA = document.createElement('div');
    containerCTA.classList.add('container-cta');
    containerCTA.textContent = 'Order online or visit us now!';
    container.appendChild(containerCTA);

}
