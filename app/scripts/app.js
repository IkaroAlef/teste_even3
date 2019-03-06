'use strict';
var app = angular.module('QuadriMix', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/home',{
            templateUrl: 'app/templates/home.html',
            controller: 'HomeCtrl'
        })
        // route for the dish details page
		.when('/comic/:id', {
			templateUrl: 'app/templates/comic_details.html',
			controller: 'ComicDetailCtrl'
		})
        .when('/contato',{
            templateUrl: 'app/templates/contato.html',
            controller: 'ContatoCtrl'
        })
        .otherwise({redirectTo:'/'});
});