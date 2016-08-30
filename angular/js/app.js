"use strict";

(function(){
  angular
    .module("football", [
      "ui.router",
      "ngResource"
    ])
    .config([
      "$stateProvider",
      RouterFunction
    ])

    function RouterFunction($stateProvider){
      $stateProvider
      .state("playerIndex", {
        url: "/players",
        templateUrl: "js/index.html",
        controller: "PlayerIndexController",
        controllerAs: "PlayerIndexViewModel"
      })
      .state("playerShow", {
        url: "/players/:id",
        templateUrl: "js/show.html",
        controller: "PlayerShowController",
        controllerAs: "PlayerShowViewModel"
      })

    }
})();
