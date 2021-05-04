let logo = document.querySelector('#logo img');
const logoClassName = logo.className;
const logoAnimeSec = 1000;
let rotateOngoing = false;

// rotation animation
let resetAnimeWhenDone = ()=> {
    setTimeout(() => {
        logo.setAttribute('class', logoClassName);
        rotateOngoing = false;
    }, logoAnimeSec);
}
document.addEventListener("DOMContentLoaded", function() {
    if (rotateOngoing===false) {
        rotateOngoing = true;
        logo.setAttribute('class', logoClassName + ' logoAnimation');
        resetAnimeWhenDone();
    }
});

// hover
logo.addEventListener('mouseover', function(){
    if (rotateOngoing===false) {
        logo.setAttribute('class', logoClassName + ' logoMouseover');
        console.log(logo)
    }
})
logo.addEventListener('mouseleave', function(){
    if (rotateOngoing===false) {
        logo.setAttribute('class', logoClassName + ' logoMouseleave');
        console.log(logo)
    }
})
