// Data - only 'start' value
var info_meter_1_data = [0, 29, 72];
// Data - 'max' value
var info_meter_1_maxvalue = 100;



$(function () {

    $('#meter_1').highcharts({

        chart: {
            type: 'gauge',
            backgroundColor: '#404040',
        },

        title: {
            text: null,
        },

        pane: {
            startAngle: -90,
            endAngle: 90,
            background: null,
            size: '70%',
        },
        credits: {
          enabled: false
        },
        exporting: {
         enabled: false
       },

       tooltip: {
         borderWidth: 0,
         backgroundColor: 'none',
         shadow: false,
         style: {
           fontSize: '0px'
         }
       },

        yAxis: {
          tickLength: 1,
          minorTickLength: 0,
          endOnTick: false,
          tickColor: 'rgba(0,0,0,0)',
          tickInterval: 10,
          labels: {
          distance: 20,
           style: {
              color: 'white',
              font: '20px Trebuchet MS, Verdana, sans-serif',
             }
          },
            min: 0,
            max: info_meter_1_maxvalue,

            title: {
                text: null
            },
            plotBands: [
              {
                from: 0,
                to: info_meter_1_data[1],
                color: '#538235',
                thickness: 45,
            }, {
                from: info_meter_1_data[1],
                to: info_meter_1_data[2],
                color: '#FEFF00',
                thickness: 45,
            }, {
                from: info_meter_1_data[2],
                to: info_meter_1_maxvalue,
                color: '#C00000',
                thickness: 45,
            }]
        },

        series: [{
            name: null,
            data: [37],
        }]

    },
  );
});
