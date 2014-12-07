angular.module('app', ['ui.router', 'app.login', 'app.add', 'app.goals', 'app.authFact', 'app.goalFact'])
.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

	$stateProvider
  .state('addGoalState', {
    url: "/",
    views: {
      "addGoal": { 
        templateUrl: "/app/views/addGoal.template.html" ,
        controller: "addGoalController"
      },
      "reasons@addGoalState": {
        templateUrl: "/app/views/reasonsView.template.html"
      },
      "goalsList": {
        templateUrl: "/app/views/goalsView.template.html",
        controller: "goalsListController"
      }
    }
  })
  .state('loginState', {
    url:'/login',
    views: {
      'authPane': {
        templateUrl: '/app/views/loginView.template.html',
        controller: 'loginController'
      }
    }
  })
})