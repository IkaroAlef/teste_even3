'use strict'; 
app.controller('HomeCtrl', ['$rootScope', '$location', 'comicsFactory', '$scope', function ($rootScope, $location, comicsFactory, $scope) {
    $rootScope.activetab = $location.path();
    
    comicsFactory.getComics().then(function(response) {
        $scope.comics = response.data.data.results;

        //mais lidos aleatórios
        var a1 = comicsFactory.getRandomInt(0,19);
        var a2 = comicsFactory.getRandomInt(0,19);
        var a3 = comicsFactory.getRandomInt(0,19);
        
        //evitar repetidos
        if(a1==a2) a1+=1
        if(a1==a3) a1+=1
        if(a2==a3) a2+=1
        
        $scope.mais_lidos = [];
        $scope.mais_lidos.push($scope.comics[a1]);
        $scope.mais_lidos.push($scope.comics[a2]);
        $scope.mais_lidos.push($scope.comics[a3]);
        console.log($scope.mais_lidos);
    });
}]);

app.controller('ComicDetailCtrl', ['$scope', '$routeParams', 'comicsFactory', function($scope, $routeParams, comicsFactory) {
    comicsFactory.getComic($routeParams.id).then(function(response) {
        $scope.comic = response.data.data.results;
        console.log($scope.comic);
    });
}])

app.controller('ContatoCtrl', function($rootScope, $location){
   $rootScope.activetab = $location.path();
});