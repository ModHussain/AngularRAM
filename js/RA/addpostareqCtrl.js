resourceApp.controller('addpostreqCtrl',["$scope","$rootScope","$state","RAService",function($scope,$rootScope,$state,RAService){
    $scope.$on('$viewContentLoaded', function () {
        $scope.postrequirement = {};
		 $scope.companyNameList=[];
		 $scope.companyId=[];
		 $scope.companyid();
		
        })
		
			$scope.companyid = function(){
				RAService.getCompanyList().then(function(data) {
            debugger;
             $scope.list=data;
			 console.log($scope.list[0].companyName);
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
			 

         
       
	$scope.jobcategory = ["Java Developer","UI Developer","IDM Consultant","xgfhdfgh"];
	$scope.jobtype = ["contract","full-time","part-time"];
    $scope.joblocation= ["Bangalore","Chennai","Hyderabad","Pune"];
    $scope.experience = ["1-2 years","2-3 years","3-5 years","5-7 years","7-10 years"]; 
	$scope.primaryskills = ["Java","JDBC","HTML5","CSS3","Javascript","AngularJS"];
	$scope.secondaryskills = ["Oracle","MYSQL","SQL Server","MongoDB","WebRTC","Web Socket"];
	$scope.joining = ["Immediate","10-15 days","15-30 days","30-45 days"];
    $scope.addReq = function(){
        debugger;
        $scope.postrequirement.registrationId= $scope.comId;
        $scope.postrequirement.primarySkills=$scope.postrequirement.primarySkills.toString();
        $scope.postrequirement.secondarySkills=$scope.postrequirement.secondarySkills.toString();
console.log($scope.postrequirement.primarySkills);
console.log($scope.postrequirement.secondarySkills);
        RAService.adddata($scope.postrequirement).then(function(response){
        $scope.bbbb =$scope.postrequirement;
        console.log($scope.bbbb);
       $state.go('RA.postarequirementlist');
        },function(err){
			if(err){
				$scope.errorMessage = err;
			}else{
				$scope.errorMessage = err;
           }   
        }
        )
	},
	

    $scope.showBulk = true;
	$scope.hideBulk = true;
    $scope.bulkFunction=function(){
    	 $scope.showBulk = !$scope.showBulk;
    	 $scope.hideBulk =!$scope.hideBulk
    },
   
 $scope.SelectedFileForUpload = null;
   
    
    $scope.UploadFile = function (files) {
        $scope.$apply(function () { //I have used $scope.$apply because I will call this function from File input type control which is not supported 2 way binding
            $scope.Message = "";
            $scope.SelectedFileForUpload = files[0];
        })
    }
 
    //Parse Excel Data 
    $scope.ParseExcelDataAndSave = function () {
    	debugger;
        var file = $scope.SelectedFileForUpload;
        if (file) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var data = e.target.result;
                //XLSX from js-xlsx library , which I will add in page view page
                var workbook = XLSX.read(data, { type: 'binary' });
                var sheetName = workbook.SheetNames[0];
                var excelData = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
                if (excelData.length > 0) {
                	
                	 $scope.registrationId= $scope.comId;
                	 var excelAttachment = {
                             _id: $scope.registrationId,
                             uploadFile: excelData
                         };
                	 RAService.uploadFileToUrl(excelAttachment).then(function(data){
                		
                		 $scope.d=data
                     	console.log("success"+ $scope.d);
                     },function(err){
                     	console.log("error");
                     })
                }
                else {
                    $scope.Message = "No data found";
                }
            }
            reader.onerror = function (ex) {
                console.log(ex);
            }
 
            reader.readAsBinaryString(file);
        }
    }
    
    
//    5a97a3c0b9d6f51fec3edce7
    
    
}]);