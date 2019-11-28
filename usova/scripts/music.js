var position = 0;
var method = 'play';

function pauseAll(){
  for (var i = 0; i < document.getElementsByClassName('musicStop').length; i++) {
    method = 'pause';
    document.getElementsByClassName('musicStop')[i].style.display = "none";
    document.getElementsByClassName('musicPlay')[i].style.display = "block";
    document.getElementsByClassName('musicHidden')[i][method]();
  }
}

function playMusic(elem){
  pauseAll();
  for (var i = 0; i < document.getElementsByClassName('musicPlay').length; i++) {
    if(elem == document.getElementsByClassName('musicPlay')[i]){
      position = i;
    }
  }
  method = 'play';
  document.getElementsByClassName('musicStop')[position].style.display = "block";
  document.getElementsByClassName('musicPlay')[position].style.display = "none";
  document.getElementsByClassName('musicHidden')[position][method]();
}
function stopMusic(elem){
  for (var i = 0; i < document.getElementsByClassName('musicStop').length; i++) {
    if(elem == document.getElementsByClassName('musicStop')[i]){
      position = i;
    }
  }
  method = 'pause';
  document.getElementsByClassName('musicStop')[position].style.display = "none";
  document.getElementsByClassName('musicPlay')[position].style.display = "block";
  document.getElementsByClassName('musicHidden')[position][method]();
}


var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1600,
  speedAsDuration: true
});


function closeMenu(){
  document.getElementById('header-checkbox').click();
}

var modal = document.getElementById('modal');

document.getElementById('imagesMore').onclick = function(){
  modal.style.display = "flex";
}
modal.onclick = function(){
  modal.style.display = "none";
}