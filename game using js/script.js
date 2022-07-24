score=0;
cross=true;
audio=new Audio('music.mp3');
audiogo = new Audio('gameover.wav');
setTimeout(() => {
    audio.play()
},100);
document.onkeydown=function(e){
    console.log("key code is:",e.keyCode)
    if(e.keyCode==38)
    {
        dino=document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(()=>{
            dino.classList.remove('animateDino')
        },700);
    }
    if(e.keyCode==39)
    {
        dino=document.querySelector('.dino');
        dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left=dinoX + 200 + "px";
    }
    if(e.keyCode==37)
    {
        dino=document.querySelector('.dino');
        dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left=(dinoX - 200) + "px";
    }
}
setInterval(()=>{
    dino=document.querySelector('.dino');
    gameOver=document.querySelector('.gameOver');
    obstacle=document.querySelector('.obstacle');

    dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));

    ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));

    offsetX=Math.abs(ox-dx);
    offsetY=Math.abs(oy-dy);
    if(offsetX<113 && offsetY<52){
        gameOver.style.visibility='visible';
        obstacle.classList.remove('obstacleAni')
        audiogo.play();
        setTimeout(()=>{
            audio.pause();
            audiogo.pause();
        },1000);
    }
    else if(offsetX<145&& cross)
    {
        score+=10;
        updateScore(score);
        cross=false;
        setTimeout(()=>{
            cross=true;
        },1000);
        setTimeout(()=>{
            aniDur=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
            if(aniDur>2)
            newDur=(aniDur - 0.1);
            obstacle.style.animationDuration= newDur + 's';
            console.log('new animation is',newDur)
        },500);

    }

},10);

function updateScore(score){
    scoreCount=document.querySelector('.scoreCount');
    scoreCount.innerHTML="Your Score is:" + score
}