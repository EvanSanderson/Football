"use strict";

(function(){
  angular
    .module("football")
    .controller("PlayerShowController", [
      "PlayerFactory",
      "$stateParams",
      PlayerShowControllerFunction
    ])

    function PlayerShowControllerFunction(PlayerFactory, $stateParams){
      this.player = PlayerFactory.get({id: $stateParams.id});

    }
})();
