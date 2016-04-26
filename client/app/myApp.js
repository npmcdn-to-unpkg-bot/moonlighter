'use strict';

angular.module('moonlighterApp', [
  'ui.router',
  // 'moonlighterApp.landing',
  // 'moonlighterApp.signIn',
  // 'moonlighterApp.questFeed',
  // 'moonlighterApp.questProfile',
  // 'moonlighterApp.userProfile',
  // 'moonlighterApp.editProfile',
  // 'moonlighterApp.editQuest'
  ])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home',{
      url: '/home',
      controller: 'HomeCtrl',
      controllerAs: 'home',
      views: {
        'header':{
            templateUrl: 'app/templates/partials/header.html'
        },
        'content' : {
          templateUrl: '/app/templates/landing.html',
          controller: 'LandingCtrl'
        },
        'footer' : {
          templateUrl: ''
        }
      }
    })
    .state('questFeed', {
      url: '/questFeed',
      controller: 'QuestsFeedCtrl',
      controllerAs: 'questFeed',
 
          template: '<h1>This is a test</h1>'   
    })
    .state('app.questProfile', {
      url: 'questProfile',
      templateUrl: 'templates/questProfile.html',
      controller: 'QuestProfileCtrl'
    })
    .state('app.userProfile', {
      url: 'templates/userProfile',
      views: {
        'header': {
          templateUrl: '/templates/partials/header.html'
        },
        'content': {
          templateUrl: 'partials/userProfile.html',
          controller: 'UserProfileCtrl'
        }
      }
    })
    .state('app.editProfile', {
      url: 'partials/editProfile',
      templateUrl: 'partials/editProfile.html',
      controller: 'EditProfileCtrl'
    })
    .state('editQuest', {
      url: 'partials/editQuest',
      templateUrl: 'partials/editQuest.html',
      controller: 'EditQuestCtrl'
    });
}]);