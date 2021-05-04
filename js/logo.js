let logo = document.querySelector('#logo img');
const logoClassName = logo.className;
const logoAnimeSec = 2000;
let animeOngoing = false;
let resetAnimeWhenDone = ()=> {
    setTimeout(() => {
        logo.setAttribute('class', logoClassName);
        animeOngoing = false;
    }, logoAnimeSec);
}
document.addEventListener("DOMContentLoaded", function() {
    if (animeOngoing===false) {
        animeOngoing = true;
        logo.setAttribute('class', logoClassName + ' logoAnimation');
        resetAnimeWhenDone();
    }
});
logo.addEventListener('mouseover', function(){
    if (animeOngoing===false) {
        animeOngoing = true;
        logo.setAttribute('class', logoClassName + ' logoAnimation');
        resetAnimeWhenDone();
    }
})
