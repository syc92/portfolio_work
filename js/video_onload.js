let videos = document.querySelectorAll('video');
videos.forEach((e)=>{
    // when loaded, show media
    e.addEventListener('loadeddata', ()=>{
        if (e.readyState >= 2) {
            let classes = e.className.replace('imgBeforeLoaded', '');
            e.setAttribute('class', classes + " imgAnimation");
            // hide loading icon
            if (e.parentElement.querySelector('.loadingIcon')) {
                e.parentElement.querySelector('.loadingIcon').remove();
            }
        }
    })
})