angular.module("moonlighterApp.barracksService", [])

  .factory('Barracks', function ($http) {
      

    function getCodeWar(){
      return $http({
        method: 'GET', 
        url: '/codewars'
      })
      .then(function (resp){
        console.log("heres your resp in barracksService", resp)
        return resp
      })
      .catch(function(err){
        console.error(err)
      })
    }


    function cwUserStats(){
      return $http({
        method: 'GET', 
        url: '/codewars/user'
      })
      .then(function (resp){
        console.log("heres your resp in barracksService", resp)
        return resp;
      })
      .catch(function(err){
        console.error(err)
      });
    }

    function cwNextChallenge(){
      return $http({
        method: 'GET',
        url: '/codewars/nextChallenge/'
      })
      .then(function (data){
        console.log('Challenge data Barracks:41',data);
        return data;
      })
      .catch(function(err){
        console.log(err);
      })
    }
      return {
        getCodeWar: getCodeWar,
        cwUserStats: cwUserStats,
        cwNextChallenge:cwNextChallenge
      }


  })
