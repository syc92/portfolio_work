let count = 0;
let cardNumber = 0;

function preLoadImage (e) {
    // tell how many cards
    let cardNumberCount = document.querySelectorAll('.projectCard');
    if (cardNumberCount.length > cardNumber) {
        cardNumber = cardNumberCount.length;
    }

    e.setAttribute('class', e.className + " imgLoaded");
    count += 1;
    if (count === cardNumber) {
        loadImage();
    }
};

function loadImage () {
    let imageSectionsToShow = document.querySelectorAll('.imgLoaded');
    imageSectionsToShow.forEach((e)=>{
        let classes = e.className.replace('imgBeforeLoaded', '');
        e.setAttribute('class', classes + " imgAnimation");
        // hide loading icon
        if (e.parentElement.querySelector('.loadingIcon')) {
            e.parentElement.querySelector('.loadingIcon').remove();
        }
    });
}