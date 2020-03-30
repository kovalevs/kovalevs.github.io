// Test data
var chart_3_data = [10, 7, 10, -17, 15, 10, 6, 11, -2, -16, 17, 10];
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

var home_chart_3_data = {
  // Test data
  labels: chart_3_data_month,
  datasets: [
    {
    type: 'line',
    label: "Temperature (Celsius)",
    fill: false,
    data: chart_3_data,
    borderColor: "#408224",
    borderWidth: 7,
    backgroundColor: "#408224",
    pointRadius: 0,
    tension: 0.1,
    },{
    label: "Energy rate",
    backgroundColor: ['#9CD488', '#9CD488', '#9CD488', '#9CD488', '#9CD488', '#9CD488', '#9CD488', '#9CD488', '#9CD488', '#9CD488', '#9CD488', '#9CD488'],
    borderColor: "rgb(70, 70, 70)",
    borderWidth: 1,
    hoverBackgroundColor: "rgba(255,99,132,0.4)",
    hoverBorderColor: "rgb(70, 70, 70)",
    data: chart_3_data
  }]
};
var home_chart_3_link = {
  // Test data
  links: ["#1", "#2", "#3", "#4", "#5", "#6", "#7", "#8", "#9", "#10", "#11", "#12"],
};
var options_3 = {
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


var home_chart_3 = Chart.Bar('home_chart_3', {
  options: options_3,
  data: home_chart_3_data
});


var homeCanvas_3 = document.getElementById("home_chart_3");

homeCanvas_3.onclick = function(e) {
   var slice = home_chart_3.getElementAtEvent(e);
   if (!slice.length) return;
   var link = slice[0]._model.label;
   for (var i = 0; i < home_chart_3_link.links.length; i++) {
     if(link == home_chart_3_data.labels[i]){
       window.open(home_chart_3_link.links[i]);
     }
   }
}
