let level_1_item = document.getElementsByClassName('control-level-item_1');
let level_2_item = document.getElementsByClassName('control-level-item_2');
let level_3_item = document.getElementsByClassName('control-level-item_3');
let level_4_item = document.getElementsByClassName('control-level-item_4');
let level_5_item = document.getElementsByClassName('control-level-item_5');

let level_1_checkbox = document.getElementsByClassName('level-checkbox_1');
let level_2_checkbox = document.getElementsByClassName('level-checkbox_2');
let level_3_checkbox = document.getElementsByClassName('level-checkbox_3');
let level_4_checkbox = document.getElementsByClassName('level-checkbox_4');
let level_5_checkbox = document.getElementsByClassName('level-checkbox_5');

let level_1_label = document.getElementsByClassName('level-label_1');
let level_2_label = document.getElementsByClassName('level-label_2');
let level_3_label = document.getElementsByClassName('level-label_3');
let level_4_label = document.getElementsByClassName('level-label_4');
let level_5_label = document.getElementsByClassName('level-label_5');

// TEST DATA

for (var i = 0; i < 6; i++) {
  let copy_data = level_1_item[i].cloneNode(true);
  document.getElementsByClassName("control-level-items")[0].appendChild(copy_data);
}

for (var i = 0; i < 15; i++) {
  let copy_data = level_2_item[i].cloneNode(true);
  document.getElementsByClassName("control-level-items")[1].appendChild(copy_data);
}

for (var i = 0; i < 4; i++) {
  let copy_data = level_3_item[i].cloneNode(true);
  document.getElementsByClassName("control-level-items")[2].appendChild(copy_data);
}


document.getElementsByClassName('text-red')[5].classList.add('text-red-visible');
document.getElementsByClassName('text-red')[14].classList.add('text-red-visible');
document.getElementsByClassName('text-red')[20].classList.add('text-red-visible');
document.getElementsByClassName('text-red')[25].classList.add('text-red-visible');




// END OF TEST DATA

// Ids for levels checkboxes/labels
for (var i = 0; i < level_1_item.length; i++) {
  level_1_checkbox[i].setAttribute('id', 'level_1_data_checkbox_' + i);
  level_1_label[i].setAttribute('for', 'level_1_data_checkbox_' + i);
}
for (var i = 0; i < level_2_item.length; i++) {
  level_2_checkbox[i].setAttribute('id', 'level_2_data_checkbox_' + i);
  level_2_label[i].setAttribute('for', 'level_2_data_checkbox_' + i);
}
for (var i = 0; i < level_3_item.length; i++) {
  level_3_checkbox[i].setAttribute('id', 'level_3_data_checkbox_' + i);
  level_3_label[i].setAttribute('for', 'level_3_data_checkbox_' + i);
}

for (var i = 0; i < document.getElementsByClassName('control-level-item_4').length; i++) {
  level_4_checkbox[i].setAttribute('id', 'level_4_data_checkbox_' + i);
  level_4_label[i].setAttribute('for', 'level_4_data_checkbox_' + i);
}

for (var i = 0; i < document.getElementsByClassName('control-level-item_5').length; i++) {
  level_5_checkbox[i].setAttribute('id', 'level_5_data_checkbox_' + i);
  level_5_label[i].setAttribute('for', 'level_5_data_checkbox_' + i);
}



let isOneChecked = 0;
document.getElementById('level_1_checkbox').onclick = function(){
  if(isOneChecked == 0){
    for (var i = 0; i < level_1_item.length; i++) {
      level_1_checkbox[i].checked = true;
      clearAllMarked(1);
      document.getElementsByClassName('control-level')[1].style.display = "none";
      document.getElementsByClassName('control-level')[2].style.display = "none";

      document.getElementsByClassName('control-large-levels')[0].style.display = "none";
      document.getElementsByClassName('control-large-levels')[1].style.display = "none";

    }
     isOneChecked = 1;
  } else {
    for (var i = 0; i < level_1_item.length; i++) {
      level_1_checkbox[i].checked = false;
    }
     isOneChecked = 0;
  }
}

let isTwoChecked = 0;
document.getElementById('level_2_checkbox').onclick = function(){
  if(isTwoChecked == 0){
    for (var i = 0; i < level_2_item.length; i++) {
      level_2_checkbox[i].checked = true;
      clearAllMarked(2);
      document.getElementsByClassName('control-level')[2].style.display = "none";

      document.getElementsByClassName('control-large-levels')[0].style.display = "none";
      document.getElementsByClassName('control-large-levels')[1].style.display = "none";

    }
     isTwoChecked = 1;
  } else {
    for (var i = 0; i < level_2_item.length; i++) {
      level_2_checkbox[i].checked = false;
    }
     isTwoChecked = 0;
  }
}

let isThreeChecked = 0;
document.getElementById('level_3_checkbox').onclick = function(){
  if(isThreeChecked == 0){
    for (var i = 0; i < level_3_item.length; i++) {
      level_3_checkbox[i].checked = true;
      clearAllMarked(3);

      document.getElementsByClassName('control-large-levels')[0].style.display = "none";
      document.getElementsByClassName('control-large-levels')[1].style.display = "none";


    }
     isThreeChecked = 1;
  } else {
    for (var i = 0; i < level_3_item.length; i++) {
      level_3_checkbox[i].checked = false;
    }
     isThreeChecked = 0;
  }
}





let currentColor =  0;
function powerChangeColor(button){
    let thisI = 0;
    for (let i = 0; i < document.getElementsByClassName('serverIco').length; i++) {
    	if(document.getElementsByClassName('serverIco')[i] == button){
        thisI = i;
      }
    }

    let thisColor = 0;
    if(giveColors[thisI].includes('text-grey')){
      thisColor = 'text-grey';
    }
    if(giveColors[thisI].includes('text-blue')){
      thisColor = 'text-blue';
    }
    if(giveColors[thisI].includes('text-green')){
      thisColor = 'text-green';
    }
    if(giveColors[thisI].includes('text-yellow')){
      thisColor = 'text-yellow';
    }
    if(giveColors[thisI].includes('text-lightred')){
      thisColor = 'text-lightred';
    }
    if(giveColors[thisI].includes('text-purple')){
      thisColor = 'text-purple';
    }

    if(button.classList.contains('text-grey')){
      button.classList.remove('text-grey');
      button.classList.add(thisColor);
    } else {
      button.classList.remove(thisColor);
      button.classList.add('text-grey');
    }
    equalColor()
}

function clearEqualColor(){
  for (var i = 0; i < document.getElementsByClassName('level-temp-icon').length; i++) {
    for (var j = 0; j < 6; j++) {
      document.getElementsByClassName('level-temp-icon')[i].children[j].style.display = "none";
    }
  }
}
function equalColor(){
  clearEqualColor();
  for (var i = 0; i < document.getElementsByClassName('level-temp-icon').length; i++) {
    if(document.getElementsByClassName('serverIco')[i].classList.contains('text-grey')){
      document.getElementsByClassName('level-temp-icon')[i].children[0].style.display = "block";
    }
    if(document.getElementsByClassName('serverIco')[i].classList.contains('text-blue')){
      document.getElementsByClassName('level-temp-icon')[i].children[1].style.display = "block";
    }
    if(document.getElementsByClassName('serverIco')[i].classList.contains('text-green')){
      document.getElementsByClassName('level-temp-icon')[i].children[2].style.display = "block";
    }
    if(document.getElementsByClassName('serverIco')[i].classList.contains('text-yellow')){
      document.getElementsByClassName('level-temp-icon')[i].children[3].style.display = "block";
    }
    if(document.getElementsByClassName('serverIco')[i].classList.contains('text-lightred')){
      document.getElementsByClassName('level-temp-icon')[i].children[4].style.display = "block";
    }
    if(document.getElementsByClassName('serverIco')[i].classList.contains('text-purple')){
      document.getElementsByClassName('level-temp-icon')[i].children[5].style.display = "block";
    }
  }
}
equalColor();

function offSleepClear() {
  document.getElementById('offPreloader').style.display = "none";
  document.getElementById('offPreloaderChecked').style.display = "none";
  document.getElementById('offPreloaderError').style.display = "none";
  document.getElementById('offPreloaderText').style.display = "flex";

  for (var i = 0; i < document.getElementsByClassName('level-checkbox_4').length; i++) {
    document.getElementsByClassName('level-checkbox_4')[i].checked = false;
  }
    document.getElementById('level_4_checkbox').checked = false;
    isFourChecked = 0;
}

function offSleepChecked() {
  document.getElementById('offPreloader').style.display = "none";
  document.getElementById('offPreloaderChecked').style.display = "flex";
  setTimeout(offSleepClear, 3000);
}
function offSleepError() {
  document.getElementById('offPreloader').style.display = "none";
  document.getElementById('offPreloaderError').style.display = "flex";
  setTimeout(offSleepClear, 3000);
}

isFourLevelChecked = false;
isFiveLevelChecked = false;

function fourLevelChecked(){
  for (var i = 0; i < document.getElementsByClassName('level-checkbox_4').length; i++) {
    if(document.getElementsByClassName('level-checkbox_4')[i].checked){
      isFourLevelChecked = true;
      break;
    } else{
      isFourLevelChecked = false;
    }
  }
}
function fiveLevelChecked(){
  for (var i = 0; i < document.getElementsByClassName('level-checkbox_5').length; i++) {
    if(document.getElementsByClassName('level-checkbox_5')[i].checked){
      isFiveLevelChecked = true;
      break;
    } else{
      isFiveLevelChecked = false;
    }
  }
}


function isAnyChecked(){
  for (var i = 0; i < document.getElementsByClassName('level-checkbox_1').length; i++) {
    if(document.getElementsByClassName('level-checkbox_1')[i].checked){
      return true;
    }
  }
  for (var i = 0; i < document.getElementsByClassName('level-checkbox_2').length; i++) {
    if(document.getElementsByClassName('level-checkbox_2')[i].checked){
      return true;
    }
  }
  for (var i = 0; i < document.getElementsByClassName('level-checkbox_3').length; i++) {
    if(document.getElementsByClassName('level-checkbox_3')[i].checked){
      return true;
    }
  }
}

function offPress(elem){
  fourLevelChecked();
  if(isFourLevelChecked || isAnyChecked()){
    elem.children[0].style.display = "none";
    document.getElementById('offPreloader').style.display = "block";
    setTimeout(offSleepChecked, 1000);
    // setTimeout(offSleepError, 1000);
  } else {
    alert('Please select levels / device to control');
  }

}

function onSleepClear() {
  document.getElementById('onPreloader').style.display = "none";
  document.getElementById('onPreloaderChecked').style.display = "none";
  document.getElementById('onPreloaderError').style.display = "none";
  document.getElementById('onPreloaderText').style.display = "flex";

  for (var i = 0; i < document.getElementsByClassName('level-checkbox_4').length; i++) {
    document.getElementsByClassName('level-checkbox_4')[i].checked = false;
  }
  document.getElementById('level_4_checkbox').checked = false;
  isFourChecked = 0;
}

function onSleepChecked() {
  document.getElementById('onPreloader').style.display = "none";
  document.getElementById('onPreloaderChecked').style.display = "flex";
  setTimeout(onSleepClear, 3000);
}
function onSleepError() {
  document.getElementById('onPreloader').style.display = "none";
  document.getElementById('onPreloaderError').style.display = "flex";
  setTimeout(onSleepClear, 3000);
}

function onPress(elem){
  fourLevelChecked();
  if(isFourLevelChecked || isAnyChecked()){
    elem.children[0].style.display = "none";
    document.getElementById('onPreloader').style.display = "block";
    setTimeout(onSleepChecked, 1000);
    // setTimeout(onSleepError, 1000);
  } else {
    alert('Please select levels / device to control');
  }

}


function offSleepClear_1() {
  document.getElementById('offPreloader_1').style.display = "none";
  document.getElementById('offPreloaderChecked_1').style.display = "none";
  document.getElementById('offPreloaderError_1').style.display = "none";
  document.getElementById('offPreloaderText_1').style.display = "flex";

  for (var i = 0; i < document.getElementsByClassName('level-checkbox_5').length; i++) {
    document.getElementsByClassName('level-checkbox_5')[i].checked = false;
  }
  document.getElementById('level_5_checkbox').checked = false;
  isFiveChecked = 0;
}

function offSleepChecked_1() {
  document.getElementById('offPreloader_1').style.display = "none";
  document.getElementById('offPreloaderChecked_1').style.display = "flex";
  setTimeout(offSleepClear_1, 3000);
}
function offSleepError_1() {
  document.getElementById('offPreloader_1').style.display = "none";
  document.getElementById('offPreloaderError_1').style.display = "flex";
  setTimeout(offSleepClear_1, 3000);
}

function offPress_1(elem){
  fiveLevelChecked();
  if(isFiveLevelChecked || isAnyChecked()){
    elem.children[0].style.display = "none";
    document.getElementById('offPreloader_1').style.display = "block";
    setTimeout(offSleepChecked_1, 1000);
    // setTimeout(offSleepError_1, 1000);
  } else {
    alert('Please select levels / device to control');
  }

}

function onSleepClear_1() {
  document.getElementById('onPreloader_1').style.display = "none";
  document.getElementById('onPreloaderChecked_1').style.display = "none";
  document.getElementById('onPreloaderError_1').style.display = "none";
  document.getElementById('onPreloaderText_1').style.display = "flex";

  for (var i = 0; i < document.getElementsByClassName('level-checkbox_5').length; i++) {
    document.getElementsByClassName('level-checkbox_5')[i].checked = false;
  }
  document.getElementById('level_5_checkbox').checked = false;
  isFiveChecked = 0;
}

function onSleepChecked_1() {
  document.getElementById('onPreloader_1').style.display = "none";
  document.getElementById('onPreloaderChecked_1').style.display = "flex";
  setTimeout(onSleepClear_1, 3000);
}
function onSleepError_1() {
  document.getElementById('onPreloader_1').style.display = "none";
  document.getElementById('onPreloaderError_1').style.display = "flex";
  setTimeout(onSleepClear_1, 3000);
}

function onPress_1(elem){
  fiveLevelChecked();
  if(isFiveLevelChecked || isAnyChecked()){
    elem.children[0].style.display = "none";
    document.getElementById('onPreloader_1').style.display = "block";
    setTimeout(onSleepChecked_1, 1000);
    // setTimeout(onSleepError_1, 1000);
  } else {
    alert('Please select levels / device to control');
  }

}

function removePayAlert(){
  document.getElementById('levelPayModal').style.display = "none";
}
function checkPay(elem){
  for (var i = 0; i < document.getElementsByClassName('level-checkbox-small').length; i++) {
    if(document.getElementsByClassName('level-checkbox-small')[i] == elem){
        if(document.getElementsByClassName('level-dollar')[i].children[0].classList.contains('text-red-visible')){
          var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
          if(width <= 1160){
            setTimeout(removePayAlert, 5000);
          }
        }
    }
  }
  if (elem.classList.contains('level-checkbox_1')) {
    isFourChecked = 1;
    isFiveChecked = 1;

    clearAllMarked(1);
    document.getElementsByClassName('control-level')[1].style.display = "none";
    document.getElementsByClassName('control-level')[2].style.display = "none";

    document.getElementsByClassName('control-large-levels')[0].style.display = "none";
    document.getElementsByClassName('control-large-levels')[1].style.display = "none";

  }
  if (elem.classList.contains('level-checkbox_2')) {
    isFourChecked = 1;
    isFiveChecked = 1;

    document.getElementsByClassName('control-level')[2].style.display = "none";

    isOneChecked = 1;
    document.getElementById('level_1_checkbox').click();
    document.getElementById('level_1_checkbox').checked = false;

    clearAllMarked(2);
    document.getElementsByClassName('control-level')[2].style.display = "none";

    document.getElementsByClassName('control-large-levels')[0].style.display = "none";
    document.getElementsByClassName('control-large-levels')[1].style.display = "none";


  }
  if (elem.classList.contains('level-checkbox_3')) {
    isFourChecked = 1;
    isFiveChecked = 1;

    isOneChecked = 1;
    document.getElementById('level_1_checkbox').click();
    document.getElementById('level_1_checkbox').checked = false;

    isTwoChecked = 1;
    document.getElementById('level_2_checkbox').click();
    document.getElementById('level_2_checkbox').checked = false;

    document.getElementsByClassName('control-large-levels')[0].style.display = "none";
    document.getElementsByClassName('control-large-levels')[1].style.display = "none";


    clearAllMarked(3);

  }
}

function clearAllMarked(level){
  if(level == 1){
    for (var i = 0; i < document.getElementsByClassName('selectedLevel_1').length; i++) {
      document.getElementsByClassName('selectedLevel_1')[i].style.color = "white";
    }
  } else if (level == 2){
    for (var i = 0; i < document.getElementsByClassName('selectedLevel_2').length; i++) {
      document.getElementsByClassName('selectedLevel_2')[i].style.color = "white";
    }
  } else {
    for (var i = 0; i < document.getElementsByClassName('selectedLevel_3').length; i++) {
      document.getElementsByClassName('selectedLevel_3')[i].style.color = "white";
    }
  }
}
function showFirstLevel(){
  document.getElementById('tab_1_value').setAttribute('style', 'visibility: hidden; !important');
  document.getElementById('tab_2_value').setAttribute('style', 'visibility: hidden; !important');
  document.getElementById('tab_3_value').setAttribute('style', 'visibility: hidden; !important');


  document.getElementById('tab_0_value').classList.add('tabActive');
  document.getElementById('tab_1_value').classList.remove('tabActive');
  document.getElementById('tab_2_value').classList.remove('tabActive');
  document.getElementById('tab_3_value').classList.remove('tabActive');

  document.getElementById('tab_0_span').setAttribute('style', 'visibility: hidden; !important');
  document.getElementById('tab_1_span').setAttribute('style', 'visibility: hidden; !important');
  document.getElementById('tab_2_span').setAttribute('style', 'visibility: hidden; !important');

  clearAllMarked(2);
  clearAllMarked(3);
  document.getElementsByClassName('control-level')[1].style.display = "block";

  document.getElementsByClassName('control-level')[2].style.display = "none";
  document.getElementsByClassName('control-large-levels')[0].style.display = "none";
  document.getElementsByClassName('control-large-levels')[1].style.display = "none";

  document.getElementsByClassName('checkbox_4_level')[0].style.display = "none";
  document.getElementsByClassName('checkbox_5_level')[0].style.display = "none";

  document.getElementsByClassName('control-level')[0].style.display = "block";
  document.getElementsByClassName('control-level')[1].style.display = "none";
  document.getElementsByClassName('control-level')[2].style.display = "none";


  document.getElementsByClassName('control-before')[0].style.display = "block";

  document.getElementsByClassName('control-wrapper')[0].style.background = "black";

  hideLastLevel();
}
function showSecondLevel(){
  document.getElementById('tab_2_value').setAttribute('style', 'visibility: hidden; !important');

  document.getElementById('tab_3_value').setAttribute('style', 'visibility: hidden; !important');

  document.getElementById('tab_3_value').classList.remove('tabActive');
  document.getElementById('tab_1_value').classList.add('tabActive');
  document.getElementById('tab_2_value').classList.remove('tabActive');

  document.getElementById('tab_2_span').setAttribute('style', 'visibility: hidden; !important');
  document.getElementById('tab_1_span').setAttribute('style', 'visibility: hidden; !important');

  clearAllMarked(3);
  document.getElementsByClassName('control-level')[2].style.display = "block";

  document.getElementsByClassName('control-large-levels')[0].style.display = "none";
  document.getElementsByClassName('control-large-levels')[1].style.display = "none";

  document.getElementsByClassName('checkbox_4_level')[0].style.display = "none";
  document.getElementsByClassName('checkbox_5_level')[0].style.display = "none";

  document.getElementsByClassName('control-level')[0].style.display = "none";
  document.getElementsByClassName('control-level')[1].style.display = "block";
  document.getElementsByClassName('control-level')[2].style.display = "none";

  document.getElementsByClassName('control-before')[0].style.display = "block";
  document.getElementsByClassName('control-wrapper')[0].style.background = "black";

  hideLastLevel();
}
function showThirdLevel(){
  document.getElementById('tab_1_value').setAttribute('style', 'visibility: visible; !important');

  document.getElementById('tab_2_value').setAttribute('style', 'visibility: visible; !important');

  document.getElementById('tab_3_value').setAttribute('style', 'visibility: hidden; !important');

  document.getElementById('tab_3_value').classList.remove('tabActive');
  document.getElementById('tab_1_value').classList.remove('tabActive');
  document.getElementById('tab_2_value').classList.add('tabActive');

  document.getElementById('tab_2_span').setAttribute('style', 'visibility: hidden; !important');
  document.getElementById('tab_1_span').setAttribute('style', 'visibility: visible; !important');

  document.getElementsByClassName('control-level')[2].style.display = "block";

  document.getElementsByClassName('control-large-levels')[0].style.display = "none";
  document.getElementsByClassName('control-large-levels')[1].style.display = "none";

  document.getElementsByClassName('checkbox_4_level')[0].style.display = "none";
  document.getElementsByClassName('checkbox_5_level')[0].style.display = "none";

  document.getElementsByClassName('control-level')[0].style.display = "none";
  document.getElementsByClassName('control-level')[1].style.display = "none";
  document.getElementsByClassName('control-level')[2].style.display = "block";

  document.getElementsByClassName('control-before')[0].style.display = "block";
  document.getElementsByClassName('control-wrapper')[0].style.background = "black";

  hideLastLevel();
}
function hideLastLevel(){
  document.getElementsByClassName('control-level-title-4')[0].classList.remove('control-level-title-last');
  document.getElementsByClassName('control-level-title-5')[0].classList.remove('control-level-title-last');

  document.getElementsByClassName('header-tabs')[0].classList.remove('header-tabs-last');
  document.getElementsByClassName('control-wrapper')[0].classList.remove('control-wrapper-last');
  document.getElementsByClassName('control-large-levels')[0].classList.remove('control-large-levels-last');
  document.getElementsByClassName('control-large-levels')[1].classList.remove('control-large-levels-last');
  document.getElementsByClassName('control-large-level')[1].classList.remove('control-large-level-last');
  document.getElementsByClassName('control-large-level')[0].classList.remove('control-large-level-last');
  document.getElementsByClassName('control-column')[1].classList.remove('control-column-last');

  document.getElementsByClassName('control-column')[0].classList.remove('control-column-last_4');

  document.getElementsByClassName('sign_5')[0].classList.remove('sign_5-last');
  document.getElementsByClassName('img_5')[0].classList.remove('img_5-last');
  document.getElementsByClassName('subsign_5')[0].classList.remove('subsign_5-last');
}
function setOrange_1(elem){
  isFourChecked = 1;
  isFiveChecked = 1;

  var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  document.getElementById('tab_1_value').innerText = elem.innerText;

  document.getElementById('tab_1_value').setAttribute('style', 'visibility: visible; !important');

  document.getElementById('tab_2_value').setAttribute('style', 'visibility: hidden; !important');
  document.getElementById('tab_3_value').setAttribute('style', 'visibility: hidden; !important');

  document.getElementById('tab_3_value').classList.remove('tabActive');
  document.getElementById('tab_1_value').classList.add('tabActive');
  document.getElementById('tab_2_value').classList.remove('tabActive');
  document.getElementById('tab_0_value').classList.remove('tabActive');

  document.getElementById('tab_0_span').setAttribute('style', 'visibility: visible; !important');
  document.getElementById('tab_1_span').setAttribute('style', 'visibility: hidden; !important');
  document.getElementById('tab_2_span').setAttribute('style', 'visibility: hidden; !important');

  clearAllMarked(2);
  clearAllMarked(3);

  isOneChecked = 1;
  document.getElementById('level_1_checkbox').checked = 'true';
  document.getElementById('level_1_label').click();

  isTwoChecked = 1;
  document.getElementById('level_2_checkbox').checked = 'true';
  document.getElementById('level_2_label').click();


  document.getElementsByClassName('control-level')[1].style.display = "block";

  document.getElementsByClassName('control-level')[2].style.display = "none";
  document.getElementsByClassName('control-large-levels')[0].style.display = "none";
  document.getElementsByClassName('control-large-levels')[1].style.display = "none";


  for (var i = 0; i < document.getElementsByClassName('selectedLevel_1').length; i++) {
    document.getElementsByClassName('selectedLevel_1')[i].style.color = "white";
  }
  elem.style.color = "#ED7D32";

  for (var i = 0; i < document.getElementsByClassName('selectedLevel_1').length; i++) {
    if(document.getElementsByClassName('selectedLevel_1')[i] == elem){
        if(document.getElementsByClassName('level-dollar')[i].children[0].classList.contains('text-red-visible')){
          // pass
        }
    }
  }
  if(width <= 1160){
    setTimeout(removePayAlert, 5000);
    document.getElementsByClassName('control-level')[0].style.display = "none";
    document.getElementsByClassName('control-level')[1].style.display = "block";
    document.getElementsByClassName('control-level')[2].style.display = "none";

    document.getElementsByClassName('control-before')[0].style.display = "block";
    document.getElementsByClassName('control-wrapper')[0].style.background = "black";
    hideLastLevel();
  }
}
function setOrange_2(elem){
  isFourChecked = 1;
  isFiveChecked = 1;

  document.getElementById('tab_2_value').innerText = elem.innerText;
  document.getElementById('tab_2_value').setAttribute('style', 'visibility: visible; !important');

  document.getElementById('tab_3_value').setAttribute('style', 'visibility: hidden; !important');

  document.getElementById('tab_3_value').classList.remove('tabActive');
  document.getElementById('tab_1_value').classList.remove('tabActive');
  document.getElementById('tab_2_value').classList.add('tabActive');

  document.getElementById('tab_2_span').setAttribute('style', 'visibility: hidden; !important');
  document.getElementById('tab_1_span').setAttribute('style', 'visibility: visible; !important');

  clearAllMarked(3);

  isTwoChecked = 1;
  document.getElementById('level_2_checkbox').checked = 'true';
  document.getElementById('level_2_label').click();

  isThreeChecked = 1;
  document.getElementById('level_3_checkbox').checked = 'true';
  document.getElementById('level_3_label').click();


  document.getElementsByClassName('control-level')[2].style.display = "block";

  document.getElementsByClassName('control-large-levels')[0].style.display = "none";
  document.getElementsByClassName('control-large-levels')[1].style.display = "none";


  for (var i = 0; i < document.getElementsByClassName('selectedLevel_2').length; i++) {
    document.getElementsByClassName('selectedLevel_2')[i].style.color = "white";
  }
  elem.style.color = "#ED7D32";

  for (var i = 0; i < document.getElementsByClassName('selectedLevel_2').length; i++) {
    if(document.getElementsByClassName('selectedLevel_2')[i] == elem){
        if(document.getElementsByClassName('level-dollar-1')[i].children[0].classList.contains('text-red-visible')){
          // pass
        }
    }
  }
  var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  if(width <= 1160){
    setTimeout(removePayAlert, 5000);
    document.getElementsByClassName('control-level')[0].style.display = "none";
    document.getElementsByClassName('control-level')[1].style.display = "none";
    document.getElementsByClassName('control-level')[2].style.display = "block";

    document.getElementsByClassName('control-before')[0].style.display = "block";
    document.getElementsByClassName('control-wrapper')[0].style.background = "black";
    hideLastLevel();
  }
}
function setOrange_3(elem){
  isFourChecked = 1;
  isFiveChecked = 1;

  document.getElementById('tab_3_value').innerText = elem.innerText;
  document.getElementById('tab_3_value').setAttribute('style', 'visibility: visible; !important');
  document.getElementById('tab_2_span').setAttribute('style', 'visibility: visible; !important');

  document.getElementById('tab_3_value').classList.add('tabActive');
  document.getElementById('tab_1_value').classList.remove('tabActive');
  document.getElementById('tab_2_value').classList.remove('tabActive');

  isThreeChecked = 1;
  document.getElementById('level_3_checkbox').checked = 'true';
  document.getElementById('level_3_label').click();

  document.getElementById('tab_3_value').classList.add('tabActive');
  document.getElementById('tab_1_value').classList.remove('tabActive');
  document.getElementById('tab_2_value').classList.remove('tabActive');


  document.getElementsByClassName('control-large-levels')[0].style.display = "flex";
  document.getElementsByClassName('control-large-levels')[1].style.display = "flex";


  for (var i = 0; i < document.getElementsByClassName('selectedLevel_3').length; i++) {
    document.getElementsByClassName('selectedLevel_3')[i].style.color = "white";
  }
  elem.style.color = "#ED7D32";

  for (var i = 0; i < document.getElementsByClassName('selectedLevel_3').length; i++) {
    if(document.getElementsByClassName('selectedLevel_3')[i] == elem){
        if(document.getElementsByClassName('level-dollar-2')[i].children[0].classList.contains('text-red-visible')){
          document.getElementById('levelPayModal').style.display = "flex";
        }
    }
  }
  var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  if(width <= 1160){
    setTimeout(removePayAlert, 5000);
    document.getElementsByClassName('control-before')[0].style.display = "none";
    document.getElementsByClassName('control-wrapper')[0].style.background = "#1F2935";


    document.getElementsByClassName('control-level-title-4')[0].classList.add('control-level-title-last');
    document.getElementsByClassName('control-level-title-5')[0].classList.add('control-level-title-last');

    document.getElementsByClassName('header-tabs')[0].classList.add('header-tabs-last');
    document.getElementsByClassName('control-wrapper')[0].classList.add('control-wrapper-last');
    document.getElementsByClassName('control-large-levels')[0].classList.add('control-large-levels-last');
    document.getElementsByClassName('control-large-levels')[1].classList.add('control-large-levels-last');
    document.getElementsByClassName('control-large-level')[1].classList.add('control-large-level-last');
    document.getElementsByClassName('control-large-level')[0].classList.add('control-large-level-last');
    document.getElementsByClassName('control-column')[1].classList.add('control-column-last');

    document.getElementsByClassName('control-column')[0].classList.add('control-column-last_4');

    document.getElementsByClassName('sign_5')[0].classList.add('sign_5-last');
    document.getElementsByClassName('img_5')[0].classList.add('img_5-last');
    document.getElementsByClassName('subsign_5')[0].classList.add('subsign_5-last');


  }
}
function lampOn(elem){
  thisI = 0;
  for (var i = 0; i < document.getElementsByClassName('levelLampDefault').length; i++) {
    if(document.getElementsByClassName('levelLampDefault')[i] == elem){
      thisI = i;
    }
  }
  document.getElementsByClassName('levelLampYellow')[thisI].style.display = "block";
  document.getElementsByClassName('levelLampDefault')[thisI].style.display = "none";
}
function lampOff(elem){
  thisI = 0;
  for (var i = 0; i < document.getElementsByClassName('levelLampYellow').length; i++) {
    if(document.getElementsByClassName('levelLampYellow')[i] == elem){
      thisI = i;
    }
  }
  document.getElementsByClassName('levelLampYellow')[thisI].style.display = "none";
  document.getElementsByClassName('levelLampDefault')[thisI].style.display = "block";
}
document.getElementsByClassName('control-level')[1].style.display = "none";
document.getElementsByClassName('control-level')[2].style.display = "none";
document.getElementsByClassName('control-large-levels')[0].style.display = "none";
document.getElementsByClassName('control-large-levels')[1].style.display = "none";


function tempItemA_1(elem){
  for (var i = 0; i < document.getElementsByClassName('temp-item-a_1').length; i++) {
    document.getElementsByClassName('temp-item-a_1')[i].style.color = "black";
  }
  elem.style.color = "orange";
}
function tempItemA_2(elem){
  for (var i = 0; i < document.getElementsByClassName('temp-item-a_2').length; i++) {
    document.getElementsByClassName('temp-item-a_2')[i].style.color = "black";
  }
  elem.style.color = "orange";
}
function tempItemA_3(elem){
  for (var i = 0; i < document.getElementsByClassName('temp-item-a_3').length; i++) {
    document.getElementsByClassName('temp-item-a_3')[i].style.color = "black";
  }
  elem.style.color = "orange";
}
