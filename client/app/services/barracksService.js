angular.module("moonlighterApp.barracksService", [])

  .factory('Barracks', function ($http) {
    
    var solutionDetail = {};

    function addCwAPI(data) {
      return $http({
        method: 'POST',
        url: '/codewars/api',
        data: data
      })
      .then(function (resp) {
        console.log("response from cw API: ", resp);
      })
      .catch(function (err) {
        console.error(err);
      })
    }

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
        console.error(err);
      });
    }

    function cwChallenge(challengeType){
      return $http({
        method: 'GET',
        url: '/codewars/nextChallenge?challengeType='+challengeType
      })
      .then(function (data){
        console.log('Challenge data Barracks:41',data);
        return data;
      })
      .catch(function(err){
        console.log(err);
      });
    }

    function cwTestSolution(code){
      return $http({
        method: 'POST',
        url: '/codewars/testSolution?code='+code,
      })
      .then(function(resp){
        console.log("like here is your response in barracksService:", resp);
        return resp
      })
      .catch(function(err){
        console.error(err);
      });
    }


    function cwFinalSolution(){
      return $http({
        method: 'GET', 
        url: '/codewars/finalSolution',
      })
      .then(function(resp){
        console.log("cwFinalSolution is a go in barracksService")
        return resp
      })
      .catch(function(err){
        console.error(err)
      });
    }


    return {
      cwFinalSolution: cwFinalSolution,
      getCodeWar: getCodeWar,
      cwUserStats: cwUserStats,
      cwChallenge: cwChallenge,
      addCwAPI: addCwAPI,
      cwTestSolution: cwTestSolution, 
    };



});
