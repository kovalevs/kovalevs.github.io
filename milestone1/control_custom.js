let level_4_item = document.getElementsByClassName('control-level-item_4');
let level_5_item = document.getElementsByClassName('control-level-item_5');

let level_4_checkbox = document.getElementsByClassName('level-checkbox_4');
let level_5_checkbox = document.getElementsByClassName('level-checkbox_5');

let level_4_label = document.getElementsByClassName('level-label_4');
let level_5_label = document.getElementsByClassName('level-label_5');

// TEST DATA

let test_colors = ['text-grey', 'text-blue', 'text-green', 'text-yellow', 'text-lightred', 'text-purple'];
for (var i = 0; i < 6; i++) {
  let copy_data = document.getElementsByClassName('control-level-item_4')[0].cloneNode(true);
  document.getElementsByClassName("large-lines")[0].appendChild(copy_data);
}

for (var i = 0; i < 2; i++) {
  let copy_data = document.getElementsByClassName('control-level-item_5')[0].cloneNode(true);
  document.getElementsByClassName("large-lines")[1].appendChild(copy_data);
}

for (var i = 1; i < 6; i++) {
  document.getElementsByClassName('serverIco')[i].classList.add(test_colors[i]);
  document.getElementsByClassName('serverIco')[i].classList.remove(test_colors[0]);
}


document.getElementsByClassName('level_4_alert')[1].classList.add('level-alert-red');
document.getElementsByClassName('level_4_alert')[4].classList.add('level-alert-red');


test_heartcolor_arr = ['heart_yellow', 'heart_green', 'heart_orange', 'heart_red', 'heart_purple', 'heart_darkred'];
for (var i = 0; i < 6; i++) {
  document.getElementsByClassName('level_4-heart')[i].classList.add(test_heartcolor_arr[i]);
  if(i!=0){
    document.getElementsByClassName('level_4-heart')[i].children[1].classList.remove('iconVisible');
    document.getElementsByClassName('level_4-heart')[i].children[i+1].classList.add('iconVisible');
  }
}
document.getElementsByClassName('level_4-heart')[6].classList.add('heart_yellow');


document.getElementsByClassName('level-optional_1')[3].style.display = "flex";
document.getElementsByClassName('level-optional_1')[1].style.display = "flex";

document.getElementsByClassName('level-optional_2')[0].style.display = "flex";
document.getElementsByClassName('level-optional_2')[5].style.display = "flex";
document.getElementsByClassName('level-optional_2')[2].style.display = "flex";
document.getElementsByClassName('level-optional_1')[2].style.display = "flex";

document.getElementsByClassName('levelLampDefault')[0].style.display = "block";
document.getElementsByClassName('levelLampYellow')[1].style.display = "block";
document.getElementsByClassName('levelLampError')[2].style.display = "block";

document.getElementsByClassName('level-price-value')[0].classList.add("level-price-red");
document.getElementsByClassName('level-price-value')[0].classList.remove("level-price-green");

document.getElementsByClassName('level-optional_3')[0].style.display = "flex";
document.getElementsByClassName('level-optional_4')[1].style.display = "flex";
document.getElementsByClassName('level-optional_5')[2].style.display = "flex";

// END OF TEST DATA

// Ids for levels checkboxes/labels
for (var i = 0; i < document.getElementsByClassName('control-level-item_4').length; i++) {
  level_4_checkbox[i].setAttribute('id', 'level_4_data_checkbox_' + i);
  level_4_label[i].setAttribute('for', 'level_4_data_checkbox_' + i);
}

for (var i = 0; i < document.getElementsByClassName('control-level-item_5').length; i++) {
  level_5_checkbox[i].setAttribute('id', 'level_5_data_checkbox_' + i);
  level_5_label[i].setAttribute('for', 'level_5_data_checkbox_' + i);
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
function checkPay(elem){
  for (var i = 0; i < document.getElementsByClassName('level-checkbox-small').length; i++) {
    if(document.getElementsByClassName('level-checkbox-small')[i] == elem){
        if(document.getElementsByClassName('level-dollar')[i].children[0].classList.contains('text-red-visible')){
          document.getElementById('levelPayModal').style.display = "flex";
        }
    }
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
function setOrange_1(elem){
  clearAllMarked(2);
  clearAllMarked(3);
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
}
function setOrange_2(elem){
  clearAllMarked(3);
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
}
function setOrange_3(elem){
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
}
