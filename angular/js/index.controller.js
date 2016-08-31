"use strict";

(function(){
  angular
    .module("football")
    .controller("PlayerIndexController", [
      "PlayerFactory",
      "$state",
      PlayerIndexControllerFunction
    ])

    function PlayerIndexControllerFunction(PlayerFactory, $state){
      var vm = this;
      vm.players = PlayerFactory.query()
      console.log(vm.players)

      vm.player = new PlayerFactory();

      vm.create = function(){
        console.log("working")
        vm.player.$save().then(function(res){
          console.log(res)
          $state.go("playerIndex");
        })
      }
    }
})();
