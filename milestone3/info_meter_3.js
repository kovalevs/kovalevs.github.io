// Data - only 'start' value
var info_meter_3_data = [0, 29, 72];
// Data - 'max' value
var info_meter_3_maxvalue = 100;
// Data - 'arrow' value
var info_meter_3_arrowvalue = 37;


$(function () {

    $('#meter_3').highcharts({

        chart: {
            type: 'gauge',
            backgroundColor: '#404040',
            margin: [10, 10, 10, 10],
        },

        title: {
            text: null,
        },

        pane: {
            startAngle: -90,
            endAngle: 90,
            background: null,
            size: '100%',
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
            max: info_meter_3_maxvalue,

            title: {
                text: null
            },
            plotBands: [
              {
                from: 0,
                to: info_meter_3_data[1],
                color: '#538235',
                thickness: 45,
            }, {
                from: info_meter_3_data[1],
                to: info_meter_3_data[2],
                color: '#FEFF00',
                thickness: 45,
            }, {
                from: info_meter_3_data[2],
                to: info_meter_3_maxvalue,
                color: '#C00000',
                thickness: 45,
            }]
        },

        series: [{
            name: null,
            data: [info_meter_3_arrowvalue],
        }]

    },
  );
});
