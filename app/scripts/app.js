'use strict';
var app = angular.module('QuadriMix', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        //rota para home page
        .when('/home', {
            templateUrl: 'app/templates/home.html',
            controller: 'HomeCtrl'
        })
        // rota para detalhes do quadrinho
        .when('/comic/:id', {
            templateUrl: 'app/templates/comic_details.html',
            controller: 'ComicDetailCtrl'
        })
        //rota para tela de contato (inativo)
        .when('/contato', {
            templateUrl: 'app/templates/contato.html',
            controller: 'ContatoCtrl'
        })
        .otherwise({
            redirectTo: '/home'
        });
});