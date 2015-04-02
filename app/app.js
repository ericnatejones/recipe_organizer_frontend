'use strict';
// Declare app level module which depends on views, and components
angular.module('myApp', [
    'restangular',
    'ngRoute',
    'myApp.recipes',
    'myApp.add-recipe',
    'myApp.version',
    'myApp.questions',
    'myApp.list_of_recipes',
    'myApp.recipeDetail'
])
    .config(['$routeProvider', 'RestangularProvider', function ($routeProvider, RestangularProvider) {
        $routeProvider
            .otherwise({redirectTo: '/list_of_recipes'});

        RestangularProvider.setBaseUrl('http://localhost:8001')
    }]);

