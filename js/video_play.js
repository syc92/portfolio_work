// play and pause
let video = document.querySelectorAll('.video_play');
let play = document.querySelectorAll('.video_play_playIcon');
video.forEach((e)=>{
    e.addEventListener('click', ()=>{
        if (e.paused === false) {
            e.pause();
            e.parentElement.querySelector('.video_play_playIcon').setAttribute('src', 'icon/icon_play.png');
            e.parentElement.querySelector('.video_play_playIcon').setAttribute('style', 'box-shadow: 0px 1px 8px 0px rgb(0, 0, 0, 0.4); opacity: 1;');
        } else {
            e.play();
            e.parentElement.querySelector('.video_play_playIcon').setAttribute('src', 'icon/icon_pause.png');
            e.parentElement.querySelector('.video_play_playIcon').setAttribute('style', 'box-shadow: unset; opacity: 0.4;');
        }
    })
})
play.forEach((e)=>{
    e.addEventListener('click', ()=>{
        if (e.parentElement.querySelector('.video_play').paused === false) {
            e.parentElement.querySelector('.video_play').pause();
            e.setAttribute('src', 'icon/icon_play.png');
            e.parentElement.querySelector('.video_play_playIcon').setAttribute('style', 'box-shadow: 0px 1px 8px 0px rgb(0, 0, 0, 0.4); opacity: 1;');
            e.parentElement.querySelector('.video_play_playIcon').addEventListener('mouseover', ()=>{
                e.parentElement.querySelector('.video_play_playIcon').setAttribute('style', 'box-shadow: 0px 1px 8px 0px rgb(0, 0, 0, 0.4); opacity: 1;');
            })
            e.parentElement.querySelector('.video_play_playIcon').addEventListener('mouseleave', ()=>{
                e.parentElement.querySelector('.video_play_playIcon').setAttribute('style', 'box-shadow: 0px 1px 8px 0px rgb(0, 0, 0, 0.4); opacity: 1;');    
            })
        } else {
            e.parentElement.querySelector('.video_play').play();
            e.setAttribute('src', 'icon/icon_pause.png');
            e.parentElement.querySelector('.video_play_playIcon').setAttribute('style', 'box-shadow: unset; opacity: 0.4;');
            e.parentElement.querySelector('.video_play_playIcon').addEventListener('mouseover', ()=>{
                e.parentElement.querySelector('.video_play_playIcon').setAttribute('style', 'box-shadow: unset; opacity: 0.4; opacity: 1;');    
            })
            e.parentElement.querySelector('.video_play_playIcon').addEventListener('mouseleave', ()=>{
                e.parentElement.querySelector('.video_play_playIcon').setAttribute('style', 'box-shadow: unset; opacity: 0.4; opacity: 0.4;');    
            })
        }
    })
})