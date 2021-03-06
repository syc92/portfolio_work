let menuIcon = document.querySelector('#menuIcon');
let closeIcon = document.querySelector('#close');
let menu = document.querySelector('#menu');

// fixed when scroll to position
// let menuIconPosition = menuIcon.offsetTop;
let menuIconPosition = document.querySelector('#mainContent section:nth-child(1)').offsetHeight; // use black bg section instead
let pageEdge = window.innerWidth * 0.05;
let pLineHeight = window.innerWidth / 80 * 1.75;

    // only fixed in screens width larger than 760
    if (window.innerWidth > 760) {
        // for reload
        if (pageYOffset > (menuIconPosition + pageEdge)) {
            if (menuIcon.className.includes(" contentBlockFixed contentBlockFixedTopLeft")==false) {
                menuIcon.setAttribute('class', menuIcon.className + " contentBlockFixed contentBlockFixedTopLeft")
            }
        } else {
            menuIcon.setAttribute('class', menuIcon.className.replace(" contentBlockFixed contentBlockFixedTopLeft", ''))
        }
    }
    // for scroll
    document.addEventListener('scroll', ()=>{
        if (window.innerWidth > 760) {
            if (pageYOffset > (menuIconPosition + pageEdge)) {
                if (menuIcon.className.includes("contentBlockFixed contentBlockFixedTopLeft")==false) {
                    menuIcon.setAttribute('class', menuIcon.className + " contentBlockFixed contentBlockFixedTopLeft")
                }
            } else {
                menuIcon.setAttribute('class', menuIcon.className.replace(" contentBlockFixed contentBlockFixedTopLeft", ''))
            }
        }
    })
    // for resize, update the variable
    window.addEventListener('resize', ()=>{
        if (window.innerWidth > 760) {
            menuIconPosition = document.querySelector('#mainContent section:nth-child(1)').offsetHeight;
            pageEdge = window.innerWidth * 0.05;
            if (pageYOffset > (menuIconPosition + pageEdge)) {
                if (menuIcon.className.includes(" contentBlockFixed contentBlockFixedTopLeft")==false) {
                    menuIcon.setAttribute('class', menuIcon.className + " contentBlockFixed contentBlockFixedTopLeft")
                }
            } else {
                menuIcon.setAttribute('class', menuIcon.className.replace(" contentBlockFixed contentBlockFixedTopLeft", ''))
            }
        } else {
            if (menuIcon.className.includes(" contentBlockFixed contentBlockFixedTopLeft")) {
                menuIcon.setAttribute('class', menuIcon.className.replace(" contentBlockFixed contentBlockFixedTopLeft", ""))
            }
        }
    })

// show menu
menuIcon.addEventListener('click', ()=>{
    menu.setAttribute('class', menu.className.replace('displayNone', 'contentBlockHLayoutStretchSaround'))
    menu.querySelector('#menuList').setAttribute('class', menu.querySelector('#menuList').className.replace('menuFadeOut', 'menuFadeIn'))
    document.querySelector('body').setAttribute('style', 'overflow: hidden');
})
// close menu
closeIcon.addEventListener('click', ()=>{
    setTimeout(() => {
        menu.setAttribute('class', menu.className.replace('contentBlockHLayoutStretchSaround', 'displayNone'))
        // set background color back to normal after actual closed
        menu.setAttribute('style', 'background-color: white');
    }, 219);
    menu.querySelector('#menuList').setAttribute('class', menu.querySelector('#menuList').className.replace('menuFadeIn', 'menuFadeOut'))
    document.querySelector('body').setAttribute('style', 'overflow: unset');
    // background color fade out when close
    menu.setAttribute('style', 'background-color: rgb(255, 255, 255, 0)');
})

// jump to top
let menuTitle = document.querySelector('#menuTitle');
menuTitle.addEventListener('click', ()=>{
    // close menu directly
    menu.setAttribute('class', menu.className.replace('contentBlockHLayoutStretchSaround', 'displayNone'))
    document.querySelector('body').setAttribute('style', 'overflow: unset');
    // scoll
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    });
})

// jump to section
let nav = document.querySelector('#navTop');
let navHeight = nav.offsetHeight;

function scrollToTarget (tag, target) {
    tag.addEventListener('click', ()=>{
        // close menu directly
        menu.setAttribute('class', menu.className.replace('contentBlockHLayoutStretchSaround', 'displayNone'))
        document.querySelector('body').setAttribute('style', 'overflow: unset');


        // scroll to target
        window.scrollTo({
            top: target.offsetTop + pLineHeight * 4.5 - pageEdge - pLineHeight / 8,
            left: 0,
            behavior: "smooth",
        })
    })
}
function updateTagStyle (tag, target) {
    document.addEventListener('scroll', ()=>{
        if (window.pageYOffset >= target.offsetTop && window.pageYOffset <= (target.offsetTop + target.offsetHeight)) {
            tag.setAttribute('class', tag.className.replace('aInternalNormal', 'aInternalSelected'));
        } else {
            tag.setAttribute('class', tag.className.replace('aInternalSelected', 'aInternalNormal'));
        }
        // for the case the last section is not tall enough
        if (document.body.offsetHeight === window.pageYOffset + window.innerHeight) {
            let targetFinal = document.querySelector(".menuLastItem");
            if (targetFinal.className.includes('aInternalNormal')) {
                document.querySelectorAll('#menu .aInternalSelected').forEach((e)=>{
                    e.setAttribute('class', e.className.replace('aInternalSelected', 'aInternalNormal'));
                })
                targetFinal.setAttribute('class', targetFinal.className.replace('aInternalNormal', 'aInternalSelected'));
            }
        }
    })
}
function menuBehavior (tag, target) {
    scrollToTarget(tag, target);
    updateTagStyle(tag, target);
}

let allTag = document.querySelectorAll('.tag');
let allTarget = document.querySelectorAll('.target');
for (i=0; i<allTag.length; i++) {
    let tag = allTag[i];
    let target = allTarget[i];
    menuBehavior(tag, target);
}


// if (window.pageYOffset >= (projectDescription.offsetTop - navHeight*2) && window.pageYOffset < (projectDescription.offsetTop + projectDescription.offsetHeight - navHeight*2)) {
//     tagDescription.setAttribute('class', tagDescription.className.replace('aInternalNormal', 'aInternalSelected'));
// } else {
//     tagDescription.setAttribute('class', tagDescription.className.replace('aInternalSelected', 'aInternalNormal'));
// }