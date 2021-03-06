﻿(function () {
    'use strict';

    angular
        .module('App')
        .factory('QuestionResultService', QuestionResultService);
        

    QuestionResultService.$inject = ['$http'];

    function QuestionResultService($http) {
        return {
            Read: Read
        }

        function Read(questionResultFilter) {
            return $http({
                method: 'POST',
                url: '../QuestionResult/Result',
                data: $.param(questionResultFilter),
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });
        }


    }
})();