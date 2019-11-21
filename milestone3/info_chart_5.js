var info_chart_5_labels = ['Others', 'AC1', 'AC2', 'AC3', 'Light 1', 'Switch 2'];
var info_chart_5_data = [48, 20, 5, 10, 15, 2];

Chart.defaults.global.plugins.datalabels.display = true;

var chart = new Chart('info_chart_5', {
  labels: info_chart_5_labels,
  type: 'doughnut',
  data: {
    labels: info_chart_5_labels,
    datasets: [
      {
        datalabels: {
          labels: {
              title: {
                  display: true,
                  color: 'white',
                  font: {
                    size: 20,
                  },
              },
							name: {
								align: 'top',
                padding: {
        					bottom: 10,
        				},
								font: {size: 16},
								formatter: function(value, ctx) {
									return ctx.chart.data.labels[ctx.dataIndex];
								}
							},
							value: {
								formatter: function(value, ctx) {
									return "";
								},
								padding: 4
							},
          },
       },
      labels: ['Others', 'AC1', 'AC2', 'AC3', 'Light 1', 'Switch 2'],
      backgroundColor: ["#70AD47", "#4572C4", "#ED7D32", "#A5A5A5", "#FFC004", "#5C9BD5"],
      borderWidth: 0,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgb(70, 70, 70)",
      data: info_chart_5_data,
    },
  ]
  },
  options: {
    legend: {
      display: false
    },
    maintainAspectRatio: false,
    plugins: {
      datalabels: {
        labels: {
            title: {
              formatter: function(value, ctx) {
                return value + "%";
              },
                align: 'center',
                color: 'white',
                font: {
                  size: '20px',
                },
            },
        },
        color: 'white',
      }
    }
  }
});




function infoUpdateData_5(data_array, label_array, color_array) {
  chart.data.datasets['0'].data = data_array;
  chart.data.labels = label_array;
  chart.data.datasets['0'].backgroundColor = color_array;

  info_chart_5_start = chart.data.labels;
  info_chart_5_start_data = chart.data.datasets['0'].data;
  info_chart_5_start_colors = chart.data.datasets['0'].backgroundColor;

  chart.update();
}
