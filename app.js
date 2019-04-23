var app = angular.module('news363', []);

const key = 'f4b713a6e3f64750ab8a48d9a2530eea';

/* Overall Top News Controller */
    app.controller('topNewsCtrl', function ($scope, $http) {
        $scope.news = [];

        $http({
            url: 'https://newsapi.org/v2/top-headlines',
            method: 'GET',
            params: {
                country:'us',
                apiKey: key,
                pageSize:4,
            }
        }).then(function(response) {
            console.log(response.data.articles);

            $scope.news = response.data.articles
        }, function(error) {
            console.log(error);
        });
    });

/* Top Tech News Controller */
    app.controller('techNewsCtrl', function ($scope, $http) {
        $scope.news = [];

        $http({
            url: 'https://newsapi.org/v2/top-headlines',
            method: 'GET',
            params: {
                country:'us',
                apiKey: key,
                pageSize:4,
                category:'technology',      
            }
        }).then(function(response) {
            console.log(response.data.articles);

            $scope.news = response.data.articles
        }, function(error) {
            console.log(error);
        });
    });

/* NY Times News Controller */
    app.controller('nyTimesNewsCtrl', function ($scope, $http) {
        $scope.news = [];

        $http({
            url: 'https://newsapi.org/v2/top-headlines',
            method: 'GET',
            params: {
                apiKey: key,
                pageSize:10,
                sources:'the-new-york-times',      
            }
        }).then(function(response) {
            console.log(response.data.articles);

            $scope.news = response.data.articles
        }, function(error) {
            console.log(error);
        });
    });

/* ESPN News Controller */
    app.controller('espnNewsCtrl', function ($scope, $http) {
        $scope.news = [];

        $http({
            url: 'https://newsapi.org/v2/top-headlines',
            method: 'GET',
            params: {
                apiKey: key,
                pageSize:10,
                sources:'espn',      
            }
        }).then(function(response) {
            console.log(response.data.articles);

            $scope.news = response.data.articles
        }, function(error) {
            console.log(error);
        });
    });


/* Main Header Component */
app.component('mainHeader', {
    template: `
    <header>
        <nav class="navbar navbar-light bg-light border-bottom fixed-top">
            <div class="container">
                <a href="#" class="navbar-brand">News363</a>

                <ul class="navbar-nav flex-row">
                    <li class="nav-item mr-4">
                        <a href="#top-news" class="nav-link">Top News</a>
                    </li>
                    <li class="nav-item mr-4">
                        <a href="#technology" class="nav-link">Technology</a>
                    </li>
                    <li class="nav-item mr-4">
                        <a href="#ny-times" class="nav-link">Source: NY Times</a>
                    </li>
                    <li class="nav-item mr-4">
                        <a href="#espn" class="nav-link">Source: ESPN</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
    `
}); 


/* Detailed Story Item Component */

app.component('detailedStoryItem', {
    bindings:{
        item:'<'
    },
    template: `

    <style> 
        a {
           color: black; 
        }

    </style>

            <article class="pb-4">
                <img ng-src="{{ $ctrl.item.urlToImage }}"/>

                <h3 class="font-weight-light">
                    <a ng-href="{{ $ctrl.item.url }}">{{ $ctrl.item.title}}</a>
                </h3>

                <div class="text-lead">{{ $ctrl.item.description}}</div>
            </article>
      
    `
}); 

/* Story List Component */

app.component('storyItemList', {
    bindings:{
        item:'<'
    },

    template: `
    <style>

        a{
            color:black;

        }

        li {
            list-style:none;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 470px;

        }


    </style>
    <ul>
        <li class="border-bottom py-2">
                <a ng-href="{{ $ctrl.item.url }}">{{ $ctrl.item.title}}</a>

        </li>
    </ul>

`

}); 