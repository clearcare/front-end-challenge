'use strict';

angular.module('gameApp').controller('GameCtrl', function ($scope, Tile) {
	
	$scope.tiles = [];
	$scope.resetGame = function(){
		$scope.tiles = [];
		var isBlack = true;
		
		for(var i = 0; i < 64; i ++){
			isBlack = !isBlack;
			var col = Math.floor(i/8);
			var row = i % 8;
			if(i % 8 === 0){
				isBlack = !isBlack;
			}

			var tile = new Tile(col, row, isBlack);
			$scope.tiles.push(tile);
		}
	};

	$scope.loginWithGithub = function(){

	};

	$scope.resetGame();

}).factory('Tile', [function () {
	function Tile(col, row, isBlack) {
		this.col = col;
		this.row = row;
		this.isBlack = isBlack;
	}
	return Tile;
}]);
