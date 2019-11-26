// Test data
for (var i = 0; i < 5; i++) {
  document.getElementsByClassName('dashboard-statistics-table-data_11')[0].children[i].style.color = "#2B4820";
}
document.getElementsByClassName('dashboard-statistics-table-data_11')[0].children[6].innerText = "";
document.getElementsByClassName('dashboard-statistics-table-data_11')[1].children[4].innerText = "";
document.getElementsByClassName('dashboard-statistics-table-data_11')[2].children[4].innerText = "";

var temp_hide = document.getElementsByClassName('dashboard-statistics-table-data_11')[2].children[6];
temp_hide.children[1].style.display = "none";

for (var i = 0; i < 5; i++) {
  document.getElementsByClassName('dashboard-statistics-table-data_11')[1].children[i].style.color = "#DE0000";
}
for (var i = 0; i < 5; i++) {
  document.getElementsByClassName('dashboard-statistics-table-data_11')[2].children[i].style.color = "#C59000";
}

var chart_18_data = [24, 30, 8, 20, 21, 25, 26, 20, 24, 2, 12, 1, 7, 15, 12, 24, 17, 25, 14, 1, 2, 5, 0, 11, 11, 3, 8, 18, 30, 4, 25, 22, 16, 3, 15, 18, 5, 27, 12, 28, 14, 15, 6, 28, 7, 5, 8, 21];
var chart_18_vary_data = ['Nan', 'Nan', 8, 20, 21, 25, 26, 20, 24, 'Nan', 12, 1, 7, 15, 12, 24, 'Nan', 'Nan', 'Nan', 1, 2, 'Nan', 0, 11, 11, 3, 8, 18, 30, 4, 'Nan', 'Nan', 16, 'Nan', 15, 18, 5, 27, 12, 28, 14, 15, 6, 'Nan', 7, 5, 8, 21];

var chart_18_data_hours = ["00:00", "00:30", "01:00", "01:30", "02:00", "02:30", "03:00", "03:30", "04:00", "04:30", "05:00", "05:30", "06:00", "06:30", "07:00", "07:30", "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00", "23:30"];


var chart_15_data_month = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var chart_15_data_month_temp = [];


var currentMonth_2 = new Date().getDay();

function moveMonth(){
  var chart_15_data_month_first = chart_15_data_month[0];
  for (var i = 0; i < 7; i++) {
    if(i != 6){
      chart_15_data_month[i] = chart_15_data_month[i+1];
    } else {
      chart_15_data_month[i] = chart_15_data_month_first;
    }
  }
}
for (var i = 0; i < currentMonth_2+1; i++) {
  moveMonth();
}

chart_15_data_month[chart_15_data_month.length-1]="Today";

let info_copydata = document.getElementsByClassName('info-chart-subtab_2')[0].cloneNode(true);

for (var i = 0; i < 7; i++) {
  info_copydata = document.getElementsByClassName('info-chart-subtab_2')[0].cloneNode(true);

  document.getElementsByClassName('info-chart-subtabs_2')[0].appendChild(info_copydata);
  document.getElementsByClassName('info-chart-subtab_2')[i].innerText = chart_15_data_month[i];
}

info_copydata = document.getElementsByClassName('info-chart-subtab_2')[0].cloneNode(true);
document.getElementsByClassName('info-chart-subtabs_2')[0].appendChild(info_copydata);
document.getElementsByClassName('info-chart-subtab_2')[document.getElementsByClassName('info-chart-subtab_2').length-2].innerText = 'Last 12 hrs';

document.getElementsByClassName('info-chart-subtab_2')[document.getElementsByClassName('info-chart-subtab_2').length-1].style.display = "none";

function selectedWhite_2(elem){

  var fifteenChartLabels = [];
  var sixteenChartLabels = [];
  var seventeenChartLabels = [];
  var eighteenChartLabels = [];


  for (var i = 0; i < 5 + 1; i++) {
    if(elem == document.getElementsByClassName('info-chart-subtab_2')[i]){
      fifteenChartLabels = ["00:00", "00:30", "01:00", "01:30", "02:00", "02:30", "03:00", "03:30", "04:00", "04:30", "05:00", "05:30", "06:00", "06:30", "07:00", "07:30", "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00", "23:30"];
      sixteenChartLabels = ["00:00", "00:30", "01:00", "01:30", "02:00", "02:30", "03:00", "03:30", "04:00", "04:30", "05:00", "05:30", "06:00", "06:30", "07:00", "07:30", "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00", "23:30"];
      seventeenChartLabels = ["00:00", "00:30", "01:00", "01:30", "02:00", "02:30", "03:00", "03:30", "04:00", "04:30", "05:00", "05:30", "06:00", "06:30", "07:00", "07:30", "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00", "23:30"];
      eighteenChartLabels = ["00:00", "00:30", "01:00", "01:30", "02:00", "02:30", "03:00", "03:30", "04:00", "04:30", "05:00", "05:30", "06:00", "06:30", "07:00", "07:30", "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00", "23:30"];
    }
  }

  if(elem == document.getElementsByClassName('info-chart-subtab_2')[6]){
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
        fifteenChartLabels.push(globalHours[i]);
        sixteenChartLabels.push(globalHours[i]);
        seventeenChartLabels.push(globalHours[i]);
        eighteenChartLabels.push(globalHours[i]);
        break;
      } else {
        fifteenChartLabels.push(globalHours[i]);
        sixteenChartLabels.push(globalHours[i]);
        seventeenChartLabels.push(globalHours[i]);
        eighteenChartLabels.push(globalHours[i]);
      }
    }
  }

  if(elem == document.getElementsByClassName('info-chart-subtab_2')[7]){
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
            fifteenChartLabels.push(globalHours_full[currentHours_i]);
            sixteenChartLabels.push(globalHours_full[currentHours_i]);
            seventeenChartLabels.push(globalHours_full[currentHours_i]);
            eighteenChartLabels.push(globalHours_full[currentHours_i]);
            currentHours_i -= 1;
        } else {
          fifteenChartLabels.push(globalHours_full[temp_op]);
          sixteenChartLabels.push(globalHours_full[temp_op]);
          seventeenChartLabels.push(globalHours_full[temp_op]);
          eighteenChartLabels.push(globalHours_full[temp_op]);
          currentHours_i = -1;
          temp_op -= 1;
        }
      }

    }

    fifteenChartLabels = fifteenChartLabels.reverse();
    sixteenChartLabels = sixteenChartLabels.reverse();
    seventeenChartLabels = seventeenChartLabels.reverse();
    eighteenChartLabels = eighteenChartLabels.reverse();

  }


  // Set data here

  fifteenChartData = [];
  for (var i = 0; i < 48; i++) {
   fifteenChartData.push(randomInteger(-60, 60));
  }



  info_chart_15_data.datasets['0'].data = fifteenChartData;
  info_chart_15_data.labels = fifteenChartLabels;

  info_chart_15_start = info_chart_15_data.labels;
  info_chart_15_start_data = info_chart_15_data.datasets['0'].data;

  info_chart_15.update();


  sixteenChartData = [];
  for (var i = 0; i < 48; i++) {
   sixteenChartData.push(i + randomInteger(3, 5));
  }



  info_chart_16_data.datasets['0'].data = sixteenChartData;
  info_chart_16_data.labels = sixteenChartLabels;

  info_chart_16_start = info_chart_16_data.labels;
  info_chart_16_start_data = info_chart_16_data.datasets['0'].data;

  info_chart_16.update();

  seventeenChartData = [];
  for (var i = 0; i < 48; i++) {
   seventeenChartData.push(i + randomInteger(3, 5));
  }



  info_chart_17_data.datasets['0'].data = seventeenChartData;
  info_chart_17_data.labels = seventeenChartLabels;

  info_chart_17_start = info_chart_17_data.labels;
  info_chart_17_start_data = info_chart_17_data.datasets['0'].data;

  info_chart_17.update();

  eighteenChartData = [];
  for (var i = 0; i < 48; i++) {
   eighteenChartData.push(i + randomInteger(3, 5));
  }



  info_chart_18_data.datasets['0'].data = eighteenChartData;
  info_chart_18_data.labels = eighteenChartLabels;

  info_chart_18_start = info_chart_18_data.labels;
  info_chart_18_start_data = info_chart_18_data.datasets['0'].data;

  info_chart_18.update();




  for (var i = 0; i < document.getElementsByClassName('info-chart-subtab_2').length; i++) {
    document.getElementsByClassName('info-chart-subtab_2')[i].style.color = "#595959"
  }
  elem.style.color = "white";
}
document.getElementsByClassName('info-chart-subtab_2')[document.getElementsByClassName('info-chart-subtab_2').length-2].style.color = "white"



var info_chart_18_data = {
  // Test data
  labels: chart_9_data_hours_12,
  datasets: [
    {
    type: 'line',
    label: "Current (A)",
    fill: false,
    data: chart_18_data,
    borderColor: "#528135",
    borderWidth: 7,
    backgroundColor: "#528135",
    pointHitRadius: 10,
    pointRadius: 0,
    tension: 0.1,
  },{
  type: 'line',
  label: "Volt Amp",
  fill: false,
  data: chart_18_vary_data,
  borderColor: "#C5E0B3",
  borderWidth: 7,
  backgroundColor: "#C5E0B3",
  pointHitRadius: 10,
  pointRadius: 0,
  tension: 0.1,
  spanGaps: false,
  }]
};
var info_chart_18_link = {
  // Test data
  links: ["#1", "#2", "#3", "#4", "#5", "#6", "#7", "#8", "#9", "#10", "#11", "#12"],
};
var options_18 = {
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


var info_chart_18 = Chart.Bar('info_chart_18', {
  options: options_18,
  data: info_chart_18_data
});


var infoCanvas_18 = document.getElementById("info_chart_18");

infoCanvas_18.onclick = function(e) {
   var slice = info_chart_18.getElementAtEvent(e);
   if (!slice.length) return;
   var link = slice[0]._model.label;
   for (var i = 0; i < info_chart_18_link.links.length; i++) {
     if(link == info_chart_18_data.labels[i]){
       window.open(info_chart_18_link.links[i]);
     }
   }
}

for (var i = 0; i < document.getElementsByClassName('align_end').length; i++) {
  document.getElementsByClassName('align_end')[0].scrollTo(pageYOffset, 200);
}
