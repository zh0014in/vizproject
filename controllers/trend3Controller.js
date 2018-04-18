(function () {
    'use strict';

    angular
        .module('app')
        .controller('trend3Controller', trend3Controller)

    trend3Controller.$inject = ['$http', 'echartsDraw', '$scope'];

    function trend3Controller($http, echartsDraw, $scope) {
        var vm = this;
        vm.citationByYear; vm.citationByConference; vm.authorsByYear; vm.authorsByConference;
        vm.year1 = 2009;
        vm.year2 = 2009;
        vm.selectedConference1 = 'A';
        vm.selectedConference2 = 'A';
        vm.top1 = 8; vm.top2 = 8; vm.top3 = 8; vm.top4 = 8;
        vm.yearResult = []
        vm.conferenceResult = [];
        jQuery.get('authorsByYear(0.8).json', function (data) {
            vm.authorsByYear = data;
            var data = vm.prepareCitationByYear(vm.authorsByYear, vm.top3, vm.year2);
            echartsDraw.draw('main3', data, 'author name', 'Top authors by year');

            jQuery.get('authorByConference(0.8).json', function (data) {
                vm.authorsByConference = data;
                var data = vm.prepareCitationByConference(vm.authorsByConference, vm.top4, vm.selectedConference2);
                echartsDraw.draw('main4', data, 'author name', 'Top authors by conference');

                jQuery.get('citationByYear(0.8).json', function (data) {
                    vm.citationByYear = data;
                    echartsDraw.draw('main1', vm.prepareCitationByYear(vm.citationByYear, vm.top1, vm.year1), 'paper title', 'Top citations by year');

                    jQuery.get('citationByConference(0.8).json', function (data) {
                        vm.citationByConference = data;
                        var data = vm.prepareCitationByConference(vm.citationByConference, vm.top2, vm.selectedConference1);
                        echartsDraw.draw('main2', data, 'paper title', 'Top citations by conference');


                    });
                });
            });
        });



        $scope.$watch(function () {
            return vm.selectedConference1;
        }, function (newValue) {
            var data = vm.prepareCitationByConference(vm.citationByConference, vm.top2, vm.selectedConference1);
            vm.beginDraw('main2', data, 'paper title');
        })

        $scope.$watch(function () {
            return vm.selectedConference2;
        }, function (newValue) {
            var data = vm.prepareCitationByConference(vm.authorsByConference, vm.top4, vm.selectedConference2);
            vm.beginDraw('main4', data, 'author name');
        })

        vm.beginDraw = function (main, data, seriesName) {
            echartsDraw.draw(main, data, seriesName);
        }

        vm.prepareCitationByYear = function (data, top, year) {
            var result = []
            for (var key in data) {
                if (!data.hasOwnProperty(key)) continue;
                var obj = data[key];
                for (var prop in obj) {
                    if (!obj.hasOwnProperty(prop)) continue;
                    if (parseInt(prop) == year) {
                        result.push({
                            paper: key,
                            count: obj[prop]
                        });
                    }
                }
            }
            result.sort(compare);
            result = result.slice(0, top);
            return result;
        }

        vm.prepareCitationByConference = function (data, top, conference) {
            var result = [];
            for (var key in data) {
                if (!data.hasOwnProperty(key)) continue;
                var obj = data[key];
                for (var prop in obj) {
                    if (!obj.hasOwnProperty(prop)) continue;
                    if (prop == conference) {
                        result.push({
                            paper: key,
                            count: obj[prop]
                        });
                    }
                }
            }
            result.sort(compare);
            result = result.slice(0, top);
            return result;
        }

        function compare(a, b) {
            if (a.count < b.count)
                return 1;
            if (a.count > b.count)
                return -1;
            return 0;
        }
    }
})();