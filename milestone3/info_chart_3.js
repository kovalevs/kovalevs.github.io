// Test
document.getElementsByClassName('nextLevelButton')[1].innerText = 'City 2';

// End of test
var backgroundColors = [];
var thirdChartData = [-10 , -5, -2, 3, 5, 15, 25, 35, 45, 50, -1 , 5, 2, 33, 55, 5, -2, 31, 5, 50, -22, 24];


for (var i = 0; i < thirdChartData.length; i++) {
  if(thirdChartData[i]>0){
    backgroundColors.push('#428425');
  } else {
    backgroundColors.push('#D00000');
  }
}

var info_chart_3_data = {
  // Test data
  labels: ["Shop 123", "Shop 23", "Shop 5", "Shop 4", "Shop 8", "Shop 6", "Shop 20", "Shop 2", "Shop 18", "Shop 9", "Shop 17", "Shop 23", "Shop 5", "Shop 44", "Shop 8", "Shop 61", "Shop 20", "Shop 74", "Shop 18", "Shop 9", "Shop 1", 'Shop 2'],
  datasets: [{
    label: " % Savings",
    backgroundColor: backgroundColors,
    borderColor: "rgb(70, 70, 70)",
    borderWidth: 1,
    hoverBackgroundColor: "rgba(255,99,132,0.4)",
    hoverBorderColor: "rgb(70, 70, 70)",
    data: thirdChartData,
  }]
};
var info_chart_3_link = {
  // Test data
  links: ["#1", "#2", "#5", "#4", "#8", "#6", "#20", "#2", "#18", "#9", "#17", "#23", "#5", "#44", "#8", "#61", "#20", "#74", "#18", "#9", "#1"],
};
var options_3 = {
  legend: {
    display: false
  },
  maintainAspectRatio: false,
  annotation: {
    annotations: [{
      type: 'line',
      mode: 'horizontal',
      scaleID: 'y-axis-0',
      value: 2,
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

var info_chart_3_clickCounter = 10;

var info_chart_3_start = info_chart_3_data.labels;
var info_chart_3_start_data = info_chart_3_data.datasets['0'].data;
var info_chart_3_start_colors = info_chart_3_data.datasets['0'].backgroundColor;

document.getElementById('showPrev_3_chart').style.visibility = "hidden";


function infoUpdateData_3(data_array, label_array, color_array) {
  info_chart_3_data.datasets['0'].data = data_array;
  info_chart_3_data.labels = label_array;
  info_chart_3_data.datasets['0'].backgroundColor = color_array;

  info_chart_3_start = info_chart_3_data.labels;
  info_chart_3_start_data = info_chart_3_data.datasets['0'].data;
  info_chart_3_start_colors = info_chart_3_data.datasets['0'].backgroundColor;

  info_chart_3_clickCounter = 10;
  document.getElementById('showNext_3_chart').style.visibility = "visible";
  document.getElementById('showPrev_3_chart').style.visibility = "hidden";
  infoSliceData_3();
  info_chart_3.update();
}
function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

function infoSliceData_3(){
  info_chart_3_data.labels = info_chart_3_start.slice(info_chart_3_clickCounter-10, info_chart_3_clickCounter);
  info_chart_3_data.datasets['0'].data = info_chart_3_start_data.slice(info_chart_3_clickCounter-10, info_chart_3_clickCounter);
  info_chart_3_data.datasets['0'].backgroundColor = info_chart_3_start_colors.slice(info_chart_3_clickCounter-10, info_chart_3_clickCounter);
}
infoSliceData_3()

document.getElementById('showNext_3_chart').onclick = function(){
  if (info_chart_3_start.slice(info_chart_3_clickCounter, info_chart_3_clickCounter+10).length != 0){
    info_chart_3_data.labels = info_chart_3_start.slice(info_chart_3_clickCounter, info_chart_3_clickCounter+10);
    info_chart_3_data.datasets['0'].data = info_chart_3_start_data.slice(info_chart_3_clickCounter, info_chart_3_clickCounter+10);
    info_chart_3_data.datasets['0'].backgroundColor = info_chart_3_start_colors.slice(info_chart_3_clickCounter, info_chart_3_clickCounter+10);

    document.getElementById('showPrev_3_chart').style.visibility = "visible";

    info_chart_3_clickCounter += 10;

    info_chart_3.update();
  } if (info_chart_3_start.length <= info_chart_3_clickCounter){
    document.getElementById('showNext_3_chart').style.visibility = "hidden";
  }
}

document.getElementById('showPrev_3_chart').onclick = function(){
  if (info_chart_3_clickCounter != 10){
    document.getElementById('showNext_3_chart').style.visibility = "visible";

    info_chart_3_data.labels = info_chart_3_start.slice(info_chart_3_clickCounter-20, info_chart_3_clickCounter-10);
    info_chart_3_data.datasets['0'].data = info_chart_3_start_data.slice(info_chart_3_clickCounter-20, info_chart_3_clickCounter-10);
    info_chart_3_data.datasets['0'].backgroundColor = info_chart_3_start_colors.slice(info_chart_3_clickCounter-20, info_chart_3_clickCounter-10);

    info_chart_3_clickCounter -= 10;

    info_chart_3.update();
  }
  if (info_chart_3_clickCounter == 10){
    document.getElementById('showPrev_3_chart').style.visibility = "hidden";
  }

}

var info_chart_3 = Chart.Bar('info_chart_3', {
  options: options_3,
  data: info_chart_3_data
});


var infoCanvas_3 = document.getElementById("info_chart_3");

infoCanvas_3.onclick = function(e) {
   var slice = info_chart_3.getElementAtEvent(e);
   if (!slice.length) return;
   var link = slice[0]._model.label;
   for (var i = 0; i < info_chart_3_link.links.length; i++) {
     if(link == info_chart_3_data.labels[i]){
       window.open(info_chart_3_link.links[i]);
     }
   }
}
var chart_3_data_month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

var chart_3_data_month_temp = [];


var currentMonth = new Date().getMonth();

function moveMonth(){
  var chart_3_data_month_first = chart_3_data_month[0];
  for (var i = 0; i < 12; i++) {
    if(i != 11){
      chart_3_data_month[i] = chart_3_data_month[i+1];
    } else {
      chart_3_data_month[i] = chart_3_data_month_first;
    }
  }
}
for (var i = 0; i < currentMonth+1; i++) {
  moveMonth();
}

for (var i = 0; i < 12; i++) {
  document.getElementsByClassName('home-chart-body-title')[0].children[i].innerText = chart_3_data_month[i];
}
function updateThirdChartData(elem){


  // Set month data here

  thirdChartData = [];
  for (var i = 0; i < 45; i++) {
    thirdChartData.push(randomInteger(-60, 60));
  }
  var thirdChartLabels = Array.from({length: 45}, () => 'Shop ' + Math.floor(Math.random() * 185));

  var backgroundColors = [];

  for (var i = 0; i < thirdChartData.length; i++) {
    if(thirdChartData[i]>0){
      backgroundColors.push('#428425');
    } else {
      backgroundColors.push('#D00000');
    }
  }


  info_chart_3_data.datasets['0'].data = thirdChartData;
  info_chart_3_data.labels = thirdChartLabels;
  info_chart_3_data.datasets['0'].backgroundColor = backgroundColors;

  info_chart_3_start = info_chart_3_data.labels;
  info_chart_3_start_data = info_chart_3_data.datasets['0'].data;
  info_chart_3_start_colors = info_chart_3_data.datasets['0'].backgroundColor;

  info_chart_3_clickCounter = 10;
  document.getElementById('showNext_3_chart').style.visibility = "visible";
  document.getElementById('showPrev_3_chart').style.visibility = "hidden";

  infoSliceData_3();
  info_chart_3.update();

  for (var i = 0; i < 12; i++) {
    document.getElementsByClassName('home-chart-body-title')[0].children[i].setAttribute('style', 'color: white !important');
  }
  elem.style.color = "#ED7D32";

  var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  if(width <= 600){
    document.getElementsByClassName('home-chart-body-title')[0].children[0].setAttribute('style', 'color:#7B7B7B !important');
  }

}


var firstTab = document.getElementById('level_1_tab');
var secondTab = document.getElementById('level_2_tab');
var thirdTab = document.getElementById('level_3_tab');
var fourTab = document.getElementById('level_4_tab');
var fiveTab = document.getElementById('level_5_tab');

var secondSpan = document.getElementById('level_2_span');
var thirdSpan = document.getElementById('level_3_span');
var fourSpan = document.getElementById('level_4_span');
var fiveSpan = document.getElementById('level_5_span');

var fourChart = document.getElementsByClassName('home-chart-stacked')[0];



function cleanActive(){
  firstTab.classList.remove('tab-active');
  secondTab.classList.remove('tab-active');
  thirdTab.classList.remove('tab-active');
  fourTab.classList.remove('tab-active');
  fiveTab.classList.remove('tab-active');

  info_chart_1_clickCounter = 10;
  info_chart_2_clickCounter = 10;
  info_chart_3_clickCounter = 10;

  info_chart_4_clickCounter = 10;
  info_chart_5_clickCounter = 10;

  infoSliceData();
  info_chart_1.update();

  infoSliceData_2();
  info_chart_2.update();

  infoSliceData_3();
  info_chart_3.update();

  infoSliceData_4();
  info_chart_4.update();


  document.getElementById('showNext_1_chart').style.visibility = "visible";
  document.getElementById('showPrev_1_chart').style.visibility = "hidden";

  document.getElementById('showNext_2_chart').style.visibility = "visible";
  document.getElementById('showPrev_2_chart').style.visibility = "hidden";

  document.getElementById('showNext_3_chart').style.visibility = "visible";
  document.getElementById('showPrev_3_chart').style.visibility = "hidden";

  document.getElementById('showNext_4_chart').style.visibility = "visible";
  document.getElementById('showPrev_4_chart').style.visibility = "hidden";

}


document.getElementById('payModalCancel').onclick = function(){
  document.getElementById('levelPayModal').style.display = 'none';
}
document.getElementById('payModalConfirm').onclick = function(){
  document.getElementById('levelPayModal').style.display = 'none';
}
function showFirstLevel(){
  hideAllExtra();
  hideAllExtraLast();
  hideFourLevel();

  document.getElementById('chart_first').style.display = "block";
  document.getElementById('chart_second').style.display = "block";
  document.getElementById('chart_plusminus').style.display = "block";

  var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  if(width <= 1075){
    for (var i = 0; i < document.getElementsByClassName('home-charts').length; i++) {
      document.getElementsByClassName('home-charts')[i].style.marginTop = "92px";
    }
  }

  for (var i = 0; i < 12; i++) {
    document.getElementsByClassName('home-chart-body-title')[0].children[i].setAttribute('style', 'color:white !important');
  }

  var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  if(width <= 600){
    document.getElementsByClassName('home-chart-body-title')[0].children[1].setAttribute('style', 'color:#ED7D33 !important');
    document.getElementsByClassName('home-chart-body-title')[0].children[0].setAttribute('style', 'color:#7B7B7B !important');
  }
  if(width > 601){
    document.getElementsByClassName('home-chart-body-title')[0].children[11].setAttribute('style', 'color:#ED7D33 !important');
  }


  infoRemoveActiveOptions();

  global_selection = 'month';
  info_showMonth.classList.add('info-chart-panel-options-buttons-active');

  cleanActive();


  fourChart.style.display = "none";

  secondTab.style.display = "none";
  secondSpan.style.display = "none";

  thirdTab.style.display = "none";
  thirdSpan.style.display = "none";

  fourTab.style.display = "none";
  fourSpan.style.display = "none";

  firstTab.classList.add('tab-active');

  document.getElementById('dashboardStatistics').style.display = "block";
  document.getElementById('dashboardStatistics_1').style.display = "none";
  document.getElementById('dashboardStatistics_2').style.display = "none";

  document.getElementById('chart_settings').style.display = "flex";

  for (var i = 0; i < document.getElementsByClassName('align_end').length; i++) {
    document.getElementsByClassName('align_end')[0].scrollTo(pageYOffset, 200);
  }
}

function showSecondLevel(elem){
  hideAllExtra();
  hideAllExtraLast();
  hideFourLevel();

  document.getElementById('chart_first').style.display = "block";
  document.getElementById('chart_second').style.display = "block";
  document.getElementById('chart_plusminus').style.display = "block";

  var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  if(width <= 1075){
    for (var i = 0; i < document.getElementsByClassName('home-charts').length; i++) {
      document.getElementsByClassName('home-charts')[i].style.marginTop = "92px";
    }
  }

  for (var i = 0; i < 12; i++) {
    document.getElementsByClassName('home-chart-body-title')[0].children[i].setAttribute('style', 'color:white !important');
  }
  var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  if(width <= 600){
    document.getElementsByClassName('home-chart-body-title')[0].children[1].setAttribute('style', 'color:#ED7D33 !important');
    document.getElementsByClassName('home-chart-body-title')[0].children[0].setAttribute('style', 'color:#7B7B7B !important');
  }
  if(width > 601){
    document.getElementsByClassName('home-chart-body-title')[0].children[11].setAttribute('style', 'color:#ED7D33 !important');
  }

  infoRemoveActiveOptions();

  global_selection = 'month';
  info_showMonth.classList.add('info-chart-panel-options-buttons-active');

  fourChart.style.display = "none";

  secondTab.innerText = elem.innerText;


  cleanActive();

  secondTab.style.display = "block";
  secondSpan.style.display = "block";

  thirdTab.style.display = "none";
  thirdSpan.style.display = "none";

  fourTab.style.display = "none";
  fourSpan.style.display = "none";

  secondTab.classList.add('tab-active');

  document.getElementById('dashboardStatistics').style.display = "none";
  document.getElementById('dashboardStatistics_1').style.display = "block";
  document.getElementById('dashboardStatistics_2').style.display = "none";

  document.getElementById('chart_settings').style.display = "flex";

  for (var i = 0; i < document.getElementsByClassName('align_end').length; i++) {
    document.getElementsByClassName('align_end')[0].scrollTo(pageYOffset, 200);
  }

}
function showThirdLevel(elem){
  hideAllExtra();
  hideAllExtraLast();
  hideFourLevel();

  document.getElementById('chart_first').style.display = "block";
  document.getElementById('chart_second').style.display = "block";
  document.getElementById('chart_plusminus').style.display = "block";

  var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  if(width <= 1075){
    for (var i = 0; i < document.getElementsByClassName('home-charts').length; i++) {
      document.getElementsByClassName('home-charts')[i].style.marginTop = "92px";
    }
  }

  for (var i = 0; i < 12; i++) {
    document.getElementsByClassName('home-chart-body-title')[0].children[i].setAttribute('style', 'color:white !important');
  }
  var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  if(width <= 600){
    document.getElementsByClassName('home-chart-body-title')[0].children[1].setAttribute('style', 'color:#ED7D33 !important');
    document.getElementsByClassName('home-chart-body-title')[0].children[0].setAttribute('style', 'color:#7B7B7B !important');
  }
  if(width > 601){
    document.getElementsByClassName('home-chart-body-title')[0].children[11].setAttribute('style', 'color:#ED7D33 !important');
  }


  infoRemoveActiveOptions();

  global_selection = 'month';
  info_showMonth.classList.add('info-chart-panel-options-buttons-active');

  fourChart.style.display = "block";

  thirdTab.innerText = elem.innerText;
  cleanActive();

  secondTab.style.display = "block";
  secondSpan.style.display = "block";

  thirdTab.style.display = "block";
  thirdSpan.style.display = "block";

  fourTab.style.display = "none";
  fourSpan.style.display = "none";

  thirdTab.classList.add('tab-active');

  document.getElementById('dashboardStatistics').style.display = "none";
  document.getElementById('dashboardStatistics_1').style.display = "none";
  document.getElementById('dashboardStatistics_2').style.display = "block";


  document.getElementById('chart_settings').style.display = "flex";

  // Hide lower levels

  for (var i = 0; i < document.getElementsByClassName('align_end').length; i++) {
    document.getElementsByClassName('align_end')[0].scrollTo(pageYOffset, 200);
  }

}

function showFourLevel(elem){
  hideAllExtra();
  hideAllExtraLast();

  hideSwOption();

  var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  if(width <= 1075){
    for (var i = 0; i < document.getElementsByClassName('home-charts').length; i++) {
      document.getElementsByClassName('home-charts')[i].style.marginTop = "130px";
    }
  }

  document.getElementById('yellowblueHideSw').style.display = "block";

  for (var i = 0; i < document.getElementsByClassName('extra-tabs-last')[0].childElementCount; i++) {
    document.getElementsByClassName('extra-tabs-last')[0].children[i].style.color = "#BFBFBF";
  }
  document.getElementsByClassName('extra-tabs-last')[0].children[0].style.color = "#ED7D32";


  document.getElementsByClassName('info-navigation')[0].style.display = "flex";

  document.getElementsByClassName('extra-tabs-last')[0].style.display = "none";

  for (var i = 0; i < 12; i++) {
    document.getElementsByClassName('home-chart-body-title')[0].children[i].setAttribute('style', 'color:white !important');
  }
  var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  if(width <= 600){
    document.getElementsByClassName('home-chart-body-title')[0].children[1].setAttribute('style', 'color:#ED7D33 !important');
    document.getElementsByClassName('home-chart-body-title')[0].children[0].setAttribute('style', 'color:#7B7B7B !important');
  }
  if(width > 601){
    document.getElementsByClassName('home-chart-body-title')[0].children[11].setAttribute('style', 'color:#ED7D33 !important');
  }

  infoRemoveActiveOptions();

  global_selection = 'month';
  info_showMonth.classList.add('info-chart-panel-options-buttons-active');

  fourChart.style.display = "block";

  fourTab.innerText = elem.innerText;
  cleanActive();


  fourTab.style.display = "block";
  fourSpan.style.display = "block";

  fourTab.classList.add('tab-active');

  fiveTab.style.display = "none";
  fiveSpan.style.display = "none";

  // Hide lower levels
  document.getElementById('dashboardStatistics').style.display = "none";
  document.getElementById('dashboardStatistics_1').style.display = "none";
  document.getElementById('dashboardStatistics_2').style.display = "block";

  document.getElementById('chart_first').style.display = "none";
  document.getElementById('chart_second').style.display = "none";
  document.getElementById('chart_third').style.display = "none";
  document.getElementById('dashboardStatistics').style.display = "none";
  document.getElementById('dashboardStatistics_1').style.display = "none";
  document.getElementById('dashboardStatistics_2').style.display = "none";
  document.getElementById('chart_settings').style.display = "none";
  document.getElementById('chart_plusminus').style.display = "none";
  document.getElementById('chart_subinfo').style.display = "none";

  document.getElementById('chart_meter_2').style.display = "none";
  document.getElementById('dashboardStatistics_7').style.display = "none";
  document.getElementById('dashboardStatistics_8').style.display = "none";
  document.getElementById('dashboardStatistics_9').style.display = "none";
  document.getElementById('dashboardStatistics_10').style.display = "none";
  document.getElementById('dashboardStatistics_11').style.display = "none";

  // Show 4 level
  document.getElementById('chart_pie').style.display = "block";
  document.getElementById('chart_pie').style.display = "flex";
  document.getElementById('chart_line').style.display = "flex";
  document.getElementById('dashboardStatistics_3').style.display = "block";
  document.getElementsByClassName('extra-tabs')[0].style.display = "flex";
  document.getElementsByClassName('extra-info')[0].style.display = "block";

}
function hideFourLevel(){
  hideSwOption();
  fiveTab.style.display = "none";
  fiveSpan.style.display = "none";

  for (var i = 0; i < document.getElementsByClassName('extra-tabs')[0].childElementCount; i++) {
    document.getElementsByClassName('extra-tabs')[0].children[i].style.color = "#BFBFBF";
  }

  for (var i = 0; i < document.getElementsByClassName('extra-tabs-last')[0].childElementCount; i++) {
    document.getElementsByClassName('extra-tabs-last')[0].children[i].style.color = "#BFBFBF";
  }

  document.getElementsByClassName('extra-tabs')[0].children[0].style.color = "#ED7D32";
  document.getElementsByClassName('extra-tabs-last')[0].children[0].style.color = "#ED7D32";

  document.getElementById('chart_pie').style.display = "none";
  document.getElementById('chart_line').style.display = "none";
  document.getElementById('dashboardStatistics_3').style.display = "none";
  document.getElementsByClassName('extra-tabs')[0].style.display = "none";
  document.getElementsByClassName('extra-info')[0].style.display = "none";

  document.getElementsByClassName('info-navigation')[0].style.display = "flex";
}
function showFiveLevel(elem){
  hideAllExtra();
  hideAllExtraLast();

  var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  if(width <= 1075){
    for (var i = 0; i < document.getElementsByClassName('home-charts').length; i++) {
      document.getElementsByClassName('home-charts')[i].style.marginTop = "130px";
    }
  }


  for (var i = 0; i < 12; i++) {
    document.getElementsByClassName('home-chart-body-title')[0].children[i].setAttribute('style', 'color:white !important');
  }
  var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  if(width <= 600){
    document.getElementsByClassName('home-chart-body-title')[0].children[1].setAttribute('style', 'color:#ED7D33 !important');
    document.getElementsByClassName('home-chart-body-title')[0].children[0].setAttribute('style', 'color:#7B7B7B !important');
  }
  if(width > 601){
    document.getElementsByClassName('home-chart-body-title')[0].children[11].setAttribute('style', 'color:#ED7D33 !important');
  }

  infoRemoveActiveOptions();

  global_selection = 'month';
  info_showMonth.classList.add('info-chart-panel-options-buttons-active');

  fourChart.style.display = "block";

  fiveTab.innerText = elem.innerText;
  cleanActive();


  fiveTab.style.display = "block";
  fiveSpan.style.display = "block";

  fiveTab.classList.add('tab-active');

  // Hide lower levels
  document.getElementById('dashboardStatistics').style.display = "none";
  document.getElementById('dashboardStatistics_1').style.display = "none";
  document.getElementById('dashboardStatistics_2').style.display = "block";

  document.getElementById('chart_first').style.display = "none";
  document.getElementById('chart_second').style.display = "none";
  document.getElementById('chart_third').style.display = "none";
  document.getElementById('dashboardStatistics').style.display = "none";
  document.getElementById('dashboardStatistics_1').style.display = "none";
  document.getElementById('dashboardStatistics_2').style.display = "none";
  document.getElementById('chart_settings').style.display = "none";
  document.getElementById('chart_plusminus').style.display = "none";
  document.getElementById('chart_subinfo').style.display = "none";

  document.getElementById('chart_pie').style.display = "none";
  document.getElementById('chart_pie').style.display = "none";
  document.getElementById('chart_line').style.display = "none";
  document.getElementById('dashboardStatistics_3').style.display = "none";
  document.getElementsByClassName('extra-tabs')[0].style.display = "none";
  document.getElementsByClassName('extra-info')[0].style.display = "none";

  document.getElementsByClassName('info-navigation')[0].style.display = "none";

  // Show 5 level
  document.getElementById('chart_meter_2').style.display = "block";
  document.getElementById('dashboardStatistics_7').style.display = "block";
  document.getElementById('dashboardStatistics_8').style.display = "block";
  document.getElementById('dashboardStatistics_9').style.display = "block";
  document.getElementById('dashboardStatistics_10').style.display = "block";
  document.getElementById('dashboardStatistics_11').style.display = "block";

  document.getElementsByClassName('extra-tabs-last')[0].style.display = "flex";

}

document.getElementsByClassName('extra-tabs')[0].children[0].style.color = "#ED7D32";
document.getElementsByClassName('extra-tabs-last')[0].children[0].style.color = "#ED7D32";


function showExtraOne(elem){
  hideAllExtraLast();
  for (var i = 0; i < document.getElementsByClassName('extra-tabs')[0].childElementCount; i++) {
    document.getElementsByClassName('extra-tabs')[0].children[i].style.color = "#BFBFBF";
  }
  elem.style.color = "#ED7D32";

  // Hide 3.x levels

  document.getElementById('chart_green_1').style.display = "none";
  document.getElementById('chart_enery_horiz').style.display = "none";
  document.getElementById('chart_blueyellow').style.display = "none";
  document.getElementById('dashboardStatistics_6').style.display = "none";

  document.getElementById('chart_energy').style.display = "none";
  document.getElementById('chart_meter_1').style.display = "none";
  document.getElementById('dashboardStatistics_4').style.display = "none";
  document.getElementById('dashboardStatistics_5').style.display = "none";
  document.getElementById('chart_months_1').style.display = "none";


  // Show 3.1 level
  document.getElementById('chart_pie').style.display = "block";
  document.getElementById('chart_pie').style.display = "flex";
  document.getElementById('chart_line').style.display = "flex";
  document.getElementById('dashboardStatistics_3').style.display = "block";
  document.getElementsByClassName('extra-tabs')[0].style.display = "flex";
  document.getElementsByClassName('extra-info')[0].style.display = "block";

  document.getElementsByClassName('info-navigation')[0].style.display = "flex";




}
function showExtraSecond(elem){
  hideAllExtraLast();
  for (var i = 0; i < document.getElementsByClassName('extra-tabs')[0].childElementCount; i++) {
    document.getElementsByClassName('extra-tabs')[0].children[i].style.color = "#BFBFBF";
  }
  elem.style.color = "#ED7D32";

  // Hide 3.x levels
  document.getElementById('chart_pie').style.display = "none";
  document.getElementById('chart_pie').style.display = "none";
  document.getElementById('chart_line').style.display = "none";
  document.getElementById('dashboardStatistics_3').style.display = "none";

  document.getElementById('chart_green_1').style.display = "none";
  document.getElementById('chart_enery_horiz').style.display = "none";
  document.getElementById('chart_blueyellow').style.display = "none";

  document.getElementById('dashboardStatistics_6').style.display = "none";

  // Show 3.2 level
  document.getElementById('chart_energy').style.display = "block";
  document.getElementById('chart_meter_1').style.display = "block";

  document.getElementById('dashboardStatistics_4').style.display = "block";
  document.getElementById('dashboardStatistics_5').style.display = "block";
  document.getElementById('chart_months_1').style.display = "block";

  document.getElementsByClassName('info-navigation')[0].style.display = "none";

}
function showExtraThird(elem){
  hideAllExtraLast();
  for (var i = 0; i < document.getElementsByClassName('extra-tabs')[0].childElementCount; i++) {
    document.getElementsByClassName('extra-tabs')[0].children[i].style.color = "#BFBFBF";
  }
  elem.style.color = "#ED7D32";


  // Hide 3.x levels
  document.getElementById('chart_pie').style.display = "none";
  document.getElementById('chart_pie').style.display = "none";
  document.getElementById('chart_line').style.display = "none";
  document.getElementById('dashboardStatistics_3').style.display = "none";

  document.getElementById('chart_energy').style.display = "none";
  document.getElementById('chart_meter_1').style.display = "none";

  document.getElementById('dashboardStatistics_4').style.display = "none";
  document.getElementById('dashboardStatistics_5').style.display = "none";
  document.getElementById('chart_months_1').style.display = "none";

  // Show 3.3 level
  document.getElementById('chart_green_1').style.display = "block";
  document.getElementById('chart_enery_horiz').style.display = "block";
  document.getElementById('chart_blueyellow').style.display = "block";

  document.getElementById('dashboardStatistics_6').style.display = "block";

  document.getElementsByClassName('info-navigation')[0].style.display = "none";
}


function hideAllExtra(){
  document.getElementById('chart_pie').style.display = "none";
  document.getElementById('chart_pie').style.display = "none";
  document.getElementById('chart_line').style.display = "none";
  document.getElementById('dashboardStatistics_3').style.display = "none";

  document.getElementById('chart_energy').style.display = "none";
  document.getElementById('chart_meter_1').style.display = "none";

  document.getElementById('dashboardStatistics_4').style.display = "none";
  document.getElementById('dashboardStatistics_5').style.display = "none";
  document.getElementById('chart_months_1').style.display = "none";

  document.getElementById('chart_pie').style.display = "none";
  document.getElementById('chart_pie').style.display = "none";
  document.getElementById('chart_line').style.display = "none";
  document.getElementById('dashboardStatistics_3').style.display = "none";

  document.getElementById('chart_green_1').style.display = "none";
  document.getElementById('chart_enery_horiz').style.display = "none";
  document.getElementById('chart_blueyellow').style.display = "none";

  document.getElementById('dashboardStatistics_6').style.display = "none";

  document.getElementById('chart_green_1').style.display = "none";
  document.getElementById('chart_enery_horiz').style.display = "none";
  document.getElementById('chart_blueyellow').style.display = "none";
  document.getElementById('dashboardStatistics_6').style.display = "none";

  document.getElementById('chart_energy').style.display = "none";
  document.getElementById('chart_meter_1').style.display = "none";
  document.getElementById('dashboardStatistics_4').style.display = "none";
  document.getElementById('dashboardStatistics_5').style.display = "none";
  document.getElementById('chart_months_1').style.display = "none";

  document.getElementsByClassName('extra-tabs')[0].style.display = "none";
  document.getElementsByClassName('extra-info')[0].style.display = "none";
}


function showExtraOneLast(elem){
  for (var i = 0; i < document.getElementsByClassName('extra-tabs-last')[0].childElementCount; i++) {
    document.getElementsByClassName('extra-tabs-last')[0].children[i].style.color = "#BFBFBF";
  }
  elem.style.color = "#ED7D32";

  // Hide lower

  document.getElementById('chart_months_2').style.display = "none";
  document.getElementById('chart_orangegreen').style.display = "none";

  // Show
  document.getElementById('chart_meter_2').style.display = "block";
  document.getElementById('dashboardStatistics_7').style.display = "block";
  document.getElementById('dashboardStatistics_8').style.display = "block";
  document.getElementById('dashboardStatistics_9').style.display = "block";
  document.getElementById('dashboardStatistics_10').style.display = "block";
  document.getElementById('dashboardStatistics_11').style.display = "block";

  document.getElementsByClassName('extra-tabs-last')[0].style.display = "flex";

}
function showExtraSecondLast(elem){
  for (var i = 0; i < document.getElementsByClassName('extra-tabs-last')[0].childElementCount; i++) {
    document.getElementsByClassName('extra-tabs-last')[0].children[i].style.color = "#BFBFBF";
  }
  elem.style.color = "#ED7D32";

  // Hide lower

  document.getElementById('chart_meter_2').style.display = "none";
  document.getElementById('dashboardStatistics_7').style.display = "none";
  document.getElementById('dashboardStatistics_8').style.display = "none";
  document.getElementById('dashboardStatistics_9').style.display = "none";
  document.getElementById('dashboardStatistics_10').style.display = "none";
  document.getElementById('dashboardStatistics_11').style.display = "none";

  // Show
  document.getElementById('chart_months_2').style.display = "block";
  document.getElementById('chart_orangegreen').style.display = "block";


}

function hideAllExtraLast(){
  document.getElementById('chart_meter_2').style.display = "none";
  document.getElementById('dashboardStatistics_7').style.display = "none";
  document.getElementById('dashboardStatistics_8').style.display = "none";
  document.getElementById('dashboardStatistics_9').style.display = "none";
  document.getElementById('dashboardStatistics_10').style.display = "none";
  document.getElementById('dashboardStatistics_11').style.display = "none";
  document.getElementById('chart_months_2').style.display = "none";
  document.getElementById('chart_orangegreen').style.display = "none";

  document.getElementsByClassName('extra-tabs-last')[0].style.display = "none";
}
function removePayAlert(){
  document.getElementById('levelPayModal').style.display = "none";
}

for (var i = 0; i < document.getElementsByClassName('level-dollar').length; i++) {
  if(document.getElementsByClassName('level-dollar')[i].style.display == 'flex'){
    document.getElementsByClassName('nextLevelButton')[i].addEventListener('click', function(){
        document.getElementById('levelPayModal').style.display = 'flex';
        var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
        if(width <= 1075){
          setTimeout(removePayAlert, 5000);
        }
     }, false);
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


for (var i = 0; i < document.getElementsByClassName('nextLevelButton_3').length; i++) {
  if(document.getElementsByClassName('nextLevelButton_3')[i].innerHTML.includes('SW')){
    for (var j = 0; j < document.getElementsByClassName('dashboard-statistics-table-data_3')[i].childElementCount; j++) {
      document.getElementsByClassName('dashboard-statistics-table-data_3')[i].children[j].setAttribute('style', 'background: #3C3838 !important');
    }
    document.getElementsByClassName('nextLevelButton_3')[i].addEventListener('click', function(){

      document.getElementsByClassName('info_cleanfilter_10')[0].style.display = "none";
      document.getElementsByClassName('level-temp-info')[0].style.display = "none";
      document.getElementsByClassName('level-temp')[0].style.display = "none";
      document.getElementsByClassName('level-home')[0].style.display = "none";
      document.getElementsByClassName('level-power')[0].style.display = "none";
      document.getElementById('swHideTh').style.display = "none";
      document.getElementById('yellowblueHideSw').style.display = "none";
      document.getElementById('dashboard-statistics-table_9').style.width = "30%";

      document.getElementsByClassName('level-lamp')[0].style.display = "flex";

     }, false);
  }
}

function hideSwOption(){
  document.getElementsByClassName('info_cleanfilter_10')[0].style.display = "table-cell";
  document.getElementsByClassName('level-temp-info')[0].style.display = "flex";
  document.getElementsByClassName('level-temp')[0].style.display = "flex";
  document.getElementsByClassName('level-home')[0].style.display = "flex";
  document.getElementsByClassName('level-power')[0].style.display = "flex";

  document.getElementById('swHideTh').style.display = "table-cell";
  document.getElementById('yellowblueHideSw').style.position = "block";
  document.getElementById('dashboard-statistics-table_9').style.width = "60%";

  document.getElementsByClassName('level-lamp')[0].style.display = "none";

  info_chart_16.destroy();

  info_chart_16 = Chart.Line('info_chart_16', {
    options: options_16,
    data: info_chart_16_data
  });

  Chart.defaults.global.plugins.datalabels.display = false;

}


let power_colors = ['text-grey', 'text-blue', 'text-green', 'text-yellow', 'text-lightred', 'text-purple'];

let giveColors = [];

for (let i = 0; i < document.getElementsByClassName('serverIco').length; i++) {
	giveColors.push(document.getElementsByClassName('serverIco')[i].classList.toString());
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


var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
if(width <= 1075){
  document.getElementById('level_1_tab').innerHTML = "<i class='fas fa-home text-orange' aria-hidden='true'></i>";
}

if(width >= 450){
  if(width <= 1075){
    document.getElementsByClassName('extra-tabs-last')[0].style.marginLeft = "10%";
    document.getElementsByClassName('extra-tabs')[0].style.marginLeft = "10%";
  }
}
