
var Chart = {
    authorEveryYearMeetingList: [],
    meetingArr: [],
    authorArr: [],
    yearArr: [],
    init: function () {
        this.addEvents();
        this.formatterData();
    },

    addEvents: function () {
        $("#selMeetingOne").change(function (event) {
            this.getEveryYearAuthorSumChart(event.target.value);
        }.bind(this));

        $("#selMeetingTwo").change(function (event) {
            this.getYearForMeeting(event.target.value);
            this.getEveryYearAuthorGroupChart();
        }.bind(this));

        $("#selYear").change(function (event) {
            this.getEveryYearAuthorGroupChart();
        }.bind(this));
    },
    /**
    * 
    */
    formatterData: function () {

        for (var author in chartData) {
            if (this.authorArr.indexOf(author) == -1)
                this.authorArr.push(author);

            //every year
            for (var year in chartData[author]) {
                if (this.yearArr.indexOf(year * 1) == -1)
                    this.yearArr.push(year * 1);

                //every conference
                for (var meeting in chartData[author][year]) {
                    var meet = meeting[0];

                    if (this.meetingArr.indexOf(meet) == -1)
                        this.meetingArr.push(meet);

                    this.authorEveryYearMeetingList.push({
                        author: author,
                        year: year * 1,
                        meeting: meet,
                        num: chartData[author][year][meeting]
                    });
                }
            }
        }


        this.yearArr.sort(function (a, b) {
            return a - b;
        });

        this.meetingArr.sort();


        var meetingOption = "";
        this.meetingArr.forEach(function (meet) {
            meetingOption += '<option value="' + meet + '">' + meet + '</option>';
        });
        $("#selMeetingOne,#selMeetingTwo").append(meetingOption);

        this.getYearForMeeting($("#selMeetingTwo").val());

        this.getEveryYearAuthorSumChart("");
        this.getEveryYearAuthorGroupChart();
    },
    /**
    
    */
    getYearForMeeting: function (meeting) {

        var yearTmpArr = [];
        this.authorEveryYearMeetingList.forEach(function (item) {
            if (item.meeting == meeting && yearTmpArr.indexOf(item.year) == -1) {
                yearTmpArr.push(item.year);
            }
        });
        yearTmpArr.sort();

        var yearOption = '';
        yearTmpArr.forEach(function (year) {
            yearOption += '<option value="' + year + '">' + year + '</option>';
        });
        $("#selYear").html(yearOption);
    },

    getEveryYearAuthorSumChart: function (meeting) {
        var seriesData = [],
            categories = [],
            self = this;

        this.yearArr.forEach(function (year) {
            var authorTemArr = [];
            self.authorEveryYearMeetingList.forEach(function (item) {
                if (item.year == year && authorTemArr.indexOf(item.author) == -1 && (meeting.length == 0 || item.meeting == meeting)) {
                    authorTemArr.push(item.author);
                }
            });
            if (authorTemArr.length > 0) {
                categories.push(year);
                seriesData.push(authorTemArr.length);
            } else {
                categories.push(year);
                seriesData.push(0);
            }
        });

        trimStartEndZeros();

        var chart = Highcharts.chart('chartOne', {
            chart: {
                type: 'spline'
            },
            title: {
                text: 'Number of authors in each conference'
            },
            xAxis: {
                type: 'value',
                title: {
                    text: null
                },
                categories: categories.map(function (year) {
                    return year.toString();
                })
            },
            yAxis: [{
                title: {
                    text: 'Number of authors'
                }
            }],
            plotOptions: {
                spline: {
                    marker: {
                        enabled: true,
                        radius: 2
                    },
                    lineWidth: 1
                }
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'Number of authors',
                data: seriesData
            }]
        });

        function trimStartEndZeros() {
            var startIndex = 0, endIndex = 0;
            for (var i = 0; i < seriesData.length; i++) {
                if (seriesData[i] > 0) {
                    startIndex = i;
                    break;
                }
            }
            for (var i = seriesData.length - 1; i >= 0; i--) {
                if (seriesData[i] > 0) {
                    endIndex = i;
                    break;
                }
            }


            if (endIndex > 0) {
                categories = categories.slice(startIndex, endIndex + 1);
                seriesData = seriesData.slice(startIndex, endIndex + 1);
            } else {
                categories = categories.slice(startIndex);
                seriesData = seriesData.slice(startIndex);
            }
        }
    },


    getEveryYearAuthorGroupChart: function () {
        var year = $("#selYear").val(),
            meeting = $("#selMeetingTwo").val();


        var seriesData1 = [],
            categories = [];

        this.authorEveryYearMeetingList.forEach(function (item) {
            if (item.year == year * 1 && item.meeting == meeting) {
                categories.push(item.author);
                seriesData1.push({ y: item.num });
            }
        });

        seriesData1.sort(function (a, b) {
            return b.y - a.y;
        });

        mapColor(seriesData1);


        var option = {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Number of paper by each author in each conference in a year'
            },
            xAxis: {
                type: 'value',
                title: {
                    text: null
                },
                categories: categories
            },
            yAxis: [{
                title: {
                    text: 'Number of papers'
                },
                tickInterval: 1
            }
            ],

            plotOptions: {
                spline: {
                    marker: {
                        enabled: false,
                        radius: 2
                    },
                    lineWidth: 1
                }
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'Number of papers',
                data: seriesData1
            }]
        };


        var chart = Highcharts.chart('chartTwo', option);


        function mapColor(input) {
            var colorPool = ['#34d8ab', '#108cf7', '#516cce', '#108cf7', '#ce5151', '#34d8ab'];
            var val = input[0];
            var colorIndex = 0;
            input[0].color = colorPool[colorIndex];
            for (var i = 1; i < input.length; i++) {
                if (input[i].y == val.y) {
                    input[i].color = colorPool[colorIndex];
                } else {
                    colorIndex = ++colorIndex % colorPool.length;
                    input[i].color = colorPool[colorIndex];
                    val = input[i]
                }
            }
        }
    }
};

Chart.init();