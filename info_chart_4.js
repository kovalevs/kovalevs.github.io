// Test data
randomIntegerArray = [];
for (var i = 0; i < 22; i++) {
  randomIntegerArray.push(randomInteger(0, 5000));
}
randomIntegerArray1 = [];
for (var i = 0; i < 22; i++) {
  randomIntegerArray1.push(randomInteger(0, 5000));
}
randomIntegerArray2 = [];
for (var i = 0; i < 22; i++) {
  randomIntegerArray2.push(randomInteger(0, 5000));
}
// End of test data

var blueColorArray = [];
for (var i = 0; i < 22; i++) {
  blueColorArray.push('#2F69CB');
}
var orangeColorArray = [];
for (var i = 0; i < 22; i++) {
  orangeColorArray.push('#FF6D00');
}
var greyColorArray = [];
for (var i = 0; i < 22; i++) {
  greyColorArray.push('#A7A7A7');
}



var info_chart_4_data = {
  // Test data
  labels: ["Shop 123", "Shop 23", "Shop 5", "Shop 4", "Shop 8", "Shop 6", "Shop 20", "Shop 2", "Shop 18", "Shop 9", "Shop 17", "Shop 23", "Shop 5", "Shop 44", "Shop 8", "Shop 61", "Shop 20", "Shop 74", "Shop 18", "Shop 9", "cire1"],
  datasets: [{
    label: "Energy Cost",
    backgroundColor: blueColorArray,
    borderColor: "rgb(70, 70, 70)",
    borderWidth: 1,
    hoverBackgroundColor: "rgba(255,99,132,0.4)",
    hoverBorderColor: "rgb(70, 70, 70)",
    data: randomIntegerArray,
  },{
    label: "Energy Cost",
    backgroundColor: orangeColorArray,
    borderColor: "rgb(70, 70, 70)",
    borderWidth: 1,
    hoverBackgroundColor: "rgba(255,99,132,0.4)",
    hoverBorderColor: "rgb(70, 70, 70)",
    data: randomIntegerArray1,
  },{
    label: "Energy Cost",
    backgroundColor: greyColorArray,
    borderColor: "rgb(70, 70, 70)",
    borderWidth: 1,
    hoverBackgroundColor: "rgba(255,99,132,0.4)",
    hoverBorderColor: "rgb(70, 70, 70)",
    data: randomIntegerArray2,
  }

]
};
var info_chart_4_link = {
  // Test data
  links: ["#1", "#2", "#5", "#4", "#8", "#6", "#20", "#2", "#18", "#9", "#17", "#23", "#5", "#44", "#8", "#61", "#20", "#74", "#18", "#9", "#1"],
};
var options_4 = {
  legend: {
    display: false
  },
  maintainAspectRatio: false,
  annotation: {
    annotations: [{
      type: 'line',
      mode: 'horizontal',
      scaleID: 'y-axis-0',
      value: 4,
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

var info_chart_4_clickCounter = 10;

var info_chart_4_start = info_chart_4_data.labels;
var info_chart_4_start_data = info_chart_4_data.datasets['0'].data;
var info_chart_4_start_colors = info_chart_4_data.datasets['0'].backgroundColor;

document.getElementById('showPrev_4_chart').style.visibility = "hidden";


function infoUpdateData_4(data_array, label_array, color_array) {
  info_chart_4_data.datasets['0'].data = data_array;
  info_chart_4_data.labels = label_array;
  info_chart_4_data.datasets['0'].backgroundColor = color_array;

  info_chart_4_start = info_chart_4_data.labels;
  info_chart_4_start_data = info_chart_4_data.datasets['0'].data;
  info_chart_4_start_colors = info_chart_4_data.datasets['0'].backgroundColor;

  info_chart_4_clickCounter = 10;
  document.getElementById('showNext_4_chart').style.visibility = "visible";
  document.getElementById('showPrev_4_chart').style.visibility = "hidden";
  infoSliceData_4();
  info_chart_4.update();
}

function infoSliceData_4(){
  info_chart_4_data.labels = info_chart_4_start.slice(info_chart_4_clickCounter-10, info_chart_4_clickCounter);
  info_chart_4_data.datasets['0'].data = info_chart_4_start_data.slice(info_chart_4_clickCounter-10, info_chart_4_clickCounter);
  info_chart_4_data.datasets['0'].backgroundColor = info_chart_4_start_colors.slice(info_chart_4_clickCounter-10, info_chart_4_clickCounter);
}
infoSliceData_4()

document.getElementById('showNext_4_chart').onclick = function(){
  if (info_chart_4_start.slice(info_chart_4_clickCounter, info_chart_4_clickCounter+10).length != 0){
    info_chart_4_data.labels = info_chart_4_start.slice(info_chart_4_clickCounter, info_chart_4_clickCounter+10);
    info_chart_4_data.datasets['0'].data = info_chart_4_start_data.slice(info_chart_4_clickCounter, info_chart_4_clickCounter+10);
    info_chart_4_data.datasets['0'].backgroundColor = info_chart_4_start_colors.slice(info_chart_4_clickCounter, info_chart_4_clickCounter+10);

    document.getElementById('showPrev_4_chart').style.visibility = "visible";

    info_chart_4_clickCounter += 10;

    info_chart_4.update();
  } if (info_chart_4_start.length <= info_chart_4_clickCounter){
    document.getElementById('showNext_4_chart').style.visibility = "hidden";
  }
}

document.getElementById('showPrev_4_chart').onclick = function(){
  if (info_chart_4_clickCounter != 10){
    document.getElementById('showNext_4_chart').style.visibility = "visible";

    info_chart_4_data.labels = info_chart_4_start.slice(info_chart_4_clickCounter-20, info_chart_4_clickCounter-10);
    info_chart_4_data.datasets['0'].data = info_chart_4_start_data.slice(info_chart_4_clickCounter-20, info_chart_4_clickCounter-10);
    info_chart_4_data.datasets['0'].backgroundColor = info_chart_4_start_colors.slice(info_chart_4_clickCounter-20, info_chart_4_clickCounter-10);

    info_chart_4_clickCounter -= 10;

    info_chart_4.update();
  }
  if (info_chart_4_clickCounter == 10){
    document.getElementById('showPrev_4_chart').style.visibility = "hidden";
  }

}

var info_chart_4 = Chart.Bar('info_chart_4', {
  options: options_4,
  data: info_chart_4_data
});


var infoCanvas_4 = document.getElementById("info_chart_4");

infoCanvas_4.onclick = function(e) {
   var slice = info_chart_4.getElementAtEvent(e);
   if (!slice.length) return;
   var link = slice[0]._model.label;
   for (var i = 0; i < info_chart_4_link.links.length; i++) {
     if(link == info_chart_4_data.labels[i]){
       window.open(info_chart_4_link.links[i]);
     }
   }
}
