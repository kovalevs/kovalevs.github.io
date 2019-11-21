var info_chart_13_data = {
  // Test data
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [{
    label: "Energy rate",
    backgroundColor: ["#326CCE", "#326CCE", "#326CCE", "#326CCE", "#326CCE", "#326CCE", "#326CCE", "#326CCE", "#326CCE", "#326CCE", "#326CCE", "#326CCE", "#326CCE", "#326CCE", "#326CCE", "#326CCE", "#326CCE", "#326CCE", "#326CCE", "#326CCE", "#326CCE"],
    borderColor: "rgb(70, 70, 70)",
    borderWidth: 1,
    hoverBackgroundColor: "rgba(255,99,132,0.4)",
    hoverBorderColor: "rgb(70, 70, 70)",
    data: [1, 3.5, 2.5, 1.5, 1.7, 2, 1, 1.5, 1.7, 1.1, 2, 2.5],
  }]
};
var info_chart_13_link = {
  // Test data
  links: ["#1", "#2", "#5", "#4", "#8", "#6", "#20", "#2", "#18", "#9", "#17", "#23", "#5", "#44", "#8", "#61", "#20", "#74", "#18", "#9", "#1"],
};
var options_13 = {
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

var info_chart_13_clickCounter = 10;

var info_chart_13_start = info_chart_13_data.labels;
var info_chart_13_start_data = info_chart_13_data.datasets['0'].data;
var info_chart_13_start_colors = info_chart_13_data.datasets['0'].backgroundColor;

document.getElementById('showPrev_13_chart').style.visibility = "hidden";


function infoUpdateData_13(data_array, label_array, color_array) {
  info_chart_13_data.datasets['0'].data = data_array;
  info_chart_13_data.labels = label_array;
  info_chart_13_data.datasets['0'].backgroundColor = color_array;

  info_chart_13_start = info_chart_13_data.labels;
  info_chart_13_start_data = info_chart_13_data.datasets['0'].data;
  info_chart_13_start_colors = info_chart_13_data.datasets['0'].backgroundColor;

  info_chart_13_clickCounter = 10;
  document.getElementById('showNext_13_chart').style.visibility = "visible";
  document.getElementById('showPrev_13_chart').style.visibility = "hidden";
  infoSliceData_13();
  info_chart_13.update();
}

function infoSliceData_13(){
  info_chart_13_data.labels = info_chart_13_start.slice(info_chart_13_clickCounter-10, info_chart_13_clickCounter);
  info_chart_13_data.datasets['0'].data = info_chart_13_start_data.slice(info_chart_13_clickCounter-10, info_chart_13_clickCounter);
  info_chart_13_data.datasets['0'].backgroundColor = info_chart_13_start_colors.slice(info_chart_13_clickCounter-10, info_chart_13_clickCounter);
}
infoSliceData_13()

document.getElementById('showNext_13_chart').onclick = function(){
  if (info_chart_13_start.slice(info_chart_13_clickCounter, info_chart_13_clickCounter+10).length != 0){
    info_chart_13_data.labels = info_chart_13_start.slice(info_chart_13_clickCounter, info_chart_13_clickCounter+10);
    info_chart_13_data.datasets['0'].data = info_chart_13_start_data.slice(info_chart_13_clickCounter, info_chart_13_clickCounter+10);
    info_chart_13_data.datasets['0'].backgroundColor = info_chart_13_start_colors.slice(info_chart_13_clickCounter, info_chart_13_clickCounter+10);

    document.getElementById('showPrev_13_chart').style.visibility = "visible";

    info_chart_13_clickCounter += 10;

    info_chart_13.update();
  } if (info_chart_13_start.length <= info_chart_13_clickCounter){
    document.getElementById('showNext_13_chart').style.visibility = "hidden";
  }
}

document.getElementById('showPrev_13_chart').onclick = function(){
  if (info_chart_13_clickCounter != 10){
    document.getElementById('showNext_13_chart').style.visibility = "visible";

    info_chart_13_data.labels = info_chart_13_start.slice(info_chart_13_clickCounter-20, info_chart_13_clickCounter-10);
    info_chart_13_data.datasets['0'].data = info_chart_13_start_data.slice(info_chart_13_clickCounter-20, info_chart_13_clickCounter-10);
    info_chart_13_data.datasets['0'].backgroundColor = info_chart_13_start_colors.slice(info_chart_13_clickCounter-20, info_chart_13_clickCounter-10);

    info_chart_13_clickCounter -= 10;

    info_chart_13.update();
  }
  if (info_chart_13_clickCounter == 10){
    document.getElementById('showPrev_13_chart').style.visibility = "hidden";
  }

}

var info_chart_13 = Chart.Bar('info_chart_13', {
  options: options_13,
  data: info_chart_13_data
});


var infoCanvas_13 = document.getElementById("info_chart_13");

infoCanvas_13.onclick = function(e) {
   var slice = info_chart_13.getElementAtEvent(e);
   if (!slice.length) return;
   var link = slice[0]._model.label;
   for (var i = 0; i < info_chart_13_link.links.length; i++) {
     if(link == info_chart_13_data.labels[i]){
       window.open(info_chart_13_link.links[i]);
     }
   }
}
