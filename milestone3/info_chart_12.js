// Test data
randomIntegerArray = [];
for (var i = 0; i < 12; i++) {
  randomIntegerArray.push(randomInteger(0, 5000));
}
randomIntegerArray1 = [];
for (var i = 0; i < 12; i++) {
  randomIntegerArray1.push(randomInteger(0, 5000));
}
randomIntegerArray2 = [];
for (var i = 0; i < 12; i++) {
  randomIntegerArray2.push(randomInteger(0, 5000));
}
// End of test data

var blueColorArray = [];
for (var i = 0; i < 12; i++) {
  blueColorArray.push('#2F69CB');
}
var orangeColorArray = [];
for (var i = 0; i < 12; i++) {
  orangeColorArray.push('#FF6D00');
}
var greyColorArray = [];
for (var i = 0; i < 12; i++) {
  greyColorArray.push('#A7A7A7');
}



var info_chart_12_data = {
  // Test data
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [{
    label: "Aircon cost",
    backgroundColor: blueColorArray,
    borderColor: "rgb(70, 70, 70)",
    borderWidth: 1,
    hoverBackgroundColor: "rgba(255,99,132,0.4)",
    hoverBorderColor: "rgb(70, 70, 70)",
    data: randomIntegerArray,
  },{
    label: "Switch cost",
    backgroundColor: orangeColorArray,
    borderColor: "rgb(70, 70, 70)",
    borderWidth: 1,
    hoverBackgroundColor: "rgba(255,99,132,0.4)",
    hoverBorderColor: "rgb(70, 70, 70)",
    data: randomIntegerArray1,
  },{
    label: "Other cost",
    backgroundColor: greyColorArray,
    borderColor: "rgb(70, 70, 70)",
    borderWidth: 1,
    hoverBackgroundColor: "rgba(255,99,132,0.4)",
    hoverBorderColor: "rgb(70, 70, 70)",
    data: randomIntegerArray2,
  }

]
};
var info_chart_12_link = {
  // Test data
  links: ["#1", "#2", "#5", "#4", "#8", "#6", "#20", "#2", "#18", "#9", "#17", "#23", "#5", "#44", "#8", "#61", "#20", "#74", "#18", "#9", "#1"],
};
var options_12 = {
  legend: {
    display: false
  },
  maintainAspectRatio: false,
  scales: {
    yAxes: [{
      ticks: {
          fontColor: '#787878',
          beginAtZero: true,
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
          fontColor: 'white',
          beginAtZero: true,
      },
      stacked: true,
      barPercentage: 1.0,
      categoryPercentage: 1.0,
      gridLines: {
        display: false
      }
    }]
  }
};


var ctx = document.getElementById('info_chart_12').getContext("2d");

var info_chart_12 = new Chart(ctx, {
    type: 'horizontalBar',
    data: info_chart_12_data,
    options: options_12
});


var infoCanvas_12 = document.getElementById("info_chart_12");

infoCanvas_12.onclick = function(e) {
   var slice = info_chart_12.getElementAtEvent(e);
   if (!slice.length) return;
   var link = slice[0]._model.label;
   for (var i = 0; i < info_chart_12_link.links.length; i++) {
     if(link == info_chart_12_data.labels[i]){
       window.open(info_chart_12_link.links[i]);
     }
   }
}
