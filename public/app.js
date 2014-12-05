angular.module('app', ['ui.router', 'app.add', 'app.goals', 'app.goalFact'])
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
      "goalsList": {
        templateUrl: "/app/views/goalsView.template.html",
        controller: "goalsListController"
      }
    }
  })
})