"use strict";

(function(){
  angular
    .module("football")
    .controller("PlayerShowController", [
      "PlayerFactory",
      "$stateParams",
      "$state",
      PlayerShowControllerFunction
    ])

    function PlayerShowControllerFunction(PlayerFactory, $stateParams, $state){
      var vm = this;
      vm.player = PlayerFactory.get({id: $stateParams.id});

      vm.update = function(){
        console.log(vm.player._id)
        vm.player.$update({id: vm.player._id}).then(function(){
          $state.go('playerShow', {id: $stateParams.id})
        })
      }

    }


})();
