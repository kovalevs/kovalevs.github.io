var home_chart_1_data = {
  // Test data
  labels: ["City 12", "City 3", "City 5", "City 4", "City 8", "City 6", "City 20", "City 2", "City 18", "City 9", "City 17", "City 23", "City 5", "City 44", "City 8", "City 61", "City 20", "City 74", "City 18", "City 9", "cire1"],
  datasets: [{
    label: "Energy rate",
    backgroundColor: ["#ff0000", "#ff0000", "#ff0000", "#ff0000", "#ff7603", "#ff7603", "#ff7603", "#ff7603", "#ffbe00", "#ffbe00", "#ffbe00", "#ffbe00", "#ffbe00", "#ffbe00", "#ffbe00", "#ffbe00", "#ffbe00", "#ffbe00", "#ffbe00", "#ffbe00", "#ff0000"],
    borderColor: "rgb(70, 70, 70)",
    borderWidth: 1,
    hoverBackgroundColor: "rgba(255,99,132,0.4)",
    hoverBorderColor: "rgb(70, 70, 70)",
    data: [7 , 6.5, 6, 5.5, 5, 4.5, 4, 3.5, 3, 2.5, 5 , 3.5, 6, 3.5, 5, 4.5, 7, 3.5, 3, 2.5, 5],
  }]
};
var home_chart_1_link = {
  // Test data
  links: ["#12", "#3", "#5", "#4", "#8", "#6", "#20", "#2", "#18", "#9", "#17", "#23", "#5", "#44", "#8", "#61", "#20", "#74", "#18", "#9", "#1"],
};
var options = {
  legend: {
    display: false
  },
  maintainAspectRatio: false,
  annotation: {
    annotations: [{
      type: 'line',
      mode: 'horizontal',
      scaleID: 'y-axis-0',
      value: 2.5,
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

var home_chart_1_clickCounter = 10;

var home_chart_1_start = home_chart_1_data.labels;
var home_chart_1_start_data = home_chart_1_data.datasets['0'].data;
var home_chart_1_start_colors = home_chart_1_data.datasets['0'].backgroundColor;

document.getElementById('showPrev_1_chart').style.visibility = "hidden";


function homeUpdateData(data_array, label_array, color_array) {
  home_chart_1_data.datasets['0'].data = data_array;
  home_chart_1_data.labels = label_array;
  home_chart_1_data.datasets['0'].backgroundColor = color_array;

  home_chart_1_start = home_chart_1_data.labels;
  home_chart_1_start_data = home_chart_1_data.datasets['0'].data;
  home_chart_1_start_colors = home_chart_1_data.datasets['0'].backgroundColor;

  home_chart_1_clickCounter = 10;
  document.getElementById('showNext_1_chart').style.visibility = "visible";
  document.getElementById('showPrev_1_chart').style.visibility = "hidden";
  homeSliceData();
  home_chart_1.update();
}

function homeSliceData(){
  home_chart_1_data.labels = home_chart_1_start.slice(home_chart_1_clickCounter-10, home_chart_1_clickCounter);
  home_chart_1_data.datasets['0'].data = home_chart_1_start_data.slice(home_chart_1_clickCounter-10, home_chart_1_clickCounter);
  home_chart_1_data.datasets['0'].backgroundColor = home_chart_1_start_colors.slice(home_chart_1_clickCounter-10, home_chart_1_clickCounter);
}
homeSliceData()

document.getElementById('showNext_1_chart').onclick = function(){
  if (home_chart_1_start.slice(home_chart_1_clickCounter, home_chart_1_clickCounter+10).length != 0){
    home_chart_1_data.labels = home_chart_1_start.slice(home_chart_1_clickCounter, home_chart_1_clickCounter+10);
    home_chart_1_data.datasets['0'].data = home_chart_1_start_data.slice(home_chart_1_clickCounter, home_chart_1_clickCounter+10);
    home_chart_1_data.datasets['0'].backgroundColor = home_chart_1_start_colors.slice(home_chart_1_clickCounter, home_chart_1_clickCounter+10);

    document.getElementById('showPrev_1_chart').style.visibility = "visible";

    home_chart_1_clickCounter += 10;

    home_chart_1.update();
  } if (home_chart_1_start.length <= home_chart_1_clickCounter){
    document.getElementById('showNext_1_chart').style.visibility = "hidden";
  }
}

document.getElementById('showPrev_1_chart').onclick = function(){
  if (home_chart_1_clickCounter != 10){
    document.getElementById('showNext_1_chart').style.visibility = "visible";

    home_chart_1_data.labels = home_chart_1_start.slice(home_chart_1_clickCounter-20, home_chart_1_clickCounter-10);
    home_chart_1_data.datasets['0'].data = home_chart_1_start_data.slice(home_chart_1_clickCounter-20, home_chart_1_clickCounter-10);
    home_chart_1_data.datasets['0'].backgroundColor = home_chart_1_start_colors.slice(home_chart_1_clickCounter-20, home_chart_1_clickCounter-10);

    home_chart_1_clickCounter -= 10;

    home_chart_1.update();
  }
  if (home_chart_1_clickCounter == 10){
    document.getElementById('showPrev_1_chart').style.visibility = "hidden";
  }

}
var home_showToday = document.getElementById('home_1_showToday');
var home_showWeek = document.getElementById('home_1_showWeek');
var home_showMonth = document.getElementById('home_1_showMonth');
var home_showYear = document.getElementById('home_1_showYear');

function homeRemoveActiveOptions(){
  home_showToday.classList.remove('home-chart-panel-options-buttons-active');
  home_showWeek.classList.remove('home-chart-panel-options-buttons-active');
  home_showMonth.classList.remove('home-chart-panel-options-buttons-active');
  home_showYear.classList.remove('home-chart-panel-options-buttons-active');
}

home_showYear.onclick = function(){
  homeRemoveActiveOptions();
  home_showYear.classList.add('home-chart-panel-options-buttons-active');

  // Test data
  var homeNewData = [5, 2.5, 3, 3.5, 7, 4.5, 5, 3.5, 6, 3.5, 5, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7];
  var homeNewLabels = home_chart_1_data.labels = ["cire1", "City 9", "City 18", "City 74", "City 20", "City 61", "City 8", "City 44", "City 5", "City 23", "City 17", "City 9", "City 18", "City 2", "City 20", "City 6", "City 8", "City 4", "City 5", "City 3", "City 12"];
  var homeNewColors = home_chart_1_data.datasets['0'].backgroundColor = ["#ff0000", "#fbef00", "#ffbe00", "#fbe0f0", "#ffbe00", "#ffbe00", "#ffffff", "#ffbe00", "#ffbe00", "#ffbe00", "#ffbe00", "#ffbe00", "#ffbe00", "#ff7603", "#ff7603", "#ff7603", "#ff7603", "#ff0000", "#ff0000", "#ff0000", "#ff0000"];

  homeUpdateData(homeNewData, homeNewLabels, homeNewColors);

}
home_showMonth.onclick = function(){
  homeRemoveActiveOptions();
  home_showMonth.classList.add('home-chart-panel-options-buttons-active');

  // Test data
  var homeNewData = [5, 2.5, 3, 3.5, 7, 4.5, 5, 3.5, 6, 3.5, 5, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7];
  var homeNewLabels = home_chart_1_data.labels = ["cire1", "City 9", "City 18", "City 74", "City 20", "City 61", "City 8", "City 44", "City 5", "City 23", "City 17", "City 9", "City 18", "City 2", "City 20", "City 6", "City 8", "City 4", "City 5", "City 3", "City 12"];
  var homeNewColors = home_chart_1_data.datasets['0'].backgroundColor = ["#ffffff", "#ff7603", "#ffbe00", "#fbe0f0", "#ffbe00", "#ffbe00", "#ff7603", "#ffbe00", "#ff0000", "#fbef00", "#ff7603", "#ffbe00", "#ff0000", "#ff7603", "#ffbe00", "#ffbe00", "#ffbe00", "#ff0000", "#ffbe00", "#ff0000", "#ff0f00"];

  homeUpdateData(homeNewData, homeNewLabels, homeNewColors);
}
home_showWeek.onclick = function(){
  homeRemoveActiveOptions();
  home_showWeek.classList.add('home-chart-panel-options-buttons-active');

  // Test data
  var homeNewData = [5, 2.5, 3, 3.5, 7, 4.5, 5, 3.5, 6, 3.5, 5, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7];
  var homeNewLabels = home_chart_1_data.labels = ["cire1", "City 9", "City 18", "City 74", "City 20", "City 61", "City 8", "City 44", "City 5", "City 23", "City 17", "City 9", "City 18", "City 2", "City 20", "City 6", "City 8", "City 4", "City 5", "City 3", "City 12"];
  var homeNewColors = home_chart_1_data.datasets['0'].backgroundColor = ["#ffbe00", "#ffbe00", "#ffbe00", "#ffffff", "#ffbe00", "#ff0000", "#ffbe00", "#fbef00", "#ffbe00", "#fbe0f0", "#ff0000", "#ff0000", "#ff7603", "#ff7603", "#ff7603", "#ffbe00", "#ff0000", "#ff7603", "#ffbe00", "#ff0000", "#ffff00"];

  homeUpdateData(homeNewData, homeNewLabels, homeNewColors);
}
home_showToday.onclick = function(){
  homeRemoveActiveOptions();
  home_showToday.classList.add('home-chart-panel-options-buttons-active');

  // Test data
  var homeNewData = [7 , 6.5, 6, 5.5, 5, 4.5, 4, 3.5, 3, 2.5, 5 , 3.5, 6, 3.5, 5, 4.5, 7, 3.5, 3, 2.5, 5];
  var homeNewLabels = ["City 12", "City 3", "City 5", "City 4", "City 8", "City 6", "City 20", "City 2", "City 18", "City 9", "City 17", "City 23", "City 5", "City 44", "City 8", "City 61", "City 20", "City 74", "City 18", "City 9", "cire1"];
  var homeNewColors = ["#ff0000", "#ff0000", "#ff0000", "#ff0000", "#ff7603", "#ff7603", "#ff7603", "#ff7603", "#ffbe00", "#ffbe00", "#ffbe00", "#ffbe00", "#ffbe00", "#ffbe00", "#ffbe00", "#ffbe00", "#ffbe00", "#ffbe00", "#ffbe00", "#ffbe00", "#ff0000"];

  homeUpdateData(homeNewData, homeNewLabels, homeNewColors);
}




var home_chart_1 = Chart.Bar('home_chart_1', {
  options: options,
  data: home_chart_1_data
});






var homeCanvas = document.getElementById("home_chart_1");

homeCanvas.onclick = function(e) {
   var slice = home_chart_1.getElementAtEvent(e);
   if (!slice.length) return;
   var link = slice[0]._model.label;
   for (var i = 0; i < home_chart_1_link.links.length; i++) {
     if(link == home_chart_1_data.labels[i]){
       window.open(home_chart_1_link.links[i]);
     }
   }
}
