resourceApp.controller('resourcelistCtrl',function($scope,$http,$filter,RAService){
	
	$scope.Selectors =["firstName","emailId","mobileNumber","skills","totalExperience","availability","preferredLocation","city"];
	    $scope.Selected = ""; 
	    $scope.filterValue = "";
	
	$http({
	method : "GET",
		url : "http://localhost:8080/ResourceAdda/rest/resource/listResources/1/15",
		
		
	}).then(function resourcelist(response){
		$scope.resourcelist = response.data;
	console.log("array" + $scope.resourcelist);
	
	})
	
	console.log("working ra ctrl");
	
		$scope.ResFilter = function(){
	//debugger;
        var filter = {
        		firstName: $scope.Selected,
        		con: $scope.filterValue
        };
        RAService.postResfilter(filter).then(function(response){
           $scope.resourcelist = response.data;
           console.log($scope.resourcelist);
       },function(err){
       if(err){
           $scope.errorMessage = err;
       }
   })
}
	

			
			
})
		


	
