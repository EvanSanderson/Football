"use strict";

(function(){
  angular
    .module("football")
    .controller("PlayerShowController", [
      "PlayerFactory",
      "$stateParams",
      "$state",
      "$window",
      PlayerShowControllerFunction
    ])

    function PlayerShowControllerFunction(PlayerFactory, $stateParams, $state, $window){
      var vm = this;
      vm.player = PlayerFactory.get({id: $stateParams.id});

// update function
      vm.update = function(){
        vm.player.$update({id: vm.player._id}).then(function(){
          console.log(vm.player)
          $state.go('playerShow', {id: $stateParams.id}, {reload: true})
        })
      }

// delete function
    vm.destroy = function(){
      console.log("button clicked")
      console.log(vm.player._id)
      vm.player.$delete({id: vm.player._id}).then(function(){
        console.log("ITS WORKING")
        $state.go('playerIndex', {reload:true});
      })
    }
}


})();
