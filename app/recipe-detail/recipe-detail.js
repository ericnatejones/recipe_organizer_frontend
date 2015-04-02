'use strict';

angular.module('myApp.recipeDetail', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/recipes/:recipeId', {
    templateUrl: 'recipe-detail/recipe-detail.html',
    controller: 'RecipeDetailCtrl'
  });
}])

.controller('RecipeDetailCtrl', ['$scope', 'Restangular', '$routeParams', '$location', function($scope, Restangular, $routeParams, $location) {

    $scope.recipeId = $routeParams.recipeId;

        Restangular.one('recipes', $scope.recipeId).customGET().then(function (recipe) {
            $scope.recipe = recipe;
        });


        $scope.deleteRecipe = function() {
        var confirmation = confirm('Are you sure you want to delete this recipe? This cannot be undone');

        if (confirmation) {
            Restangular.one('recipes', $scope.recipeId).customDELETE().then(function() {
                alert('Your recipe was successfully deleted!');
                $location.path('/list_of_recipes');
            },
            function() {
                alert('There was a problem deleting your recipe')
            })
        }


    };

    $scope.submitComment = function() {

        var get_comment = {
            text: $scope.Comment,
           recipe: $scope.recipe.id
        };

        Restangular.all('commentList/').customPOST(get_comment).then(function (comment) {
            $scope.recipe.comments.push(comment);
        });
    }
}]);