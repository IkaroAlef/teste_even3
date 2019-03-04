'use strict';
var app = angular.module('QuadriMix', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/home',{
            templateUrl: 'app/templates/home.html',
            controller: 'HomeCtrl'
        })
        .when('/contato',{
            templateUrl: 'app/templates/contato.html',
            controller: 'ContatoCtrl'
        })
        .otherwise({redirectTo:'/'});
});