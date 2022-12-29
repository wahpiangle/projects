export function loadContact(){
    const container = document.createElement('div');
    container.classList.add('container');
    content.appendChild(container);

    //address line
    const address = document.createElement('div');
    address.classList.add('address');
    container.appendChild(address);

    const addressTitle = document.createElement('div');
    addressTitle.classList.add('address-title');
    addressTitle.innerHTML="Address:";
    address.appendChild(addressTitle);
    
    const addressText = document.createElement('div');
    addressText.classList.add('address-text');
    addressText.innerHTML ="123, Epic Street, Swaggers Town, Nowhere, Mars";
    address.appendChild(addressText);

    //contact number line
    const contactDetails = document.createElement('div');
    contactDetails.classList.add('contact-details');
    container.appendChild(contactDetails);

    const whatsappImage = document.createElement('img');
    whatsappImage.classList.add('whatsapp');
    whatsappImage.src="whatsapp.png";
    contactDetails.appendChild(whatsappImage);    

    const contactNumber = document.createElement('div');
    contactNumber.classList.add('contact-number');
    contactNumber.innerHTML = "+12 123-33-445"
    contactDetails.appendChild(contactNumber);
    
    //map
    const map = document.createElement('div');
    map.classList.add('map');
    container.appendChild(map);
    const googleMap = document.createElement('iframe');
    googleMap.classList.add('google-map');
    googleMap.src ="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2110.362868267553!2d101.68554659871425!3d3.138310411983474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smy!4v1672215903064!5m2!1sen!2smy";
    googleMap.setAttribute("loading", "lazy");
    googleMap.setAttribute("referrerpolicy", "no-referrer-when-downgrade");
    map.appendChild(googleMap);
}