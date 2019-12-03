var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1600,
  speedAsDuration: true
});


function closeMenu(){
  document.getElementById('header-checkbox').click();
}

var modalImages = document.getElementById('modalImages');

document.getElementById('imagesMore').onclick = function(){
  modalImages.style.display = "flex";
}
modalImages.onclick = function(){
  modalImages.style.display = "none";
}


var modalMusic = document.getElementById('modalMusic');
var modalMusicContent = document.getElementById('modalMusicContent');

document.getElementById('musicMore').onclick = function(){
  modalMusic.style.display = "flex";
}
modalMusic.onclick = function(){
  modalMusic.style.display = "none";
}

var modalVideo = document.getElementById('modalVideo');
var modalVideoContent = document.getElementById('modalVideoContent');

document.getElementById('videoMore').onclick = function(){
  modalVideo.style.display = "flex";
}
modalVideo.onclick = function(){
  modalVideo.style.display = "none";
}
lightbox.option({
  'resizeDuration': 20,
  'wrapAround': false,
  'fadeDuration': 300,
})
