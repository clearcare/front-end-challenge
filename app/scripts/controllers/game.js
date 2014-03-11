'use strict';

var gameApp = angular.module('gameApp');

gameApp.controller('GameCtrl', function ($scope, $compile, Tile) {
  $scope.resetGame = function () {
    $scope.tiles = [];
    $scope.rows = [];
    var isBlack = true;

    var row = [];
    for (var i = 0; i < 64; i++) {
      isBlack = !isBlack;
      var rowCount = Math.floor(i / 8);
      var col = i % 8;
      if (i % 8 === 0) {
        isBlack = !isBlack;
        row = [];
        $scope.rows.push(row);
      }

      var piece = null;
      if (isBlack && rowCount < 3) {
        piece = 'red';
      } else if (isBlack && rowCount > 4) {
        piece = 'white';
      }

      var tile = new Tile(col, rowCount, isBlack, piece);

      row.push(tile);
      $scope.tiles.push(tile);
    }
  };

  $scope.loginWithGithub = function () {
  };

  $scope.resetGame();
});

gameApp.factory('Tile', [function () {
  function Tile(col, row, isBlack, piece) {
    this.col = col;
    this.row = row;
    this.isBlack = isBlack;
    this.piece = piece;
  }

  return Tile;
}]);

gameApp.directive('draggable', function () {
  return {
    restrict: 'A',

    link: function (scope, element) {
      element.draggable({
        revert: true,
        revertDuration: 0,
        snap: true,
        containment: ".checker-board"
      });
    }
  };
});

gameApp.directive('droppable', function ($compile) {
  return {
    restrict: 'A',
    link: function (scope, element) {
      element.droppable({
        drop: function (event, ui) {
          var dragEl = $(ui.draggable),
            dragElParent = dragEl.parent();

          if (scope.column.piece != null) {
            return;
          }

          scope.column.piece = dragElParent.scope().column.piece;
          dragElParent.scope().column.piece = null;
          scope.$apply();
        }
      });
    }
  };
});
