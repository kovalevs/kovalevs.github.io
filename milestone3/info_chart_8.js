// TEST DATA
var chart_8_colors = ['#346ED0', '#346ED0', '#346ED0', '#FC7A00', '#FC7A00', '#BFBFBF', '#FC7A00', '#FC7A00', '#346ED0', '#346ED0', '#346ED0', '#346ED0'];

// End of test data

var info_chart_8_data = {
  // Test data
  labels: ["AC1", 'AC2', 'Air conditioner', 'Switch 1', 'ON/OFF switch 2', 'Others', 'AC3', 'AC4', 'AC5', 'AC6', 'AC7', 'AC8'],
  datasets: [{
    label: "Energy rate",
    backgroundColor: chart_8_colors,
    borderColor: "rgb(70, 70, 70)",
    borderWidth: 1,
    hoverBackgroundColor: "rgba(255,99,132,0.4)",
    hoverBorderColor: "rgb(70, 70, 70)",
    data: randomIntegerArray,
  }]
};
var info_chart_8_link = {
  // Test data
  links: ["#1", "#2", "#5", "#4", "#8", "#6", "#20", "#2", "#18", "#9", "#17", "#23", "#5", "#44", "#8", "#61", "#20", "#74", "#18", "#9", "#1"],
};
var options_8 = {
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
        xAdjust: 5,
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
      stacked: false,
      barPercentage: 1.0,
      categoryPercentage: 1.0,
      gridLines: {
        display: false
      }
    }]
  }
};

var info_chart_8_clickCounter = 5;

var info_chart_8_start = info_chart_8_data.labels;
var info_chart_8_start_data = info_chart_8_data.datasets['0'].data;
var info_chart_8_start_colors = info_chart_8_data.datasets['0'].backgroundColor;

document.getElementById('showPrev_8_chart').style.visibility = "hidden";


function infoUpdateData_8(data_array, label_array, color_array) {
  info_chart_8_data.datasets['0'].data = data_array;
  info_chart_8_data.labels = label_array;
  info_chart_8_data.datasets['0'].backgroundColor = color_array;

  info_chart_8_start = info_chart_8_data.labels;
  info_chart_8_start_data = info_chart_8_data.datasets['0'].data;
  info_chart_8_start_colors = info_chart_8_data.datasets['0'].backgroundColor;

  info_chart_8_clickCounter = 5;
  document.getElementById('showNext_8_chart').style.visibility = "visible";
  document.getElementById('showPrev_8_chart').style.visibility = "hidden";
  infoSliceData_8();
  info_chart_8.update();
}

function infoSliceData_8(){
  info_chart_8_data.labels = info_chart_8_start.slice(info_chart_8_clickCounter-5, info_chart_8_clickCounter);
  info_chart_8_data.datasets['0'].data = info_chart_8_start_data.slice(info_chart_8_clickCounter-5, info_chart_8_clickCounter);
  info_chart_8_data.datasets['0'].backgroundColor = info_chart_8_start_colors.slice(info_chart_8_clickCounter-5, info_chart_8_clickCounter);
}
infoSliceData_8()

document.getElementById('showNext_8_chart').onclick = function(){
  if (info_chart_8_start.slice(info_chart_8_clickCounter, info_chart_8_clickCounter+5).length != 0){
    info_chart_8_data.labels = info_chart_8_start.slice(info_chart_8_clickCounter, info_chart_8_clickCounter+5);
    info_chart_8_data.datasets['0'].data = info_chart_8_start_data.slice(info_chart_8_clickCounter, info_chart_8_clickCounter+5);
    info_chart_8_data.datasets['0'].backgroundColor = info_chart_8_start_colors.slice(info_chart_8_clickCounter, info_chart_8_clickCounter+5);

    document.getElementById('showPrev_8_chart').style.visibility = "visible";

    info_chart_8_clickCounter += 5;

    info_chart_8.update();
  } if (info_chart_8_start.length <= info_chart_8_clickCounter){
    document.getElementById('showNext_8_chart').style.visibility = "hidden";
  }
}

document.getElementById('showPrev_8_chart').onclick = function(){
  if (info_chart_8_clickCounter != 5){
    document.getElementById('showNext_8_chart').style.visibility = "visible";

    info_chart_8_data.labels = info_chart_8_start.slice(info_chart_8_clickCounter-10, info_chart_8_clickCounter-5);
    info_chart_8_data.datasets['0'].data = info_chart_8_start_data.slice(info_chart_8_clickCounter-10, info_chart_8_clickCounter-5);
    info_chart_8_data.datasets['0'].backgroundColor = info_chart_8_start_colors.slice(info_chart_8_clickCounter-10, info_chart_8_clickCounter-5);

    info_chart_8_clickCounter -= 5;

    info_chart_8.update();
  }
  if (info_chart_8_clickCounter == 5){
    document.getElementById('showPrev_8_chart').style.visibility = "hidden";
  }

}

var info_chart_8 = Chart.Bar('info_chart_8', {
  options: options_8,
  data: info_chart_8_data
});


var infoCanvas_8 = document.getElementById("info_chart_8");

infoCanvas_8.onclick = function(e) {
   var slice = info_chart_8.getElementAtEvent(e);
   if (!slice.length) return;
   var link = slice[0]._model.label;
   for (var i = 0; i < info_chart_8_link.links.length; i++) {
     if(link == info_chart_8_data.labels[i]){
       window.open(info_chart_8_link.links[i]);
     }
   }
}
