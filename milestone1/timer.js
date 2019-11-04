let level_1_item = document.getElementsByClassName('control-level-item_1');
let level_2_item = document.getElementsByClassName('control-level-item_2');
let level_3_item = document.getElementsByClassName('control-level-item_3');
let level_4_item = document.getElementsByClassName('control-level-item_4');
let level_5_item = document.getElementsByClassName('control-level-item_5');
let level_6_item = document.getElementsByClassName('timer_table');

let level_1_checkbox = document.getElementsByClassName('level-checkbox_1');
let level_2_checkbox = document.getElementsByClassName('level-checkbox_2');
let level_3_checkbox = document.getElementsByClassName('level-checkbox_3');
let level_4_checkbox = document.getElementsByClassName('level-checkbox_4');
let level_5_checkbox = document.getElementsByClassName('level-checkbox_5');
let level_6_checkbox = document.getElementsByClassName('level-checkbox_6');

let level_1_label = document.getElementsByClassName('level-label_1');
let level_2_label = document.getElementsByClassName('level-label_2');
let level_3_label = document.getElementsByClassName('level-label_3');
let level_4_label = document.getElementsByClassName('level-label_4');
let level_5_label = document.getElementsByClassName('level-label_5');
let level_6_label = document.getElementsByClassName('level-label_6');

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
let test_colors = ['text-grey', 'text-blue', 'text-green', 'text-yellow', 'text-lightred', 'text-purple'];
for (var i = 0; i < 6; i++) {
  let copy_data = document.getElementsByClassName('control-level-item_4')[0].cloneNode(true);
  document.getElementsByClassName("large-lines")[0].appendChild(copy_data);
}

for (var i = 0; i < 2; i++) {
  let copy_data = document.getElementsByClassName('control-level-item_5')[0].cloneNode(true);
  document.getElementsByClassName("large-lines")[1].appendChild(copy_data);
}

for (var i = 0; i < 5; i++) {
  let copy_data = level_6_item[0].cloneNode(true);
  document.getElementById("timer_table").appendChild(copy_data);
}

document.getElementsByClassName('text-red')[5].classList.add('text-red-visible');
document.getElementsByClassName('text-red')[14].classList.add('text-red-visible');
document.getElementsByClassName('text-red')[20].classList.add('text-red-visible');
document.getElementsByClassName('text-red')[25].classList.add('text-red-visible');

document.getElementsByClassName('text-clock')[5].classList.add('text-clock-visible');
document.getElementsByClassName('text-clock')[0].classList.add('text-clock-visible');
document.getElementsByClassName('text-clock')[12].classList.add('text-clock-visible');
document.getElementsByClassName('text-clock')[22].classList.add('text-clock-visible');

// END OF TEST DATA

$(function(){
    $('.toTime').combodate({
        firstItem: 'none',
        value:  '09:00',
        minuteStep: 1
    });
});
function testDropdown(){
  document.getElementsByClassName('minute')[0].onclick = function(){
    document.getElementsByClassName('hour')[0].disabled = true;
  }
  document.getElementsByClassName('minute')[0].onchange = function(){
    document.getElementsByClassName('hour')[0].disabled = false;
  }

  document.getElementsByClassName('hour')[0].onclick = function(){
    document.getElementsByClassName('minute')[0].disabled = true;
  }
  document.getElementsByClassName('hour')[0].onchange = function(){
    document.getElementsByClassName('minute')[0].disabled = false;
  }

  window.onclick = function(){
    document.getElementsByClassName('hour')[0].disabled = false;
    document.getElementsByClassName('minute')[0].disabled = false;
  }
}


window.setInterval(function(){
  testDropdown();
}, 1000);




function timerSelectThis(elem){
  if(elem.style.color != "rgb(237, 125, 50)"){
    elem.style.color = "#ED7D32";
  } else{
    elem.style.color = "white";
  }
}

function setLineGrey(elem){
  for (var i = 0; i < document.getElementsByClassName('timer_table').length; i++) {
    document.getElementsByClassName('timer_table')[i].style.background = "#262626";
  }
  elem.style.background = "#595959";
}
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

for (var i = 0; i < level_6_item.length; i++) {
  level_6_checkbox[i].setAttribute('id', 'level_6_data_checkbox_' + i);
  level_6_label[i].setAttribute('for', 'level_6_data_checkbox_' + i);
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

      document.getElementsByClassName('checkbox_4_level')[0].style.display = "none";
      document.getElementsByClassName('checkbox_5_level')[0].style.display = "none";

      isFourChecked = 1;
      isFiveChecked = 1;

      document.getElementById('level_4_checkbox').click();
      document.getElementById('level_5_checkbox').click();

      document.getElementById('level_4_checkbox').checked = false;
      document.getElementById('level_5_checkbox').checked = false;
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

      document.getElementsByClassName('checkbox_4_level')[0].style.display = "none";
      document.getElementsByClassName('checkbox_5_level')[0].style.display = "none";

      isFourChecked = 1;
      isFiveChecked = 1;

      document.getElementById('level_4_checkbox').click();
      document.getElementById('level_5_checkbox').click();

      document.getElementById('level_4_checkbox').checked = false;
      document.getElementById('level_5_checkbox').checked = false;
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

      document.getElementsByClassName('checkbox_4_level')[0].style.display = "none";
      document.getElementsByClassName('checkbox_5_level')[0].style.display = "none";


      isFourChecked = 1;
      isFiveChecked = 1;

      document.getElementById('level_4_checkbox').click();
      document.getElementById('level_5_checkbox').click();

      document.getElementById('level_4_checkbox').checked = false;
      document.getElementById('level_5_checkbox').checked = false;

    }
     isThreeChecked = 1;
  } else {
    for (var i = 0; i < level_3_item.length; i++) {
      level_3_checkbox[i].checked = false;
    }
     isThreeChecked = 0;
  }
}

let isSixChecked = 0;
document.getElementById('level_6_checkbox').onclick = function(){
  if(isSixChecked == 0){
    for (var i = 0; i < level_6_item.length; i++) {
      level_6_checkbox[i].checked = true;
    }
     isSixChecked = 1;
  } else {
    for (var i = 0; i < level_6_item.length; i++) {
      level_6_checkbox[i].checked = false;
    }
     isSixChecked = 0;
  }
}
document.getElementById('dashboardDeleteAccountCancel').onclick = function(){
  document.getElementById('dashboardDeleteModal').style.display = "none";
}
document.getElementById('dashboardDeleteAccountConfirm').onclick = function(){
  document.getElementById('dashboardDeleteModal').style.display = "none";
}
function openDeleteModal(){
  document.getElementById('dashboardDeleteModal').style.display = "flex";
}
let isFourChecked = 0;
document.getElementById('level_4_checkbox').onclick = function(){
  if(isFourChecked == 0){
    for (var i = 0; i < level_4_item.length; i++) {
      level_4_checkbox[i].checked = true;
    }
     isFourChecked = 1;
  } else {
    for (var i = 0; i < level_4_item.length; i++) {
      level_4_checkbox[i].checked = false;
    }
     isFourChecked = 0;
  }
}

let isFiveChecked = 0;
document.getElementById('level_5_checkbox').onclick = function(){
  if(isFiveChecked == 0){
    for (var i = 0; i < level_5_item.length; i++) {
      level_5_checkbox[i].checked = true;
    }
     isFiveChecked = 1;
  } else {
    for (var i = 0; i < level_5_item.length; i++) {
      level_5_checkbox[i].checked = false;
    }
     isFiveChecked = 0;
  }
}

let power_colors = ['text-grey', 'text-blue', 'text-green', 'text-yellow', 'text-lightred', 'text-purple'];
let currentColor =  0;
function powerChangeColor(button){
    for (var i = 0; i < power_colors.length; i++) {
      if(button.classList.contains(power_colors[i])){
        currentColor = i;
        break;
      }
    }
    for (var i = 0; i < power_colors.length; i++) {
      try{
        button.classList.remove(power_colors[i]);
      } catch {
        // pass
      }
    }
    if(currentColor == power_colors.length-1){
      button.classList.add(power_colors[0]);
    } else {
      button.classList.add(power_colors[currentColor+1]);
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


function offPress(elem){
  fourLevelChecked();
  if(isFourLevelChecked){
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
  if(isFourLevelChecked){
    elem.children[0].style.display = "none";
    document.getElementById('onPreloader').style.display = "block";
    setTimeout(onSleepChecked, 1000);
    // setTimeout(onSleepError, 1000);
  } else {
    alert('Please select levels / device to control');
  }

}

let temp_a = 0;
for (var i = 16; i < 33; i++) {
  let copy_data = document.getElementsByClassName('temp-item')[0].cloneNode(true);
  document.getElementsByClassName("dropdown-temp")[0].appendChild(copy_data);
  document.getElementsByClassName('temp-item-a')[temp_a].innerText = i + '°C ';
  temp_a += 1;
}
document.getElementsByClassName('temp-item')[17].style.display = "none";

$(".dropdown-temp li a").click(function(){
  $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="temp-caret"></span>');
  $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
});

let type_a = 0;
let type_array = ['Last on', 'Cold', 'Hot', 'Auto', 'Dry', 'Fan'];
for (var i = 0; i < 6; i++) {
  let copy_data = document.getElementsByClassName('type-item')[0].cloneNode(true);
  document.getElementsByClassName("dropdown-type")[0].appendChild(copy_data);
  document.getElementsByClassName('type-item-a')[type_a].innerText = type_array[type_a];
  type_a += 1;
}
document.getElementsByClassName('type-item')[6].style.display = "none";

$(".dropdown-type li a").click(function(){
  $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="type-caret"></span>');
  $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
});

let fan_a = 0;
let fan_array = ['Fan 1', 'Fan 2', 'Fan 3', 'Fan A'];
for (var i = 0; i < 4; i++) {
  let copy_data = document.getElementsByClassName('fan-item')[0].cloneNode(true);
  document.getElementsByClassName("dropdown-fan")[0].appendChild(copy_data);
  document.getElementsByClassName('fan-item-a')[fan_a].innerText = fan_array[fan_a];
  fan_a += 1;
}
document.getElementsByClassName('fan-item')[4].style.display = "none";

$(".dropdown-fan li a").click(function(){
  $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="fan-caret"></span>');
  $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
});

$(".dropdown-power li a").click(function(){
  $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="power-caret"></span>');
  $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
});
$(".dropdown-power1 li a").click(function(){
  $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="power1-caret"></span>');
  $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
});


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
function timerCheckOff(elem) {
  if(elem.innerText == "Off"){
    document.getElementsByClassName('level-dropdowns-timer')[0].style.display = "none";
  } else {
    document.getElementsByClassName('level-dropdowns-timer')[0].style.display = "flex";
  }
  if(elem.innerText == "Idle"){
    if(document.getElementById('power1Dropdown').innerText == "Idle "){
        alert('Please select at least one control action');
    }
  }
}
function checkIfIdle(elem) {
  if(elem.innerText == "Idle"){
    if(document.getElementById('powerDropdown').innerText == "Idle "){
        alert('Please select at least one control action');
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

function offPress_1(elem){
  fiveLevelChecked();
  if(isFiveLevelChecked){
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
  if(isFiveLevelChecked){
    elem.children[0].style.display = "none";
    document.getElementById('onPreloader_1').style.display = "block";
    setTimeout(onSleepChecked_1, 1000);
    // setTimeout(onSleepError_1, 1000);
  } else {
    alert('Please select levels / device to control');
  }

}

document.getElementById('payModalCancel').onclick = function(){
  document.getElementById('levelPayModal').style.display = "none";
}
document.getElementById('payModalConfirm').onclick = function(){
  document.getElementById('levelPayModal').style.display = "none";
  // Link here
  window.open("#");
}
function removePayAlert(){
  document.getElementById('levelPayModal').style.display = "none";
}
function checkPay(elem){
  for (var i = 0; i < document.getElementsByClassName('level-checkbox-small').length; i++) {
    if(document.getElementsByClassName('level-checkbox-small')[i] == elem){
        if(document.getElementsByClassName('level-dollar')[i].children[0].classList.contains('text-red-visible')){
          document.getElementById('levelPayModal').style.display = "flex";
          var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
          if(width <= 1160){
            setTimeout(removePayAlert, 5000);
          }
        }
    }
  }
  if (elem.classList.contains('level-checkbox_1')) {
    clearAllMarked(1);
    document.getElementsByClassName('control-level')[1].style.display = "none";
    document.getElementsByClassName('control-level')[2].style.display = "none";

    document.getElementsByClassName('control-large-levels')[0].style.display = "none";
    document.getElementsByClassName('control-large-levels')[1].style.display = "none";

    document.getElementsByClassName('checkbox_4_level')[0].style.display = "none";
    document.getElementsByClassName('checkbox_5_level')[0].style.display = "none";

    isFourChecked = 1;
    isFiveChecked = 1;

    document.getElementById('level_4_checkbox').click();
    document.getElementById('level_5_checkbox').click();

    document.getElementById('level_4_checkbox').checked = false;
    document.getElementById('level_5_checkbox').checked = false;

  }
  if (elem.classList.contains('level-checkbox_2')) {
    document.getElementsByClassName('control-level')[2].style.display = "none";

    isOneChecked = 1;
    document.getElementById('level_1_checkbox').click();
    document.getElementById('level_1_checkbox').checked = false;

    clearAllMarked(2);
    document.getElementsByClassName('control-level')[2].style.display = "none";

    document.getElementsByClassName('control-large-levels')[0].style.display = "none";
    document.getElementsByClassName('control-large-levels')[1].style.display = "none";

    document.getElementsByClassName('checkbox_4_level')[0].style.display = "none";
    document.getElementsByClassName('checkbox_5_level')[0].style.display = "none";

    isFourChecked = 1;
    isFiveChecked = 1;

    document.getElementById('level_4_checkbox').click();
    document.getElementById('level_5_checkbox').click();

    document.getElementById('level_4_checkbox').checked = false;
    document.getElementById('level_5_checkbox').checked = false;

  }
  if (elem.classList.contains('level-checkbox_3')) {
    isOneChecked = 1;
    document.getElementById('level_1_checkbox').click();
    document.getElementById('level_1_checkbox').checked = false;

    isTwoChecked = 1;
    document.getElementById('level_2_checkbox').click();
    document.getElementById('level_2_checkbox').checked = false;

    clearAllMarked(3);

    document.getElementsByClassName('control-large-levels')[0].style.display = "none";
    document.getElementsByClassName('control-large-levels')[1].style.display = "none";

    document.getElementsByClassName('checkbox_4_level')[0].style.display = "none";
    document.getElementsByClassName('checkbox_5_level')[0].style.display = "none";

    isFourChecked = 1;
    isFiveChecked = 1;

    document.getElementById('level_4_checkbox').click();
    document.getElementById('level_5_checkbox').click();

    document.getElementById('level_4_checkbox').checked = false;
    document.getElementById('level_5_checkbox').checked = false;

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

  document.getElementsByClassName('control-after')[0].style.display = "none";
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

  document.getElementsByClassName('control-after')[0].style.display = "none";

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

  document.getElementsByClassName('control-after')[0].style.display = "none";

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

}
function setOrange_1(elem){
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

  isFourChecked = 1;
  isFiveChecked = 1;

  document.getElementById('level_4_checkbox').click();
  document.getElementById('level_5_checkbox').click();

  document.getElementById('level_4_checkbox').checked = false;
  document.getElementById('level_5_checkbox').checked = false;



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

  document.getElementsByClassName('checkbox_4_level')[0].style.display = "none";
  document.getElementsByClassName('checkbox_5_level')[0].style.display = "none";

  for (var i = 0; i < document.getElementsByClassName('selectedLevel_1').length; i++) {
    document.getElementsByClassName('selectedLevel_1')[i].style.color = "white";
  }
  elem.style.color = "#ED7D32";

  for (var i = 0; i < document.getElementsByClassName('selectedLevel_1').length; i++) {
    if(document.getElementsByClassName('selectedLevel_1')[i] == elem){
        if(document.getElementsByClassName('level-dollar')[i].children[0].classList.contains('text-red-visible')){
          document.getElementById('levelPayModal').style.display = "flex";
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

    document.getElementsByClassName('control-after')[0].style.display = "none";

    hideLastLevel();
  }
}
function setOrange_2(elem){

  document.getElementById('tab_2_value').innerText = elem.innerText;
  document.getElementById('tab_2_value').setAttribute('style', 'visibility: visible; !important');

  document.getElementById('tab_3_value').setAttribute('style', 'visibility: hidden; !important');

  document.getElementById('tab_3_value').classList.remove('tabActive');
  document.getElementById('tab_1_value').classList.remove('tabActive');
  document.getElementById('tab_2_value').classList.add('tabActive');

  document.getElementById('tab_2_span').setAttribute('style', 'visibility: hidden; !important');
  document.getElementById('tab_1_span').setAttribute('style', 'visibility: visible; !important');

  clearAllMarked(3);

  isFourChecked = 1;
  isFiveChecked = 1;

  document.getElementById('level_4_checkbox').click();
  document.getElementById('level_5_checkbox').click();

  document.getElementById('level_4_checkbox').checked = false;
  document.getElementById('level_5_checkbox').checked = false;

  isTwoChecked = 1;
  document.getElementById('level_2_checkbox').checked = 'true';
  document.getElementById('level_2_label').click();

  isThreeChecked = 1;
  document.getElementById('level_3_checkbox').checked = 'true';
  document.getElementById('level_3_label').click();


  document.getElementsByClassName('control-level')[2].style.display = "block";

  document.getElementsByClassName('control-large-levels')[0].style.display = "none";
  document.getElementsByClassName('control-large-levels')[1].style.display = "none";

  document.getElementsByClassName('checkbox_4_level')[0].style.display = "none";
  document.getElementsByClassName('checkbox_5_level')[0].style.display = "none";

  for (var i = 0; i < document.getElementsByClassName('selectedLevel_2').length; i++) {
    document.getElementsByClassName('selectedLevel_2')[i].style.color = "white";
  }
  elem.style.color = "#ED7D32";

  for (var i = 0; i < document.getElementsByClassName('selectedLevel_2').length; i++) {
    if(document.getElementsByClassName('selectedLevel_2')[i] == elem){
        if(document.getElementsByClassName('level-dollar-1')[i].children[0].classList.contains('text-red-visible')){
          document.getElementById('levelPayModal').style.display = "flex";
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

    document.getElementsByClassName('control-after')[0].style.display = "none";
    hideLastLevel();
  }
}
function setOrange_3(elem){

  document.getElementById('tab_3_value').innerText = elem.innerText;
  document.getElementById('tab_3_value').setAttribute('style', 'visibility: visible; !important');
  document.getElementById('tab_2_span').setAttribute('style', 'visibility: visible; !important');

  document.getElementById('tab_3_value').classList.add('tabActive');
  document.getElementById('tab_1_value').classList.remove('tabActive');
  document.getElementById('tab_2_value').classList.remove('tabActive');

  isThreeChecked = 1;
  document.getElementById('level_3_checkbox').checked = 'true';
  document.getElementById('level_3_label').click();

  isFourChecked = 1;
  isFiveChecked = 1;

  document.getElementById('level_4_checkbox').click();
  document.getElementById('level_5_checkbox').click();

  document.getElementById('level_4_checkbox').checked = false;
  document.getElementById('level_5_checkbox').checked = false;

  document.getElementsByClassName('control-large-levels')[0].style.display = "block";
  document.getElementsByClassName('control-large-levels')[1].style.display = "block";

  document.getElementsByClassName('checkbox_4_level')[0].style.display = "block";
  document.getElementsByClassName('checkbox_5_level')[0].style.display = "block";

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
    document.getElementsByClassName('control-after')[0].style.display = "block";


  }
}

function removeInfoAlert(){
  document.getElementsByClassName('timer-alert')[0].style.display = "none";
}

document.getElementById('level_6_label').click();

document.getElementsByClassName('control-level')[1].style.display = "none";
document.getElementsByClassName('control-level')[2].style.display = "none";
document.getElementsByClassName('control-large-levels')[0].style.display = "none";
document.getElementsByClassName('control-large-levels')[1].style.display = "none";




var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
if(width <= 1160){
  for (var i = 0; i < document.getElementsByClassName('timer-select-item').length; i++) {
     document.getElementsByClassName('timer-select-item')[i].innerText = document.getElementsByClassName('timer-select-item')[i].innerText.slice(0, 1);
  }
}


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
