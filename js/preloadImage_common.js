function preLoadImage (e) {
    let classes = e.className.replace('imgBeforeLoaded', '');
    e.setAttribute('class', classes + " imgAnimation");
    // hide loading icon
    if (e.parentElement.querySelector('.loadingIcon')) {
        e.parentElement.querySelector('.loadingIcon').remove();
    }
};