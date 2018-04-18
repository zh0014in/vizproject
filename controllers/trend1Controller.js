(function(){
    'use strict';

    angular
        .module('app')
        .controller('trend1Controller', trend1Controller)

    trend1Controller.$inject = [];

    function trend1Controller() {
        /* jshint validthis:true */
        var vm = this;

        activate();

        function activate() { }
    }
})();