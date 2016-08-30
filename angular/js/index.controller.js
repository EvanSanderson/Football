"use strict";

(function(){
  angular
    .module("football")
    .controller("PlayerIndexController", [
      "PlayerFactory",
      PlayerIndexControllerFunction
    ])

    function PlayerIndexControllerFunction(PlayerFactory){
      this.players = PlayerFactory.query()
      console.log(this.players)
    }
})();
