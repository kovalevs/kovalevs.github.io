// Test data
var chart_9_data = [24, 30, 8, 20, 21, 25, 26, 20, 24, 10, 12, 11, 17, 15, 12, 24, 17, 25, 14, 11, 21, 15, 10, 11, 11, 17, 8, 18, 30, 14, 25, 22, 16, 3, 15, 18, 15, 27, 12, 28, 14, 15, 6, 28, 7, 15, 8, 21];
var chart_9_vary_data = ['Nan', 'Nan', 8, 20, 21, 25, 26, 20, 24, 'Nan', 12, 10, 7, 15, 12, 24, 'Nan', 'Nan', 'Nan', 10, 21, 'Nan', 11, 11, 11, 14, 8, 18, 30, 4, 'Nan', 'Nan', 16, 'Nan', 15, 18, 15, 27, 12, 28, 14, 15, 6, 'Nan', 7, 15, 8, 21];

var chart_9_data_hours = ["00:00", "00:30", "01:00", "01:30", "02:00", "02:30", "03:00", "03:30", "04:00", "04:30", "05:00", "05:30", "06:00", "06:30", "07:00", "07:30", "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00", "23:30"];

var globalHours = ["00:00", "00:30", "01:00", "01:30", "02:00", "02:30", "03:00", "03:30", "04:00", "04:30", "05:00", "05:30", "06:00", "06:30", "07:00", "07:30", "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00", "23:30"];

var globalHours_full = ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];

var chart_9_data_month = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var chart_9_data_month_temp = [];

current_minute = date.getMinutes();

var chart_9_data_hours_12 = []

current_hour = date.getHours();

if(current_hour < 10){
  current_hour = '0' + current_hour.toString();
} else {
  current_hour = current_hour.toString();
}
current_string = current_hour + ':' + "00";

var currentHours_i = 0;

for (var i = 0; i < globalHours_full.length; i++) {
  if(globalHours_full[i] == current_string){
    currentHours_i = i;
  }
}

var temp_op = 23;

for (var i = 0; i < 12; i++) {
  if(currentHours_i < 24){
    if(currentHours_i != -1){
        chart_9_data_hours_12.push(globalHours_full[currentHours_i]);
        currentHours_i -= 1;
    } else {
      chart_9_data_hours_12.push(globalHours_full[temp_op]);
      currentHours_i = -1;
      temp_op -= 1;
    }
  }

}

chart_9_data_hours_12 = chart_9_data_hours_12.reverse();


var currentMonth_1 = new Date().getDay();

function moveMonth(){
  var chart_9_data_month_first = chart_9_data_month[0];
  for (var i = 0; i < 7; i++) {
    if(i != 6){
      chart_9_data_month[i] = chart_9_data_month[i+1];
    } else {
      chart_9_data_month[i] = chart_9_data_month_first;
    }
  }
}
for (var i = 0; i < currentMonth_1+1; i++) {
  moveMonth();
}

chart_9_data_month[chart_9_data_month.length-1]="Today";

let info_data = document.getElementsByClassName('info-chart-subtab')[0].cloneNode(true);

for (var i = 0; i < 7; i++) {
  info_data = document.getElementsByClassName('info-chart-subtab')[0].cloneNode(true);

  document.getElementsByClassName('info-chart-subtabs')[0].appendChild(info_data);
  document.getElementsByClassName('info-chart-subtab')[i].innerText = chart_9_data_month[i];
}

info_data = document.getElementsByClassName('info-chart-subtab')[0].cloneNode(true);
document.getElementsByClassName('info-chart-subtabs')[0].appendChild(info_data);
document.getElementsByClassName('info-chart-subtab')[document.getElementsByClassName('info-chart-subtab').length-2].innerText = 'Last 12 hrs';

document.getElementsByClassName('info-chart-subtab')[document.getElementsByClassName('info-chart-subtab').length-1].style.display = "none";

function selectedWhite(elem){
  var nineChartLabels = [];
  var tenChartLabels = [];

  for (var i = 0; i < 5 + 1; i++) {
    if(elem == document.getElementsByClassName('info-chart-subtab')[i]){
      nineChartLabels = ["00:00", "00:30", "01:00", "01:30", "02:00", "02:30", "03:00", "03:30", "04:00", "04:30", "05:00", "05:30", "06:00", "06:30", "07:00", "07:30", "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00", "23:30"];
      tenChartLabels = ["00:00", "00:30", "01:00", "01:30", "02:00", "02:30", "03:00", "03:30", "04:00", "04:30", "05:00", "05:30", "06:00", "06:30", "07:00", "07:30", "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00", "23:30"];
    }
  }

  if(elem == document.getElementsByClassName('info-chart-subtab')[6]){
    current_hour = date.getHours();
    current_minute = date.getMinutes();

    if(current_minute < 30){
      current_minute = '00';
    } else {
      current_minute = '30';
    }
    if(current_hour < 10){
      current_hour = '0' + current_hour.toString();
    } else {
      current_hour = current_hour.toString();
    }
    current_string = current_hour + ':' + current_minute;

    for (var i = 0; i < globalHours.length; i++) {
      if(globalHours[i] == current_string){
        nineChartLabels.push(globalHours[i]);
        tenChartLabels.push(globalHours[i]);
        break;
      } else {
        nineChartLabels.push(globalHours[i]);
        tenChartLabels.push(globalHours[i]);
      }
    }
  }
  if(elem == document.getElementsByClassName('info-chart-subtab')[7]){
    current_hour = date.getHours();

    if(current_hour < 10){
      current_hour = '0' + current_hour.toString();
    } else {
      current_hour = current_hour.toString();
    }
    current_string = current_hour + ':' + "00";

    var currentHours_i = 0;

    for (var i = 0; i < globalHours_full.length; i++) {
      if(globalHours_full[i] == current_string){
        currentHours_i = i;
      }
    }
    temp_op = 23;

    for (var i = 0; i < 12; i++) {
      if(currentHours_i < 24){
        if(currentHours_i != -1){
            nineChartLabels.push(globalHours_full[currentHours_i]);
            tenChartLabels.push(globalHours_full[currentHours_i]);
            currentHours_i -= 1;
        } else {
          nineChartLabels.push(globalHours_full[temp_op]);
          tenChartLabels.push(globalHours_full[temp_op]);
          currentHours_i = -1;
          temp_op -= 1;
        }
      }

    }

    nineChartLabels = nineChartLabels.reverse();
    tenChartLabels = tenChartLabels.reverse();

  }



  // Set month data here

  nineChartData = [];
  for (var i = 0; i < 45; i++) {
   nineChartData.push(randomInteger(10, 60));
  }



  info_chart_9_data.datasets['0'].data = nineChartData;
  info_chart_9_data.labels = nineChartLabels;

  info_chart_9_start = info_chart_9_data.labels;
  info_chart_9_start_data = info_chart_9_data.datasets['0'].data;

  info_chart_9.update();

  tenChartData = [];
  for (var i = 0; i < 45; i++) {
   tenChartData.push(randomInteger(-60, 60));
  }



  info_chart_10_data.datasets['0'].data = tenChartData;
  info_chart_10_data.labels = tenChartLabels;

  info_chart_10_start = info_chart_10_data.labels;
  info_chart_10_start_data = info_chart_10_data.datasets['0'].data;

  info_chart_10.update();




  for (var i = 0; i < document.getElementsByClassName('info-chart-subtab').length; i++) {
    document.getElementsByClassName('info-chart-subtab')[i].style.color = "#595959"
  }
  elem.style.color = "white";
}
document.getElementsByClassName('info-chart-subtab')[document.getElementsByClassName('info-chart-subtab').length-2].style.color = "white"


var info_chart_9_data = {
  // Test data
  labels: chart_9_data_hours_12,
  datasets: [
    {
    type: 'line',
    label: "Power Factor",
    fill: false,
    data: chart_9_data,
    borderColor: "#CE5800",
    borderWidth: 7,
    backgroundColor: "#CE5800",
    pointRadius: 0,
    tension: 0.1,
    pointHitRadius: 10,
  },{
  type: 'line',
  label: "Power (watt)",
  fill: false,
  data: chart_9_vary_data,
  borderColor: "#FFC8A6",
  borderWidth: 7,
  backgroundColor: "#FFC8A6",
  pointRadius: 0,
  tension: 0.1,
  spanGaps: false,
  pointHitRadius: 10,
  }]
};
var info_chart_9_link = {
  // Test data
  links: ["#1", "#2", "#3", "#4", "#5", "#6", "#7", "#8", "#9", "#10", "#11", "#12"],
};
var options_9 = {
  legend: {
    display: false
  },
  maintainAspectRatio: false,
  scales: {
    yAxes: [{
        ticks: {
            fontColor: '#858585',
            fontSize: 15,
            padding: 10,
        },
        barPercentage: 1.0,
        position: "left",
        id: "y-axis-1",
        barPercentage: 1.0,
        categoryPercentage: 1.0,
        stacked: true,
        gridLines: {
          drawBorder: false,
          display: true,
          color: "#666666"
        }
      }, {
      ticks: {
          fontColor: '#858585',
          fontSize: 15,
      },
      barPercentage: 1.0,
      position: "right",
      id: "y-axis-0",
      barPercentage: 1.0,
      categoryPercentage: 1.0,
      stacked: true,
      gridLines: {
        drawBorder: false,
        display: false,
        color: "#666666",
      }
    }
  ],

    xAxes: [{
      ticks: {
          fontColor: '#858585',
          fontSize: 15,
          padding: 20,
          callback: function(tick, index, array) {
            return (index % 2 && index != array.length-1 && array.length > 12) ? "" : tick;
          },
      },
      barPercentage: 1.0,
      categoryPercentage: 1.0,
      gridLines: {
        display: false
      }
    }]
  }
};


var info_chart_9 = Chart.Bar('info_chart_9', {
  options: options_9,
  data: info_chart_9_data
});


var infoCanvas_9 = document.getElementById("info_chart_9");

infoCanvas_9.onclick = function(e) {
   var slice = info_chart_9.getElementAtEvent(e);
   if (!slice.length) return;
   var link = slice[0]._model.label;
   for (var i = 0; i < info_chart_9_link.links.length; i++) {
     if(link == info_chart_9_data.labels[i]){
       window.open(info_chart_9_link.links[i]);
     }
   }
}
