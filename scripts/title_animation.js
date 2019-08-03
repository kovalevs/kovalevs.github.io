let containers = document.querySelectorAll('#infoTitle');

for (let container of containers) {
  let words = container.innerHTML.split(/\s+/)
  										 .filter(word => word)
  										 .map(word => '<span>' + word + ' </span>');

  let fakeContainer = document.createElement('p');
  fakeContainer.style.width = "auto";
  fakeContainer.style['max-width'] = "none";
  fakeContainer.style['min-width'] = "none";
  fakeContainer.style.visibility = "hidden";
  document.body.appendChild(fakeContainer);

  let subContainers = [];

  let buffer = "";
  for (let span of words) {
    fakeContainer.innerHTML = buffer + span;

    if (fakeContainer.offsetWidth >= container.offsetWidth) {
      subContainers.push(buffer);
      buffer = "";
    }
    buffer += span;
  }

  if (buffer) {
  	subContainers.push(buffer);
    buffer = "";
  }

  container.innerHTML = "";
  for (let subContainer of subContainers) {
  	container.innerHTML += '<span>' + subContainer + '</span>';
  }
};

let titleText = document.getElementById('infoTitle');

let delayCount = 0.5;
for (let i=0; i<titleText.childElementCount; i++){
	titleText.children[i].style.animationDelay = delayCount + "s";
	titleText.children[i].style.WebkitAnimationDelay = delayCount + "s";
	delayCount += 0.1;
}
