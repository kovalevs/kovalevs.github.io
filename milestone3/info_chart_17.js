// Test data
var chart_17_data = [24, 30, 8, 20, 21, 25, 26, 20, 24, 2, 12, 1, 7, 15, 12, 24, 17, 25, 14, 1, 2, 5, 0, 11, 11, 3, 8, 18, 30, 4, 25, 22, 16, 3, 15, 18, 5, 27, 12, 28, 14, 15, 6, 28, 7, 5, 8, 21];
var chart_17_vary_data = ['Nan', 'Nan', 8, 20, 21, 25, 26, 20, 24, 'Nan', 12, 1, 7, 15, 12, 24, 'Nan', 'Nan', 'Nan', 1, 2, 'Nan', 0, 11, 11, 3, 8, 18, 30, 4, 'Nan', 'Nan', 16, 'Nan', 15, 18, 5, 27, 12, 28, 14, 15, 6, 'Nan', 7, 5, 8, 21];

var chart_17_data_month = ["00:00", "00:30", "01:00", "01:30", "02:00", "02:30", "03:00", "03:30", "04:00", "04:30", "05:00", "05:30", "06:00", "06:30", "07:00", "07:30", "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00", "23:30"];

var chart_17_data_month_temp = [];


var info_chart_17_data = {
  // Test data
  labels: chart_9_data_hours_12,
  datasets: [
    {
    type: 'line',
    label: "Power Factor",
    fill: false,
    data: chart_17_data,
    borderColor: "#CE5800",
    borderWidth: 7,
    backgroundColor: "#CE5800",
    pointHitRadius: 10,
    pointRadius: 0,
    tension: 0.1,
  },{
  type: 'line',
  label: "Power (W)",
  fill: false,
  data: chart_17_vary_data,
  borderColor: "#FFC8A6",
  borderWidth: 7,
  backgroundColor: "#FFC8A6",
  pointHitRadius: 10,
  pointRadius: 0,
  tension: 0.1,
  spanGaps: false,
  }]
};
var info_chart_17_link = {
  // Test data
  links: ["#1", "#2", "#3", "#4", "#5", "#6", "#7", "#8", "#9", "#10", "#11", "#12"],
};
var options_17 = {
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


var info_chart_17 = Chart.Bar('info_chart_17', {
  options: options_17,
  data: info_chart_17_data
});


var infoCanvas_17 = document.getElementById("info_chart_17");

infoCanvas_17.onclick = function(e) {
   var slice = info_chart_17.getElementAtEvent(e);
   if (!slice.length) return;
   var link = slice[0]._model.label;
   for (var i = 0; i < info_chart_17_link.links.length; i++) {
     if(link == info_chart_17_data.labels[i]){
       window.open(info_chart_17_link.links[i]);
     }
   }
}
