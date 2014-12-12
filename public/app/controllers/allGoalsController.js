/*******************************************
*  Controller for the allGoalsList template   *
*******************************************/
angular.module('app.allGoals', [])
.controller('allGoalsController', function($scope){
  console.log('controller, yo');
});
	//temporary testing array for populating goals list
	// $scope.data = {};
	// var goalsList = [];

	// //stub function for testing / dev. will use HTTP service when fleshed out.

	// $scope.getAllGoals = function(){
	// 	$scope.data.goalsList = goalsList;
	// 	goalsService.getAllGoals().then(function(data){
	// 		$scope.data.goalsList = data[0]['goals'];
	// 		console.log(JSON.stringify(data[0]['goals']));
	// 	});
	// }

	// //Shows success dimmer flash and then deletes goal when the user clicks "I did it"

	// $scope.celebrateSuccess = function(event){
		
	// 	$('.success-dimmer').dimmer('show');
		
	// 	$scope.successDelete(event);
	// }

	// $scope.successDelete = function(event){
	// 	var idToDelete = $(event.target).closest('.item').find('.goal-id').val();
	// 	goalsService.deleteGoal(idToDelete);
	// 	$scope.getGoals();
	// 	setTimeout(function(){
	// 		$('.success-dimmer').dimmer('hide');
			
	// 		//then refresh the view

	// 		$scope.getGoals();

	// 	}, 2000);
	// }



	// //Function to close dimmer flash. Used above and directly from the "no" button on
	// //deletion confirm.

	// $scope.closeConfirmDimmer = function(){
	// 	$('.delete-goal-dimmer').dimmer('hide');
	// }

	// //call our function to get goals on load
	// $scope.getGoals();

	// $scope.$on('updated', function(){
	// 	$scope.getGoals();
	// })

// });
