let count = 0;
function preLoadImage (e) {
    e.parentElement.setAttribute('class', e.parentElement.className + " imgLoaded");
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
    })
}