function closeBanner() {
  var elem = document.querySelector('.simplifai-banner');
  elem.classList.toggle('hide')
}

function showInfo() {
  var elem = document.querySelector('.simplifai-info');
  elem.classList.toggle('info-show')
}

function pauseVideo(){
  document.querySelector('.video').pause(); 
}

function showVideo() {
  var elem = document.querySelector('.video-modal');
  elem.classList.toggle('show')
}
var timerVar = 0;
var banner = document.querySelector('.simplifai-banner');
var timerId = setInterval(function() {
  if(timerVar < 7){
    timerVar++
  }else{
    banner.classList.toggle('hide')
    clearInterval(timerId);
  }
}, 1000);