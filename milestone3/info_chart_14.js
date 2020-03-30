var info_chart_14_data = {
  // Test data
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [{
    label: "Energy rate",
    backgroundColor: ["#FEFF00", "#FEFF00", "#FEFF00", "#FEFF00", "#FEFF00", "#FEFF00", "#FEFF00", "#FEFF00", "#FEFF00", "#FEFF00", "#FEFF00", "#FEFF00", "#FEFF00", "#FEFF00", "#FEFF00", "#FEFF00", "#FEFF00", "#FEFF00", "#FEFF00", "#FEFF00", "#FEFF00"],
    borderColor: "rgb(70, 70, 70)",
    borderWidth: 1,
    hoverBackgroundColor: "rgba(255,99,132,0.4)",
    hoverBorderColor: "rgb(70, 70, 70)",
    data: [10, -3.5, 2.5, -1.5, 1.7, -10, -15, 5, 10, 11, -5, 10],
  }]
};
var info_chart_14_link = {
  // Test data
  links: ["#1", "#2", "#5", "#4", "#8", "#6", "#20", "#2", "#18", "#9", "#17", "#23", "#5", "#44", "#8", "#61", "#20", "#74", "#18", "#9", "#1"],
};
var options_14 = {
  legend: {
    display: false
  },
  maintainAspectRatio: false,
  annotation: {
    annotations: [{
      type: 'line',
      mode: 'horizontal',
      scaleID: 'y-axis-0',
      value: 3,
      borderColor: '#F60000',
      borderWidth: 4,
      label: {
        enabled: true,
        content: 'Limit',
        backgroundColor: 'rgba(0,0,0,0)',
        fontSize: 20,
        fontColor: "#F60000",
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

var info_chart_14_clickCounter = 10;

var info_chart_14_start = info_chart_14_data.labels;
var info_chart_14_start_data = info_chart_14_data.datasets['0'].data;
var info_chart_14_start_colors = info_chart_14_data.datasets['0'].backgroundColor;

document.getElementById('showPrev_14_chart').style.visibility = "hidden";


function infoUpdateData_14(data_array, label_array, color_array) {
  info_chart_14_data.datasets['0'].data = data_array;
  info_chart_14_data.labels = label_array;
  info_chart_14_data.datasets['0'].backgroundColor = color_array;

  info_chart_14_start = info_chart_14_data.labels;
  info_chart_14_start_data = info_chart_14_data.datasets['0'].data;
  info_chart_14_start_colors = info_chart_14_data.datasets['0'].backgroundColor;

  info_chart_14_clickCounter = 10;
  document.getElementById('showNext_14_chart').style.visibility = "visible";
  document.getElementById('showPrev_14_chart').style.visibility = "hidden";
  infoSliceData_14();
  info_chart_14.update();
}

function infoSliceData_14(){
  info_chart_14_data.labels = info_chart_14_start.slice(info_chart_14_clickCounter-10, info_chart_14_clickCounter);
  info_chart_14_data.datasets['0'].data = info_chart_14_start_data.slice(info_chart_14_clickCounter-10, info_chart_14_clickCounter);
  info_chart_14_data.datasets['0'].backgroundColor = info_chart_14_start_colors.slice(info_chart_14_clickCounter-10, info_chart_14_clickCounter);
}
infoSliceData_14()

document.getElementById('showNext_14_chart').onclick = function(){
  if (info_chart_14_start.slice(info_chart_14_clickCounter, info_chart_14_clickCounter+10).length != 0){
    info_chart_14_data.labels = info_chart_14_start.slice(info_chart_14_clickCounter, info_chart_14_clickCounter+10);
    info_chart_14_data.datasets['0'].data = info_chart_14_start_data.slice(info_chart_14_clickCounter, info_chart_14_clickCounter+10);
    info_chart_14_data.datasets['0'].backgroundColor = info_chart_14_start_colors.slice(info_chart_14_clickCounter, info_chart_14_clickCounter+10);

    document.getElementById('showPrev_14_chart').style.visibility = "visible";

    info_chart_14_clickCounter += 10;

    info_chart_14.update();
  } if (info_chart_14_start.length <= info_chart_14_clickCounter){
    document.getElementById('showNext_14_chart').style.visibility = "hidden";
  }
}

document.getElementById('showPrev_14_chart').onclick = function(){
  if (info_chart_14_clickCounter != 10){
    document.getElementById('showNext_14_chart').style.visibility = "visible";

    info_chart_14_data.labels = info_chart_14_start.slice(info_chart_14_clickCounter-20, info_chart_14_clickCounter-10);
    info_chart_14_data.datasets['0'].data = info_chart_14_start_data.slice(info_chart_14_clickCounter-20, info_chart_14_clickCounter-10);
    info_chart_14_data.datasets['0'].backgroundColor = info_chart_14_start_colors.slice(info_chart_14_clickCounter-20, info_chart_14_clickCounter-10);

    info_chart_14_clickCounter -= 10;

    info_chart_14.update();
  }
  if (info_chart_14_clickCounter == 10){
    document.getElementById('showPrev_14_chart').style.visibility = "hidden";
  }

}

var info_chart_14 = Chart.Bar('info_chart_14', {
  options: options_14,
  data: info_chart_14_data
});


var infoCanvas_14 = document.getElementById("info_chart_14");

infoCanvas_14.onclick = function(e) {
   var slice = info_chart_14.getElementAtEvent(e);
   if (!slice.length) return;
   var link = slice[0]._model.label;
   for (var i = 0; i < info_chart_14_link.links.length; i++) {
     if(link == info_chart_14_data.labels[i]){
       window.open(info_chart_14_link.links[i]);
     }
   }
}
