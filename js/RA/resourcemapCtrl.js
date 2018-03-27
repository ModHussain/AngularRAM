resourceApp.controller('resourcemapCtrl',["$scope","$state","$stateParams","RAService",function($scope,$state,$stateParams,RAService){
	$scope.$on('$viewContentLoaded', function () {
		$scope.companyNameList=[];
		 $scope.companyId=[];
	})
	$scope.type = ["Company Name","Requirement Type"];
	$scope.resourcelist = false;
	$scope.selecttype= '';
	$scope.resourcemaplist = function(){
		debugger;
		if($scope.selecttype == "Company Name"){
				RAService.getCompanyList().then(function(data) {
            debugger;
             $scope.list=data;
			 console.log($scope.list);
			 for(var i=0; i< $scope.list.length;i++){ 
				$scope.companyNameList.push($scope.list[i].companyName);
				$scope.companyId.push($scope.list[i]._id);
			 }
				$scope.companyid = function(){
		  debugger;
		 for(var j=0;j<$scope.companyNameList.length;j++){

            if($scope.companyName1 == $scope.companyNameList[j]){
               $scope.comId = $scope.companyId[j];
			   console.log($scope.comId);
            }
		 }
	  }
        });	
		}
		else{
			RAService.postareqList().then(function(data) {
				debugger;
				$scope.list = data;
				console.log($scope.list);
				for(var k=0; k< $scope.list.length;k++){
					$scope.companyNameList.push($scope.list[k].jobTitle);
					$scope.companyId.push($scope.list[k]._id);
				}
				$scope.companyid = function(){
					debugger;
					for(var l=0;l<$scope.companyNameList.length;l++){
						$scope.comId = $scope.companyId[l];
						console.log($scope.comId);
					}
				}
			});
			
		}
	}
	
	$scope.search = function(){
		$scope.resourcelist = true;
	}
	
	
	
	
}])
