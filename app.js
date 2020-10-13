
addEventListener('keydown',(event)=>{
    let audio   =   document.querySelector(`audio[data-key="${event.keyCode}"]`);
    let key     =   document.querySelector(`.keys__key[data-key="${event.keyCode}"]`);
    
    if(!audio) return;

    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
    key.addEventListener('transitionend',()=>{
        key.classList.remove('playing');
    });
});


