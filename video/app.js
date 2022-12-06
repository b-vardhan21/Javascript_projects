const btn = document.querySelector('.switch-btn');
const video = document.querySelector('.video-conatiner');

btn.addEventListener('click', function(){
    if(!btn.classList.contains('slide')){
        btn.classList.add('slide');
        video.pause();
    }
    else{
        btn.classList.remove('slide');
        video.play();
    }
});

const preloader = document.querySelector('./preloader');

window.addEventListener('load', function(){
    preloader.classList.add('hide-preloader');
})