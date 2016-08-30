"use strict";

(function(){
  angular
  .module("football")
  .factory("PlayerFactory", [
    "$resource",
    PlayerFactoryFunction
  ])

  function PlayerFactoryFunction($resource){
    return $resource("http://localhost:4000/players/:id", {}, {
      update: { method: "PUT" }
    });
  }
})();
