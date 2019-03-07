'use strict';
app.controller('HomeCtrl', ['$rootScope', '$location', 'comicsFactory', '$scope', function ($rootScope, $location, comicsFactory, $scope) {
    $rootScope.activetab = $location.path();

    //função para retornar os quadrinhos e fazer algumas seleções (raros, mais lidos)
    comicsFactory.getComics().then(function (response) {
        $scope.comics = response.data.data.results;
        var res_len = response.data.data.count - 1;

        //mais lidos aleatórios
        var a1 = comicsFactory.getRandomInt(0, res_len);
        var a2 = comicsFactory.getRandomInt(0, res_len);
        var a3 = comicsFactory.getRandomInt(0, res_len);

        //evitar repetidos
        if (a1 == a2) a1 += 1
        if (a1 == a3) a1 += 1
        if (a2 == a3) a2 += 1

        $scope.mais_lidos = [];
        $scope.mais_lidos.push($scope.comics[a1]);
        $scope.mais_lidos.push($scope.comics[a2]);
        $scope.mais_lidos.push($scope.comics[a3]);

        var qtd = res_len * 0.1;
        $scope.raros = [];
        for (var i = 0; i < qtd; i++) {
            $scope.raros.push(comicsFactory.getRandomInt(0, res_len))
        }

        $scope.isRaro = function (index) {
            for (var i = 0; i < $scope.raros.length; i++) {
                if ($scope.raros[i] == index)
                    return true;
            }
        };
    });
}]);

//controller para tela de detalhes do quadrinho
app.controller('ComicDetailCtrl', ['$scope', '$routeParams', 'comicsFactory', function ($scope, $routeParams, comicsFactory) {
    comicsFactory.getComic($routeParams.id).then(function (response) {
        $scope.comic = response.data.data.results;
    });
}])

//contrlador para tela de contato (inativo)
app.controller('ContatoCtrl', function ($rootScope, $location) {
    $rootScope.activetab = $location.path();
});