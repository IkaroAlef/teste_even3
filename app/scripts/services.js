'use strict';

var app = angular.module('QuadriMix')
//var http = require('http');
//var crypto = require('crypto');
var comics = new Array();
var BASE_URL = "https://gateway.marvel.com";
var API_KEY = '2e5b40ff1e6340400aad13d76d0bab30'; //public key
var PRIV_KEY = 'f64fac84075e80e4f64536a9d57416816b529035' //private key
var ts = new Date().getTime(); //timestamp
var hash = CryptoJS.MD5(ts + PRIV_KEY + API_KEY); //crypto.createHash('md5').update(ts + PRIV_KEY + API_KEY).digest('hex'); //hash
var limit = 100; // qtd de quadrinhos solicitados da API da Marvel
var url = BASE_URL + '/v1/public/comics?' + 'ts='+ ts + '&apikey=' + API_KEY + '&hash=' + hash;
/*console.log(url);
$.getJSON(url, function (data) {
	comics = data.data.results;
	console.log(comics);
});*/

app.factory('comicsFactory',['$http', function ($http) {
	var comicsFac = {};
	comicsFac.getComics = function(){	
		return $http({
			method: 'GET', // ou 'POST'
			url: url
		  })//.then(function(response, status) {
			//comics = response.data.data.results;
			//console.log(comics);
			//return comics;
		  //});
	}

	comicsFac.getComic = function (index) {
		return comics[index];
	};

	return comicsFac;
}]);
