// Test data
var chart_11_data = [10, 7, 10, -17, 15, 10, 6, 11, -2, -16, 17, 10];
var chart_11_data_month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

var chart_11_data_month_temp = [];


var currentMonth = new Date().getMonth();


var backgroundColorInfo_11 = [];

for (var i = 0; i < chart_11_data.length; i++) {
  if(chart_11_data[i] > 0){
    backgroundColorInfo_11.push('#9CD488');
  } else {
    backgroundColorInfo_11.push('#D00001');
  }
}

function moveMonth(){
  var chart_11_data_month_first = chart_11_data_month[0];
  for (var i = 0; i < 12; i++) {
    if(i != 11){
      chart_11_data_month[i] = chart_11_data_month[i+1];
    } else {
      chart_11_data_month[i] = chart_11_data_month_first;
    }
  }
}
for (var i = 0; i < currentMonth+1; i++) {
  moveMonth();
}

var info_chart_11_data = {
  // Test data
  labels: chart_11_data_month,
  datasets: [
    {
    type: 'line',
    label: " $ Save",
    fill: false,
    data: chart_11_data,
    borderColor: "#408224",
    borderWidth: 7,
    backgroundColor: "#408224",
    pointRadius: 0,
    tension: 0.1,
    },{
    label: " % Save",
    backgroundColor: backgroundColorInfo_11,
    borderColor: "rgb(70, 70, 70)",
    borderWidth: 1,
    hoverBackgroundColor: "rgba(255,99,132,0.4)",
    hoverBorderColor: "rgb(70, 70, 70)",
    data: chart_11_data
  }]
};
var info_chart_11_link = {
  // Test data
  links: ["#1", "#2", "#3", "#4", "#5", "#6", "#7", "#8", "#9", "#10", "#11", "#12"],
};
var options_11 = {
  legend: {
    display: false
  },
  maintainAspectRatio: false,
  scales: {
    yAxes: [{
        ticks: {
            fontColor: '#858585',
            fontSize: 15,
            max: 25,
            min: -20,
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
          max: 400,
          min: -300,
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
          fontColor: 'white',
          fontSize: 15,
          padding: 20,
      },
      barPercentage: 1.0,
      categoryPercentage: 1.0,
      gridLines: {
        display: false
      }
    }]
  }
};


var info_chart_11 = Chart.Bar('info_chart_11', {
  options: options_11,
  data: info_chart_11_data
});


var infoCanvas_11 = document.getElementById("info_chart_11");

infoCanvas_11.onclick = function(e) {
   var slice = info_chart_11.getElementAtEvent(e);
   if (!slice.length) return;
   var link = slice[0]._model.label;
   for (var i = 0; i < info_chart_11_link.links.length; i++) {
     if(link == info_chart_11_data.labels[i]){
       window.open(info_chart_11_link.links[i]);
     }
   }
}
