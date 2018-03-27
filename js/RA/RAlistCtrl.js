resourceApp.controller('RAlistCtrl',['$scope','$document','RAService',function($scope,$document,RAService,$http){
	/*$scope.Selectors =["FirstName","Email","Mobile","Skills","Experience","Availability","PreferredLocation","City"];
	console.log("working ra list ctrl");*/

	//search filter code//
	
/*	resourceApp.filter("search", function ($filter) {
        return function (ralist1, $scope) {
            var selected = $scope.selected;
            var parameter = $scope.parameter;                
            if (parameter == undefined || parameter == '') return employees;
            var resultSet = [];
            for (var i = 0; i < ralist1.length; i++) {
                var resource = ralist1[i];
                if (selected == 'First Name') {
                    if (parameter == resource.FirstName)
                        resultSet.push(resource);
                }
                if (selected == 'Email') {
                    if (parameter == resource.Email)
                        resultSet.push(resource);
                }
                if (selected == 'Mobile') {
                    if (parameter == resource.Mobile)
                        resultSet.push(resource);
                }
                if (selected == 'Skills') {
                    if (parameter == resource.Skills)
                        resultSet.push(resource);
                }
                if (selected == 'Experience') {
                    if (parameter == resource.Experience)
                        resultSet.push(resource);
                }
                if (selected == 'Availability') {
                    if (parameter == resource.Availability)
                        resultSet.push(resource);
                }
                if (selected == 'PreferredLocation') {
                    if (parameter == resource.PreferredLocation)
                        resultSet.push(resource);
                }
                if (selected == 'City') {
                    if (parameter == resource.City)
                        resultSet.push(resource);
                }
            }
            return resultSet;

           
        }
    })
	*/
	
	
	
	// end of search code//
	
	
	
	
	
	$http({
		method : "GET",
		url : "http://localhost:8080/ResourceAdda/rest/resource/listResources/1/10",
	}).then(function ralist(response){
		$scope.ralist1 = response.data;
		console.log("array" + $scope.ralist1);
	})
	$scope.$on('$viewContentLoaded', function () {
		$scope.registration = {};
		$scope.registrationlist();
	})
	
	
		$scope.title = "Registration";
	$scope.status = "active";
	$scope.registrationlist = function(){
		RAService.RAReg().then(function(data){
			$scope.details = data;
			console.log($scope.details);
		},function(err){
			if(err){
				$scope.errorMessage = err;
			}
		})
	}
	
	$scope.statusId = function(registration){
		debugger;
		if(registration.status == "Active"){
			registration.status = "InActive";
		RAService.registrationStatus(registration).then(function(data){
			$scope.ssss = data;
			console.log($scope.ssss);
			},function(err){
				if(err){
					$scope.errorMessage = err;
				}
			})
		}else{
				registration.status = "Active";
		RAService.registrationStatus(registration).then(function(data){
			$scope.ssss = data;
			console.log($scope.ssss);
			},function(err){
				if(err){
					$scope.errorMessage = err;
				}
			})
		}
		
		
	}
//	$scope.RegisterDeleteById = function(registration){
//		RAService.deleteregistration(registration).then(function(data){
//			$scope.deleteMesssage = data;
//			console.log("Delete Successfully..!!");
//			$scope.registrationlist();
//		})
//	}

}]);

resourceApp.controller('addRACtrl',['$scope','$state','RAService',function($scope,$state,RAService){
	$scope.$on('$viewContentLoaded', function () {
		$scope.registration = {};
	})
	$scope.companytype = ["Public Limited Company","Private Limited Company","Partnership","Proprietary"];
	$scope.quality = ["ISO 9001","ISO 9002","ISO I400","NONE"];
	$scope.registrationtype = ["Vendor","Customer","RA"];
	$scope.Licences = ['1','2','3','4','5'];
	$scope.Period = ['1','2','3','4','5']
	$scope.addData = function(){
		debugger;
		$scope.registration.registrationType = $scope.registration.registrationType.toString();
		RAService.saveRegistration($scope.registration).then(function(data){
			$scope.dddd = data;
			console.log($scope.dddd);
			$state.go('RA.RAlist');
		},function(err){    
			
			   
			if(err){
				$scope.errorMessage = err;
			}else{
				$scope.errorMessage = err;
			}
		});
	}
	
	
}]);
