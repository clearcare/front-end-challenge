'use strict';

describe('Controller: GameCtrl', function () {

  // load the controller's module
  beforeEach(module('gameApp'));

  var GameCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GameCtrl = $controller('GameCtrl', {
      $scope: scope
    });
  }));

  it('should have 64 board tiles on the scope', function () {
    scope.resetGame();
    expect(scope.tiles.length).toBe(64);
  });

  it('should start at row 0 col 0', function () {
    scope.resetGame();
    var tile = scope.tiles[0];
    expect(tile.row).toBe(0);
    expect(tile.col).toBe(0);
  });

  it('should end at row 7 col 7', function () {
    scope.resetGame();
    var tile = scope.tiles[63];
    expect(tile.row).toBe(7);
    expect(tile.col).toBe(7);
  });

  it('should be black at the first tile', function () {
    scope.resetGame();
    var tile = scope.tiles[0];
    expect(tile.isBlack).toBe(true);
  });

  it('should be black at the last tile', function () {
    scope.resetGame();
    var tile = scope.tiles[63];
    expect(tile.isBlack).toBe(true);
  });
});
