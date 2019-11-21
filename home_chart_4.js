
for (var i = 0; i < 12; i++) {
  document.getElementsByClassName('home-chart-body-title')[0].children[i].innerText = chart_3_data_month[i];
}
function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

function setOrange(elem){

  // TEST data
  document.getElementById('monthlyServerCost').innerText = randomInteger(10, 2000);
  document.getElementById('energySavings').innerText = randomInteger(10, 3000);
  document.getElementById('roiValue').innerText = randomInteger(10, 300);
  document.getElementById('levelOneTotal').innerText = randomInteger(10, 300);
  document.getElementById('levelTwoTotal').innerText = randomInteger(10, 300);
  document.getElementById('appAccountsTotal').innerText = randomInteger(10, 3000);
  document.getElementById('powerMetersTotal').innerText = randomInteger(10, 3000);
  document.getElementById('conditionersTotal').innerText = randomInteger(10, 6000);
  document.getElementById('switchesTotal').innerText = randomInteger(10, 6000);


  // End of TEST data

  for (var i = 0; i < 12; i++) {
    document.getElementsByClassName('home-chart-body-title')[0].children[i].setAttribute('style', 'color: white !important');

  }
  elem.style.color = "#ED7D32";
}
