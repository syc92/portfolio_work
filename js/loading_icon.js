let buffering = document.querySelectorAll('.imgBuffering');
buffering.forEach((e)=>{
    if (e.className.includes('imgBeforeLoaded')) {
        let loadingIcon = document.createElement('img');
        loadingIcon.setAttribute('src', "icon/icon_loading.png");
        loadingIcon.setAttribute('class', "loadingIcon");
        e.parentElement.appendChild(loadingIcon);
    }
});