angular.module('app.add', [])
.controller('addGoalController', function(goalsService, $scope){
	$scope.data = {
        goal: {
          goal: "",
          dueDate: new Date(),
          why: "",
          freq: {
            daily: false,
            weekly: false,
            monthly: false
          }
        }
      };

  $scope.createGoal = function(){
    goalsService.createGoal($scope.data.goal).then(function(res){
      console.log(res);
    });
  }
          
  $scope.freqToggle = function(value){
    for (key in $scope.data.goal.freq){
      if (value === key){
        $scope.data.goal.freq[key] = true;
      } else {
        $scope.data.goal.freq[key] = false;
      }
    }
  };
});