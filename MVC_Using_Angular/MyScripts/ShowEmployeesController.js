/// <reference path="F:\Mahesh_New\Articles\MVC\Infra\A8_SPA_New_MVC_Using_Angular\MVC_Using_Angular\Scripts/angular.min.js" />

/// <reference path="F:\Mahesh_New\Articles\MVC\Infra\A8_SPA_New_MVC_Using_Angular\MVC_Using_Angular\MyScripts/Module.js" />
/// <reference path="Services.js" />

//The controller has dependency upon the Service and ShareData.


app.controller('ShowEmployeesController', function ($scope, $location, SinglePageCRUDService, ShareData) {
 
    loadRecords();

//Function to Load all Employees Records.   
    function loadRecords()
    {
        var promiseGetEmployees = SinglePageCRUDService.getEmployees();

        promiseGetEmployees.then(function (pl) { $scope.Employees = pl.data },
              function (errorPl) {
                  $scope.error = 'failure loading Employee', errorPl;
              });
    }


    //Method to route to the addemployee
    $scope.addEmployee = function () {
        $location.path("/addemployee");
    }

    //Method to route to the editEmployee
    //The EmpNo passed to this method is further set to the ShareData
    //This value can then be used to communicate across the Controllers
    $scope.editEmployee = function (EmpNo) {
        ShareData.value = EmpNo;
        $location.path("/editemployee");
    }

    //Method to route to the deleteEmployee
    //The EmpNo passed to this method is further set to the ShareData
    //This value can then be used to communicate across the Controllers
    $scope.deleteEmployee = function (EmpNo) {
        ShareData.value = EmpNo;
        $location.path("/deleteemployee");
    }
});