var info_chart_16_data = {
  // Test data
  labels: chart_9_data_hours_12,
  datasets: [{
    label: "kWh",
    backgroundColor: 'rgb(255, 0, 0)',
    borderColor: 'rgb(255, 0, 0)',
    pointRadius: 0,
    borderWidth: 7,
    pointHitRadius: 10,
    fill: false,
    hoverBackgroundColor: "rgba(255,99,132,0.4)",
    hoverBorderColor: "rgb(70, 70, 70)",
    data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 7, 6, 7, 10, 12, 14, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 50, 60, 80],
  }]
};
var info_chart_16_link = {
  // Test data
  links: ["#1", "#2", "#5", "#4", "#8", "#6", "#20", "#2", "#18", "#9", "#17", "#23", "#5", "#44", "#8", "#61", "#20", "#74", "#18", "#9", "#1"],
};
var options_16 = {
  legend: {
    display: false
  },
  maintainAspectRatio: false,
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


var info_chart_16 = Chart.Line('info_chart_16', {
  options: options_16,
  data: info_chart_16_data
});


var infoCanvas_16 = document.getElementById("info_chart_16");

infoCanvas_16.onclick = function(e) {
   var slice = info_chart_16.getElementAtEvent(e);
   if (!slice.length) return;
   var link = slice[0]._model.label;
   for (var i = 0; i < info_chart_16_link.links.length; i++) {
     if(link == info_chart_16_data.labels[i]){
       window.open(info_chart_16_link.links[i]);
     }
   }
}
