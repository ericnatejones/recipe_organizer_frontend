'use strict';

describe('myApp.recipes module', function() {

  beforeEach(module('myApp.recipes'));

  describe('recipes controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var recipesCtrl = $controller('RecipesCtrl');
      expect(recipesCtrl).toBeDefined();
    }));

  });
});