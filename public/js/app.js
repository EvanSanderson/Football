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
      .state("welcome", {
        console.log("FART")
        url: "/",
        templateUrl: "/assets/html/welcome.html"
      })
    }
})();
