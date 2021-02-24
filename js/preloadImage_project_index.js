let count = 0;
function preLoadImage (e) {
    e.setAttribute('class', e.className + " imgLoaded");
    count += 1;
    if (count === 11) {
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