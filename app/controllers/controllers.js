'use strict'; 
app.controller('HomeCtrl', ['$rootScope', '$location', 'comicsFactory', '$scope', function ($rootScope, $location, comicsFactory, $scope) {
    $rootScope.activetab = $location.path();
    /*comicsFactory.getComics().then(function(response) {
        $scope.comics = response.data;
    })*/
    $scope.comics = comicsFactory.getComics().then(function(response) {
        $scope.comics = response.data.data.results;
        console.log($scope.comics);
        console.log($scope.comics[1].thumbnail.path);
    });
    
    //$rootScope.comics = comicsFactory.getComics();
    console.log($scope.comics);
}]);

app.controller('ContatoCtrl', function($rootScope, $location)
{
   $rootScope.activetab = $location.path();
});