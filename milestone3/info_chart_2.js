var info_chart_2_data = {
  // Test data
  labels: ["City 123", "City 23", "City 5", "City 4", "City 8", "City 6", "City 20", "City 2", "City 18", "City 9", "City 17", "City 23", "City 5", "City 44", "City 8", "City 61", "City 20", "City 74", "City 18", "City 9", "cire1"],
  datasets: [{
    label: "Energy rate",
    backgroundColor: ["#00B050", "#ff0000", "#ff0000", "#ff0000", "#ff7603", "#00B050", "#ff7603", "#ff7603", "#FF0200", "#ffbe00", "#ffbe00", "#ffbe00", "#ffbe00", "#ffbe00", "#ffbe00", "#ffbe00", "#ffbe00", "#ffbe00", "#ffbe00", "#ffbe00", "#FEFF00"],
    borderColor: "rgb(70, 70, 70)",
    borderWidth: 1,
    hoverBackgroundColor: "rgba(255,99,132,0.4)",
    hoverBorderColor: "rgb(70, 70, 70)",
    data: [7 , 6.5, 6, 5.5, 5, 4.5, 4, 3.5, 3, 2.5, 5 , 3.5, 6, 3.5, 5, 4.5, 7, 3.5, 3, 2.5, 5],
  }]
};
var info_chart_2_link = {
  // Test data
  links: ["#1", "#2", "#5", "#4", "#8", "#6", "#20", "#2", "#18", "#9", "#17", "#23", "#5", "#44", "#8", "#61", "#20", "#74", "#18", "#9", "#1"],
};
var options_2 = {
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

var info_chart_2_clickCounter = 10;

var info_chart_2_start = info_chart_2_data.labels;
var info_chart_2_start_data = info_chart_2_data.datasets['0'].data;
var info_chart_2_start_colors = info_chart_2_data.datasets['0'].backgroundColor;

document.getElementById('showPrev_2_chart').style.visibility = "hidden";


function infoUpdateData_2(data_array, label_array, color_array) {
  info_chart_2_data.datasets['0'].data = data_array;
  info_chart_2_data.labels = label_array;
  info_chart_2_data.datasets['0'].backgroundColor = color_array;

  info_chart_2_start = info_chart_2_data.labels;
  info_chart_2_start_data = info_chart_2_data.datasets['0'].data;
  info_chart_2_start_colors = info_chart_2_data.datasets['0'].backgroundColor;

  info_chart_2_clickCounter = 10;
  document.getElementById('showNext_2_chart').style.visibility = "visible";
  document.getElementById('showPrev_2_chart').style.visibility = "hidden";
  infoSliceData_2();
  info_chart_2.update();
}

function infoSliceData_2(){
  info_chart_2_data.labels = info_chart_2_start.slice(info_chart_2_clickCounter-10, info_chart_2_clickCounter);
  info_chart_2_data.datasets['0'].data = info_chart_2_start_data.slice(info_chart_2_clickCounter-10, info_chart_2_clickCounter);
  info_chart_2_data.datasets['0'].backgroundColor = info_chart_2_start_colors.slice(info_chart_2_clickCounter-10, info_chart_2_clickCounter);
}
infoSliceData_2()

document.getElementById('showNext_2_chart').onclick = function(){
  if (info_chart_2_start.slice(info_chart_2_clickCounter, info_chart_2_clickCounter+10).length != 0){
    info_chart_2_data.labels = info_chart_2_start.slice(info_chart_2_clickCounter, info_chart_2_clickCounter+10);
    info_chart_2_data.datasets['0'].data = info_chart_2_start_data.slice(info_chart_2_clickCounter, info_chart_2_clickCounter+10);
    info_chart_2_data.datasets['0'].backgroundColor = info_chart_2_start_colors.slice(info_chart_2_clickCounter, info_chart_2_clickCounter+10);

    document.getElementById('showPrev_2_chart').style.visibility = "visible";

    info_chart_2_clickCounter += 10;

    info_chart_2.update();
  } if (info_chart_2_start.length <= info_chart_2_clickCounter){
    document.getElementById('showNext_2_chart').style.visibility = "hidden";
  }
}

document.getElementById('showPrev_2_chart').onclick = function(){
  if (info_chart_2_clickCounter != 10){
    document.getElementById('showNext_2_chart').style.visibility = "visible";

    info_chart_2_data.labels = info_chart_2_start.slice(info_chart_2_clickCounter-20, info_chart_2_clickCounter-10);
    info_chart_2_data.datasets['0'].data = info_chart_2_start_data.slice(info_chart_2_clickCounter-20, info_chart_2_clickCounter-10);
    info_chart_2_data.datasets['0'].backgroundColor = info_chart_2_start_colors.slice(info_chart_2_clickCounter-20, info_chart_2_clickCounter-10);

    info_chart_2_clickCounter -= 10;

    info_chart_2.update();
  }
  if (info_chart_2_clickCounter == 10){
    document.getElementById('showPrev_2_chart').style.visibility = "hidden";
  }

}

var info_chart_2 = Chart.Bar('info_chart_2', {
  options: options_2,
  data: info_chart_2_data
});


var infoCanvas_2 = document.getElementById("info_chart_2");

infoCanvas_2.onclick = function(e) {
   var slice = info_chart_2.getElementAtEvent(e);
   if (!slice.length) return;
   var link = slice[0]._model.label;
   for (var i = 0; i < info_chart_2_link.links.length; i++) {
     if(link == info_chart_2_data.labels[i]){
       window.open(info_chart_2_link.links[i]);
     }
   }
}
