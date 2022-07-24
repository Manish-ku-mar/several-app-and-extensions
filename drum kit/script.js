// const clap=new Audio('music/clap.wav');
// const boom=new Audio('music/boom.wav');
// const hihat=new Audio('music/hihat.wav');
// const kick=new Audio('music/kick.wav');
// const tom=new Audio('music/tom.wav');
// const openhat=new Audio('music/openhat.wav');
// const ride=new Audio('music/ride.wav');
// const snare=new Audio('music/snare.wav');
// const tink=new Audio('music/tink.wav');
const keys=this.document.querySelector('.key');

window.addEventListener('keydown',function(e){
    const audio=this.document.querySelector(`audio[data-key="${e.keyCode}"]`)
    console.log(audio);
    if(!audio)//stop function from running
        return;
    audio.currentTime = 0;
    audio.play();
    const key=document.querySelectorAll('.key');
    keys.classList.add('playing');
    
});

function removeTransition(e){
    console.log(e);
        
}
keys.forEach(key => addEventListener('transitionend',removeTransition));
