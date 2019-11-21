Chart.defaults.global.plugins.datalabels.display = false;

// test data

function testUpdateData(){
  for (var i = 0; i < document.getElementsByClassName('info-type_3').length; i++) {
    document.getElementsByClassName('info-type_3')[i].innerText = randomInteger(1, 20);
  }

  var infoNewData = shuffle([5, 2.5, 3, 3.5, 7, 4.5, 5, 3.5, 6, 3.5, 5, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7]);
  var infoNewLabels = shuffle(["cire1", "City 9", "City 18", "City 74", "City 20", "City 61", "City 8", "City 44", "City 5", "City 23", "City 17", "City 9", "City 18", "City 2", "City 20", "City 6", "City 8", "City 4", "City 5", "City 3", "City 12"]);
  var infoNewColors = shuffle(["#ff0000", "#fbef00", "#ffbe00", "#fbe0f0", "#ffbe00", "#ffbe00", "#ffffff", "#ffbe00", "#ffbe00", "#ffbe00", "#ffbe00", "#ffbe00", "#ffbe00", "#ff7603", "#ff7603", "#ff7603", "#ff7603", "#ff0000", "#ff0000", "#ff0000", "#ff0000"]);
  infoUpdateData(infoNewData, infoNewLabels, infoNewColors);

  var infoNewData_2 = shuffle([7 , 6.5, 6, 5.5, 5, 4.5, 4, 3.5, 3, 2.5, 5 , 3.5, 6, 3.5, 5, 4.5, 7, 3.5, 3, 2.5, 5]);
  var infoNewLabels_2 = shuffle(["City 123", "City 23", "City 5", "City 4", "City 8", "City 6", "City 20", "City 2", "City 18", "City 9", "City 17", "City 23", "City 5", "City 44", "City 8", "City 61", "City 20", "City 74", "City 18", "City 9", "cire1"]);
  var infoNewColors_2 = shuffle(["#00B050", "#ff0000", "#ff0000", "#ff0000", "#ff7603", "#00B050", "#ff7603", "#ff7603", "#FF0200", "#ffbe00", "#ffbe00", "#ffbe00", "#ffbe00", "#ffbe00", "#ffbe00", "#ffbe00", "#ffbe00", "#ffbe00", "#ffbe00", "#ffbe00", "#FEFF00"]);
  infoUpdateData_2(infoNewData_2, infoNewLabels_2, infoNewColors_2);

  var infoNewData_4 = (shuffle(randomIntegerArray), shuffle(randomIntegerArray1), shuffle(randomIntegerArray2));
  var infoNewLabels_4 = shuffle(["Shop 123", "Shop 23", "Shop 5", "Shop 4", "Shop 8", "Shop 6", "Shop 20", "Shop 2", "Shop 18", "Shop 9", "Shop 17", "Shop 23", "Shop 5", "Shop 44", "Shop 8", "Shop 61", "Shop 20", "Shop 74", "Shop 18", "Shop 9", "cire1"]);
  var infoNewColors_4 = blueColorArray.concat(blueColorArray);
  infoUpdateData_4(infoNewData_4, infoNewLabels_4, infoNewColors_4);

  var infoNewData_5 = shuffle([48, 20, 5, 10, 15, 2]);
  var infoNewLabels_5 = shuffle(['Others', 'AC1', 'AC2', 'AC3', 'Light 1', 'Switch 2']);
  var infoNewColors_5 = shuffle(["#70AD47", "#4572C4", "#ED7D32", "#A5A5A5", "#FFC004", "#5C9BD5"]);
  infoUpdateData_5(infoNewData_5, infoNewLabels_5, infoNewColors_5);

  var infoNewData_6 = shuffle([7 , 6.5, 6, 5.5, 5, 4.5, 4, 3.5, 3, 2.5, 5 , 3.5, 6, 3.5, 5, 4.5, 7, 3.5, 3, 2.5, 5]);
  var infoNewLabels_6 = shuffle(["City 123", "City 23", "City 5", "City 4", "City 8", "City 6", "City 20", "City 2", "City 18", "City 9", "City 17", "City 23", "City 5", "City 44", "City 8", "City 61", "City 20", "City 74", "City 18", "City 9", "cire1"]);
  var infoNewColors_6 = shuffle(["#00B050", "#ff0000", "#ff0000", "#ff0000", "#ff7603", "#00B050", "#ff7603", "#ff7603", "#FF0200", "#ffbe00", "#ffbe00", "#ffbe00", "#ffbe00", "#ffbe00", "#ffbe00", "#ffbe00", "#ffbe00", "#ffbe00", "#ffbe00", "#ffbe00", "#FEFF00"]);
  infoUpdateData_6(infoNewData_6, infoNewLabels_6, infoNewColors_6);

  var infoNewData_7 = shuffle(info_chart_7_data.datasets['0'].data);
  var infoNewLabels_7 = info_chart_7_data.labels;
  var infoNewColors_7 = info_chart_7_data.datasets['0'].backgroundColor;
  infoUpdateData_7(infoNewData_7, infoNewLabels_7, infoNewColors_7);
}
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

for (let i = 0; i < 1; i++) {
  let copy_data = document.getElementsByClassName('dashboard-statistics-table-data')[0].cloneNode(true);
  document.getElementById("dashboard-statistics-table").appendChild(copy_data);
}
for (let i = 0; i < 2; i++) {
  document.getElementsByClassName('info-kwh')[i].innerText = i*300;
}

for (let i = 0; i < 1; i++) {
  let copy_data = document.getElementsByClassName('dashboard-statistics-table-data_1')[0].cloneNode(true);
  document.getElementById("dashboard-statistics-table_1").appendChild(copy_data);
}
for (let i = 0; i < 2; i++) {
  document.getElementsByClassName('info-kwh_1')[i].innerText = i*30;
}

for (let i = 0; i < 1; i++) {
  let copy_data = document.getElementsByClassName('dashboard-statistics-table-data_2')[0].cloneNode(true);
  document.getElementById("dashboard-statistics-table_2").appendChild(copy_data);
}
for (let i = 0; i < 2; i++) {
  document.getElementsByClassName('info-kwh_2')[i].innerText = i*30;
}

for (let i = 0; i < 5; i++) {
  let copy_data = document.getElementsByClassName('dashboard-statistics-table-data_3')[0].cloneNode(true);
  document.getElementById("dashboard-statistics-table_3").appendChild(copy_data);
}
for (let i = 0; i < 6; i++) {
  document.getElementsByClassName('info-kwh_3')[i].innerText = i*30;
}

for (let i = 0; i < 5; i++) {
  let copy_data = document.getElementsByClassName('dashboard-statistics-table-data_6')[0].cloneNode(true);
  document.getElementById("dashboard-statistics-table_6").appendChild(copy_data);
}

for (let i = 0; i < 2; i++) {
  let copy_data = document.getElementsByClassName('dashboard-statistics-table-data_11')[0].cloneNode(true);
  document.getElementById("dashboard-statistics-table_11").appendChild(copy_data);
}

for (let i = 0; i < 6; i++) {
  document.getElementsByClassName('info_table_bill_6')[i].innerText = 3000+i*40;
}

document.getElementsByClassName('info-onhours_3')[1].classList.add('text-red');
document.getElementsByClassName('info-onhours_3')[5].classList.add('text-red');

document.getElementsByClassName('info-onhours_3')[4].innerHTML = "";
document.getElementsByClassName('info-onhours_3')[2].innerHTML = "+10%";
document.getElementsByClassName('info-onhours_3')[3].innerHTML = "-";

document.getElementsByClassName('info-error_3')[0].classList.add('text-red');
document.getElementsByClassName('info-error_3')[2].classList.add('text-red');

document.getElementsByClassName('info_cleanfilter_10')[0].classList.add('text-red');
document.getElementsByClassName('info_error_10')[0].classList.add('text-red');

document.getElementsByClassName('info_mfqerror_10')[0].classList.add('text-yellow');

document.getElementsByClassName('info-error_3')[5].innerHTML = "";
document.getElementsByClassName('info-error_3')[4].innerHTML = "+10%";
document.getElementsByClassName('info-error_3')[3].innerHTML = "-";

document.getElementsByClassName('info-alerts_3')[1].classList.add('text-red');
document.getElementsByClassName('info-alerts_3')[1].innerText = 1;

document.getElementsByClassName('info-minmax_3')[1].classList.add('text-red');

document.getElementsByClassName('info_table_billerror_6')[1].classList.add('text-red');
document.getElementsByClassName('info_table_billerror_6')[2].classList.add('text-red');

document.getElementsByClassName('info_table_save_6')[5].classList.add('text-red');

document.getElementsByClassName('info-minmax_3')[1].innerText = -21;

document.getElementsByClassName('info_table_billerror_6')[1].innerText = "+10%";
document.getElementsByClassName('info_table_billerror_6')[2].innerText = "-10%";

document.getElementsByClassName('info_table_save_6')[5].innerText = "-10%";

document.getElementsByClassName('nextLevelButton_3')[1].innerText = 'AC2';
document.getElementsByClassName('nextLevelButton_3')[2].innerText = 'AC3';
document.getElementsByClassName('nextLevelButton_3')[3].innerText = 'AC4';

document.getElementsByClassName('nextLevelButton_3')[4].innerText = 'SW1';
document.getElementsByClassName('nextLevelButton_3')[5].innerText = 'SW2';



// end of test data



var info_chart_1_data = {
  // Test data
  labels: ["City 123", "City 33", "City 5", "City 4", "City 8", "City 6", "City 20", "City 2", "City 18", "City 9", "City 17", "City 23", "City 5", "City 44", "City 8", "City 61", "City 20", "City 74", "City 18", "City 9", "cire1"],
  datasets: [{
    label: "Energy rate",
    backgroundColor: ["#ff0000", "#ff0000", "#ff0000", "#ff0000", "#ff7603", "#ff7603", "#ff7603", "#ff7603", "#ffbe00", "#ffbe00", "#ffbe00", "#ffbe00", "#ffbe00", "#ffbe00", "#ffbe00", "#ffbe00", "#ffbe00", "#ffbe00", "#ffbe00", "#ffbe00", "#ff0000"],
    borderColor: "rgb(70, 70, 70)",
    borderWidth: 1,
    hoverBackgroundColor: "rgba(255,99,132,0.4)",
    hoverBorderColor: "rgb(70, 70, 70)",
    data: [7 , 6.5, 6, 5.5, 5, 4.5, 4, 3.5, 3, 2.5, 5 , 3.5, 6, 3.5, 5, 4.5, 7, 3.5, 3, 2.5, 5],
  }]
};
var info_chart_1_link = {
  // Test data
  links: ["#12", "#3", "#5", "#4", "#8", "#6", "#20", "#2", "#18", "#9", "#17", "#23", "#5", "#44", "#8", "#61", "#20", "#74", "#18", "#9", "#1"],
};
var options = {
  legend: {
    display: false
  },
  maintainAspectRatio: false,
  annotation: {
    annotations: [{
      type: 'line',
      mode: 'horizontal',
      scaleID: 'y-axis-0',
      value: 2.5,
      borderColor: 'rgb(76, 76, 76)',
      borderWidth: 4,
      label: {
        enabled: false,
        content: 'Average',
        backgroundColor: 'rgba(0,0,0,0)',
        fontSize: 20,
        fontColor: "#3c3c3c",
        position: "left",
        xAdjust: 10,
        yAdjust: -25,
      }
    }]
  },
  scales: {
    yAxes: [{
      ticks: {
          fontColor: '#787878'
      },
      barPercentage: 1.0,
      categoryPercentage: 1.0,
      stacked: true,
      gridLines: {
        display: true,
        color: "rgb(76, 76, 76)"
      }
    }],

    xAxes: [{
      ticks: {
          fontColor: 'white'
      },
      barPercentage: 1.0,
      categoryPercentage: 1.0,
      gridLines: {
        display: false
      }
    }]
  }
};

var info_chart_1_clickCounter = 10;

var info_chart_1_start = info_chart_1_data.labels;
var info_chart_1_start_data = info_chart_1_data.datasets['0'].data;
var info_chart_1_start_colors = info_chart_1_data.datasets['0'].backgroundColor;

document.getElementById('showPrev_1_chart').style.visibility = "hidden";


function infoUpdateData(data_array, label_array, color_array) {
  info_chart_1_data.datasets['0'].data = data_array;
  info_chart_1_data.labels = label_array;
  info_chart_1_data.datasets['0'].backgroundColor = color_array;

  info_chart_1_start = info_chart_1_data.labels;
  info_chart_1_start_data = info_chart_1_data.datasets['0'].data;
  info_chart_1_start_colors = info_chart_1_data.datasets['0'].backgroundColor;

  info_chart_1_clickCounter = 10;
  document.getElementById('showNext_1_chart').style.visibility = "visible";
  document.getElementById('showPrev_1_chart').style.visibility = "hidden";
  infoSliceData();
  info_chart_1.update();
}

function infoSliceData(){
  info_chart_1_data.labels = info_chart_1_start.slice(info_chart_1_clickCounter-10, info_chart_1_clickCounter);
  info_chart_1_data.datasets['0'].data = info_chart_1_start_data.slice(info_chart_1_clickCounter-10, info_chart_1_clickCounter);
  info_chart_1_data.datasets['0'].backgroundColor = info_chart_1_start_colors.slice(info_chart_1_clickCounter-10, info_chart_1_clickCounter);
}
infoSliceData()

document.getElementById('showNext_1_chart').onclick = function(){
  if (info_chart_1_start.slice(info_chart_1_clickCounter, info_chart_1_clickCounter+10).length != 0){
    info_chart_1_data.labels = info_chart_1_start.slice(info_chart_1_clickCounter, info_chart_1_clickCounter+10);
    info_chart_1_data.datasets['0'].data = info_chart_1_start_data.slice(info_chart_1_clickCounter, info_chart_1_clickCounter+10);
    info_chart_1_data.datasets['0'].backgroundColor = info_chart_1_start_colors.slice(info_chart_1_clickCounter, info_chart_1_clickCounter+10);

    document.getElementById('showPrev_1_chart').style.visibility = "visible";

    info_chart_1_clickCounter += 10;

    info_chart_1.update();
  } if (info_chart_1_start.length <= info_chart_1_clickCounter){
    document.getElementById('showNext_1_chart').style.visibility = "hidden";
  }
}

document.getElementById('showPrev_1_chart').onclick = function(){
  if (info_chart_1_clickCounter != 10){
    document.getElementById('showNext_1_chart').style.visibility = "visible";

    info_chart_1_data.labels = info_chart_1_start.slice(info_chart_1_clickCounter-20, info_chart_1_clickCounter-10);
    info_chart_1_data.datasets['0'].data = info_chart_1_start_data.slice(info_chart_1_clickCounter-20, info_chart_1_clickCounter-10);
    info_chart_1_data.datasets['0'].backgroundColor = info_chart_1_start_colors.slice(info_chart_1_clickCounter-20, info_chart_1_clickCounter-10);

    info_chart_1_clickCounter -= 10;

    info_chart_1.update();
  }
  if (info_chart_1_clickCounter == 10){
    document.getElementById('showPrev_1_chart').style.visibility = "hidden";
  }

}
var info_showToday = document.getElementById('info_1_showToday');
var info_showWeek = document.getElementById('info_1_showWeek');
var info_showMonth = document.getElementById('info_1_showMonth');
var info_showYear = document.getElementById('info_1_showYear');

function infoRemoveActiveOptions(){
  info_showToday.classList.remove('info-chart-panel-options-buttons-active');
  info_showWeek.classList.remove('info-chart-panel-options-buttons-active');
  info_showMonth.classList.remove('info-chart-panel-options-buttons-active');
  info_showYear.classList.remove('info-chart-panel-options-buttons-active');
}

var global_selection = 'month';

var date = new Date();

var getDaysInMonth = function(month, year) {
 return new Date(year, month, 0).getDate();
};

function applyGlobalSelection(){
  globalArray = [];

  if(global_selection == 'month'){
    var temp_day = 0;
    for (var i = 0; i < 31 + 1; i++) {
      if(date.getDate()-i <= 0){
        globalArray.push(getDaysInMonth(date.getMonth()+1, date.getFullYear()) - temp_day);
        temp_day += 1;
      } else {
        globalArray.push(date.getDate()-i);
      }
    }


    infoNewData_7 = info_chart_7_data.datasets['0'].data;
    infoNewColors_7 = info_chart_7_data.datasets['0'].backgroundColor;

    infoUpdateData_7(infoNewData_7, globalArray.reverse(), infoNewColors_7);
  } else if (global_selection == 'year'){

    infoNewData_7 = info_chart_7_data.datasets['0'].data;
    infoNewColors_7 = info_chart_7_data.datasets['0'].backgroundColor;

    infoUpdateData_7(infoNewData_7, chart_3_data_month, infoNewColors_7);

  } else if (global_selection == 'week'){

    infoNewData_7 = info_chart_7_data.datasets['0'].data;
    infoNewColors_7 = info_chart_7_data.datasets['0'].backgroundColor;

    infoUpdateData_7(infoNewData_7, chart_9_data_month, infoNewColors_7);
  } else{

    infoNewData_7 = info_chart_7_data.datasets['0'].data;
    infoNewColors_7 = info_chart_7_data.datasets['0'].backgroundColor;

    infoUpdateData_7(infoNewData_7, chart_9_data_hours, infoNewColors_7);
  }
}


info_showYear.onclick = function(){
  // Test func
  testUpdateData()
  //

  global_selection = 'year';
  applyGlobalSelection();

  infoRemoveActiveOptions();
  info_showYear.classList.add('info-chart-panel-options-buttons-active');
}

info_showMonth.onclick = function(){
  // Test func
  testUpdateData()
  //

  global_selection = 'month';
  applyGlobalSelection();

  infoRemoveActiveOptions();
  info_showMonth.classList.add('info-chart-panel-options-buttons-active');

}

info_showWeek.onclick = function(){
  // Test func
  testUpdateData()
  //

  global_selection = 'week';
  applyGlobalSelection();

  infoRemoveActiveOptions();
  info_showWeek.classList.add('info-chart-panel-options-buttons-active');
}

info_showToday.onclick = function(){
  // Test func
  testUpdateData()
  //

  global_selection = 'today';
  applyGlobalSelection();

  infoRemoveActiveOptions();
  info_showToday.classList.add('info-chart-panel-options-buttons-active');
}




var info_chart_1 = Chart.Bar('info_chart_1', {
  options: options,
  data: info_chart_1_data
});


var infoCanvas = document.getElementById("info_chart_1");

infoCanvas.onclick = function(e) {
   var slice = info_chart_1.getElementAtEvent(e);
   if (!slice.length) return;
   var link = slice[0]._model.label;
   for (var i = 0; i < info_chart_1_link.links.length; i++) {
     if(link == info_chart_1_data.labels[i]){
       window.open(info_chart_1_link.links[i]);
     }
   }
}

$(function(){
    $('#from').combodate({
      value:  moment().format('DD-MM-YYYY'),
      maxYear: moment().year(),
      minYear: 2018,
      firstItem: 'none'
     });
});


var currentMonth = moment().format('MM');
if(currentMonth != 12){
  currentMonth = Number(currentMonth) + 1;
} else {
  currentMonth = '01';
}
$(function(){
    $('#to').combodate({
      value:  moment().format('DD') + "-" + currentMonth + "-" + moment().format('YYYY'),
      maxYear: moment().year(),
      minYear: 2018,
      firstItem: 'none'
     });
});
// Total section values
let info_level_admin = 0;
let info_cost = 0;
let info_avg_rage = 0;
let info_acct = 0;
let info_ac = 0;
let info_sw = 0;
let info_pm = 0;
let info_kwh = 0;
let info_alert = 0;

for (let i = 0; i < document.getElementsByClassName('info-cost').length; i++) {
  info_cost += Number(document.getElementsByClassName('info-cost')[i].innerText);
  info_avg_rage += Number(document.getElementsByClassName('info-avg-rate')[i].innerText);
  info_acct += Number(document.getElementsByClassName('info-acct')[i].innerText);
  info_ac += Number(document.getElementsByClassName('info-ac')[i].innerText);
  info_sw += Number(document.getElementsByClassName('info-sw')[i].innerText);
  info_pm += Number(document.getElementsByClassName('info-pm')[i].innerText);
  info_kwh += Number(document.getElementsByClassName('info-kwh')[i].innerText);
  info_alert += Number(document.getElementsByClassName('info-alerts')[i].innerText);
}
document.getElementById('info-cost').innerText = info_cost;
document.getElementById('info-avg-rate').innerText = info_avg_rage;
document.getElementById('info-acct').innerText = info_acct;
document.getElementById('info-ac').innerText = info_ac;
document.getElementById('info-sw').innerText = info_sw;
document.getElementById('info-pm').innerText = info_pm;
document.getElementById('info-kwh').innerText = info_kwh;
document.getElementById('info-alerts').innerText = info_alert;

// Total section values (Level 1)
let info_level_admin_1 = 0;
let info_cost_1 = 0;
let info_avg_rage_1 = 0;
let info_acct_1 = 0;
let info_ac_1 = 0;
let info_sw_1 = 0;
let info_pm_1 = 0;
let info_kwh_1 = 0;
let info_alert_1 = 0;

for (let i = 0; i < document.getElementsByClassName('info-cost_1').length; i++) {
  info_cost_1 += Number(document.getElementsByClassName('info-cost_1')[i].innerText);
  info_avg_rage_1 += Number(document.getElementsByClassName('info-avg-rate_1')[i].innerText);
  info_acct_1 += Number(document.getElementsByClassName('info-acct_1')[i].innerText);
  info_ac_1 += Number(document.getElementsByClassName('info-ac_1')[i].innerText);
  info_sw_1 += Number(document.getElementsByClassName('info-sw_1')[i].innerText);
  info_pm_1 += Number(document.getElementsByClassName('info-pm_1')[i].innerText);
  info_kwh_1 += Number(document.getElementsByClassName('info-kwh_1')[i].innerText);
  info_alert_1 += Number(document.getElementsByClassName('info-alerts_1')[i].innerText);
}
document.getElementById('info-cost_1').innerText = info_cost_1;
document.getElementById('info-avg-rate_1').innerText = info_avg_rage_1;
document.getElementById('info-acct_1').innerText = info_acct_1;
document.getElementById('info-ac_1').innerText = info_ac_1;
document.getElementById('info-sw_1').innerText = info_sw_1;
document.getElementById('info-pm_1').innerText = info_pm_1;
document.getElementById('info-kwh_1').innerText = info_kwh_1;
document.getElementById('info-alerts_1').innerText = info_alert_1;

// Total section values (Level 2)
let info_level_admin_2 = 0;
let info_rate_2 = 0;
let info_pm_2 = 0;
let info_ac_2 = 0;
let info_sw_2 = 0;
let info_other_2 = 0;
let info_ac_value_2 = 0;
let info_sw_value_2 = 0;
let info_workhours_2 = 0;
let info_sqm_2 = 0;
let info_kwh_2 = 0;
let info_alerts_2 = 0;

for (let i = 0; i < document.getElementsByClassName('info-rate_2').length; i++) {
  info_rate_2 += Number(document.getElementsByClassName('info-rate_2')[i].innerText);
  info_pm_2 += Number(document.getElementsByClassName('info-pm_2')[i].innerText);
  info_ac_2 += Number(document.getElementsByClassName('info-ac_2')[i].innerText);
  info_sw_2 += Number(document.getElementsByClassName('info-sw_2')[i].innerText);
  info_other_2 += Number(document.getElementsByClassName('info-other_2')[i].innerText);
  info_ac_value_2 += Number(document.getElementsByClassName('info-ac_value_2')[i].innerText);
  info_sw_value_2 += Number(document.getElementsByClassName('info-sw_value_2')[i].innerText);
  info_workhours_2  += Number(document.getElementsByClassName('info-workhours_2')[i].innerText);
  info_sqm_2 += Number(document.getElementsByClassName('info-sqm_2')[i].innerText);
  info_kwh_2 += Number(document.getElementsByClassName('info-kwh_2')[i].innerText);
  info_alerts_2 += Number(document.getElementsByClassName('info-alerts_2')[i].innerText);
}
document.getElementById('info-rate_2').innerText = info_rate_2;
document.getElementById('info-pm_2').innerText = info_pm_2;
document.getElementById('info-ac_2').innerText = info_ac_2;
document.getElementById('info-sw_2').innerText = info_sw_2;
document.getElementById('info-other_2').innerText = info_other_2;
document.getElementById('info-ac_value_2').innerText = info_ac_value_2;
document.getElementById('info-sw_value_2').innerText = info_sw_value_2;
document.getElementById('info-workhours_2').innerText = info_workhours_2;
document.getElementById('info-sqm_2').innerText = info_sqm_2;
document.getElementById('info-kwh_2').innerText = info_kwh_2;
document.getElementById('info-alerts_2').innerText = info_alerts_2;



let copy_data = document.getElementsByClassName('dashboard-statistics-table-total-fake')[0].cloneNode(true);
document.getElementById("dashboard-statistics-table").appendChild(copy_data);

let copydata = document.getElementsByClassName('dashboard-statistics-table-total-fake_1')[0].cloneNode(true);
document.getElementById("dashboard-statistics-table_1").appendChild(copydata);

let copydata_1 = document.getElementsByClassName('dashboard-statistics-table-total-fake_2')[0].cloneNode(true);
document.getElementById("dashboard-statistics-table_2").appendChild(copydata_1);

document.getElementById("dashboard-statistics-table_3").appendChild(document.getElementsByClassName('dashboard-statistics-table-total-fake_3')[0].cloneNode(true));
document.getElementById("dashboard-statistics-table_3").appendChild(document.getElementsByClassName('dashboard-statistics-table-total-fake_3_1')[0].cloneNode(true));
document.getElementById("dashboard-statistics-table_3").appendChild(document.getElementsByClassName('dashboard-statistics-table-total-fake_3_2')[0].cloneNode(true));
document.getElementById("dashboard-statistics-table_3").appendChild(document.getElementsByClassName('dashboard-statistics-table-total-fake_3_3')[0].cloneNode(true));

function fnExcelReport(table)
{
    var tab_text="<table border='2px'><tr bgcolor='#87AFC6'>";
    var textRange; var j=0;
    tab = document.getElementById(table);

    for(j = 0 ; j < tab.rows.length ; j++)
    {
        tab_text=tab_text+tab.rows[j].innerHTML+"</tr>";
    }

    tab_text=tab_text+"</table>";
    tab_text= tab_text.replace(/<A[^>]*>|<\/A>/g, "");
    tab_text= tab_text.replace(/<img[^>]*>/gi,"");
    tab_text= tab_text.replace(/<input[^>]*>|<\/input>/gi, "");

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))
    {
        txtArea1.document.open("txt/html","replace");
        txtArea1.document.write(tab_text);
        txtArea1.document.close();
        txtArea1.focus();
        sa=txtArea1.document.execCommand("SaveAs",true,"Say Thanks to Sumit.xls");
    }
    else
        sa = window.open('data:application/vnd.ms-excel,' + encodeURIComponent(tab_text));

    return (sa);
}

function tableSelect(elem){
  for (var i = 0; i < document.getElementsByClassName('infoTableSelect').length; i++) {
    document.getElementsByClassName('infoTableSelect')[i].style.color =  'white';
  }
  elem.setAttribute('style', 'color: #ED7D32 !important');
}

document.getElementsByClassName('info-alerts')[0].classList.add('info-alerts-red');
document.getElementsByClassName('info-alerts_1')[0].classList.add('info-alerts-red');
document.getElementsByClassName('info-alerts_2')[0].classList.add('info-alerts-red');


// Link
var alertLink = "#";

for (var i = 0; i < document.getElementsByClassName('info-alerts').length; i++) {
  if(document.getElementsByClassName('info-alerts')[i].classList.contains('info-alerts-red')){
    document.getElementsByClassName('info-alerts')[i].onclick = function(){
      window.open(alertLink, "_blank")
    }
  }
}
for (var i = 0; i < document.getElementsByClassName('info-alerts_1').length; i++) {
  if(document.getElementsByClassName('info-alerts_1')[i].classList.contains('info-alerts-red')){
    document.getElementsByClassName('info-alerts_1')[i].onclick = function(){
      window.open(alertLink, "_blank")
    }
  }
}
for (var i = 0; i < document.getElementsByClassName('info-alerts_2').length; i++) {
  if(document.getElementsByClassName('info-alerts_2')[i].classList.contains('info-alerts-red')){
    document.getElementsByClassName('info-alerts_2')[i].onclick = function(){
      window.open(alertLink, "_blank")
    }
  }
}
document.getElementsByClassName('level-dollar')[0].style.display = "flex";
document.getElementsByClassName('level-dollar')[3].style.display = "flex";
document.getElementsByClassName('level-dollar')[4].style.display = "flex";
