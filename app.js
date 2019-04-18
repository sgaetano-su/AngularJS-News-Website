var app = angular.module('news363', []);

const key = '';

/* Overall Top News Controller */
    app.controller('topNewsCtrl', function ($scope, $http) {
        $scope.news = [];

        $http({
            url: '',
            method: 'GET',
            params: {
                
            }
        }).then(function(response) {
            
        }, function(error) {
            
        });
    });

/* Top Tech News Controller */
    app.controller('techNewsCtrl', function ($scope, $http) {
        $scope.news = [];

        $http({
            url: '',
            method: 'GET',
            params: {
                
            }
        }).then(function(response) {
            
        }, function(error) {
            
        });
    });

/* NY Times News Controller */
    app.controller('nyTimesNewsCtrl', function ($scope, $http) {
        $scope.news = [];

        $http({
            url: '',
            method: 'GET',
            params: {
                
            }
        }).then(function(response) {
            
        }, function(error) {
            
        });
    });

/* ESPN News Controller */
    app.controller('espnNewsCtrl', function ($scope, $http) {
        $scope.news = [];

        $http({
            url: '',
            method: 'GET',
            params: {
                
            }
        }).then(function(response) {
            
        }, function(error) {
            
        });
    });

/* Main Header Component */


/* Detailed Story Item Component */


/* Story List Component */