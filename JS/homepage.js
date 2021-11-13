
getImageNames = () => {
    
}

createAccordionImages = () => {
    const img = document.createElement("img");
    img.src = "/PhotoSharingWebApp/WebApp/Images/DSCF2588.JPG" 
    img.classList.add("images-btn")
    
    document.getElementById("accordion-image").appendChild(img);
}


createAccordionImages();



