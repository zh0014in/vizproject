(function () {
    'use strict';

    angular
        .module('app')
        .controller('trend2Controller', trend2Controller)

    trend2Controller.$inject = [];

    function trend2Controller() {
        var dom = document.getElementById("container");
        var myChart = echarts.init(dom);
        var app = {};
        var option = null;
        var data = [['conference', '1979', '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991',
            '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006',
            '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015'],
        ['A', '0', '0', '0', '0', 322, '0', '0', '0', '0', 408, '0', '0', '0', 528, '0', 464, '0', '0', 846, '0', '0', 1362, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['D', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 2332, 3800, 3089, 4021, 4116, 5715, 6315, 8233],
        ['E', '0', '0', '0', '0', 307, '0', 389, '0', 509, '0', 604, '0', 615, '0', 678, '0', 619, '0', 1304, '0', 633, '0', '0', '0', 1412, '0', '0', 1195, '0', '0', 2633, '0', '0', 2683, '0', 3715, '0'],
        ['J', 479, 357, 383, 300, 321, 407, 420, 333, 411, 952, 474, 444, 724, 763, 807, 676, 826, 730, 1049, 1146, 653, 682, 725, 932, 759, 621, 705, 625, 757, 922, 984, 1326, 1304, 1308, 1571, 1754, 1022],
        ['K', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0',
            '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1356],
        ['N', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 499, '0', 1131, 1363, '0', 1803, 2028, '0', 2650, 3051, '0', 2469, 3979, '0', '0'],
        ['P', 153, 268, 248, 269, 365, 971, 444, 405, 455, 563, 616, 505, 680, 645, 630, 696, 825, 871, 1304, 3028, 1361, 1091, 1119, 990, 1504, 1902, 1961, 5195, 2839, 3572, 3968, 5979, 6556, 4628, 9447, 8519, 9484],
        ['Q', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0',
            '0', '0', '0', '0', '0', '0', '0', '0', '0', 1281, 1636, 437],
        ['S', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 225, '0', '0', '0', '0', '0', 952, '0', '0', 984, '0', 1813, 2672, 2809, 3455],
        ['W', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 460, 636, '0', 725, 902, 185, 1148, 2979, 3127, 1669, 3676, 2272, 4220, 5530, 7378, 3472, 8362, 5086, 4960, 10805, 11768, 13278, 14250, 16916, 19055, 20105]];

        setTimeout(function () {

            option = {
                title: {
                    text: 'Number of Citations among Different Conferences over 1979 - 2015',
                    subtext: 'Number of Citations (2015)',
                    left: 'center'

                },

                legend: {
                    orient: 'vertical',
                    right: 0,
                    top: 80,
                    formatter: 'Conference {name}'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: { type: 'shadow' },
                    backgroundColor: 'rgba(50,50,50,0.4)'
                },
                dataset: {
                    source: data
                },
                dataZoom: [{
                    type: 'slider',
                    height: 20,
                    bottom: 10,
                    borderColor: 'transparent',
                    backgroundColor: '#e2e2e2',
                    handleIcon: 'M10.7,11.9H9.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                    handleSize: '120%',
                    handleStyle: {
                        shadowBlur: 6,
                        shadowOffsetX: 1,
                        shadowOffsetY: 2,
                        shadowColor: '#aaa'
                    }
                }, {
                    type: 'inside'
                }],
                xAxis: {
                    type: 'category',
                    boundaryGap: true,
                    axisTick: { interval: 0 },
                    axisLabel: {
                        interval: 0,
                        rotate: 0,
                        textStyle: { fontSize: 11 }
                    }

                },
                yAxis: { name: "Number of Citations" },
                grid: {
                    top: '54%',
                    show: false
                },


                series: [
                    { type: 'line', smooth: true, seriesLayoutBy: 'row' },
                    { type: 'line', smooth: true, seriesLayoutBy: 'row' },
                    { type: 'line', smooth: true, seriesLayoutBy: 'row' },
                    { type: 'line', smooth: true, seriesLayoutBy: 'row' },
                    { type: 'line', smooth: true, seriesLayoutBy: 'row' },
                    { type: 'line', smooth: true, seriesLayoutBy: 'row' },
                    { type: 'line', smooth: true, seriesLayoutBy: 'row' },
                    { type: 'line', smooth: true, seriesLayoutBy: 'row' },
                    { type: 'line', smooth: true, seriesLayoutBy: 'row' },
                    { type: 'line', smooth: true, seriesLayoutBy: 'row' },

                    {
                        type: 'pie',
                        id: 'pie',
                        radius: '29%',
                        center: ['50%', '34%'],
                        label: {
                            formatter: '{b}:{@2015}({d}%)'

                        },
                        encode: {
                            itemName: 'conference',
                            value: '2015',
                            tooltip: '2015'
                        }

                    }
                ]
            };

            myChart.on('updateAxisPointer', function (event) {
                var xAxisInfo = event.axesInfo[0];
                if (xAxisInfo) {
                    var dimension = xAxisInfo.value + 1;
                    myChart.setOption({
                        title: {
                            text: 'Number of Citations among Different Conferences over 1979 - 2015',
                            subtext: 'Number of Citations (' + data[0][dimension] + ')'

                        },
                        series: {
                            id: 'pie',
                            label: {
                                formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                            },
                            encode: {
                                value: dimension,
                                tooltip: dimension
                            }
                        }
                    });
                }
            });

            myChart.setOption(option);

        });;
        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }

    }
})();