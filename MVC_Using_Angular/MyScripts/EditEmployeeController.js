/// <reference path="F:\Mahesh_New\Articles\MVC\Infra\A8_SPA_New_MVC_Using_Angular\MVC_Using_Angular\Scripts/angular.min.js" />

/// <reference path="F:\Mahesh_New\Articles\MVC\Infra\A8_SPA_New_MVC_Using_Angular\MVC_Using_Angular\MyScripts/Module.js" />
/// <reference path="Services.js" />



app.controller("EditEmployeeController", function ($scope, $location,ShareData,SinglePageCRUDService) {
     
    getEmployee();
    function getEmployee() {
        
        var promiseGetEmployee = SinglePageCRUDService.getEmployee(ShareData.value);

        
        promiseGetEmployee.then(function (pl)
        {
            $scope.Employee = pl.data;
        },
              function (errorPl) {
                  $scope.error = 'failure loading Employee', errorPl;
              });
    }


    //The Save method used to make HTTP PUT call to the WEB API to update the record

    $scope.save = function () {
        var Employee = {
            EmpNo: $scope.Employee.EmpNo,
            EmpName: $scope.Employee.EmpName,
            Salary: $scope.Employee.Salary,
            DeptName: $scope.Employee.DeptName,
            Designation: $scope.Employee.Designation
        };

        var promisePutEmployee = SinglePageCRUDService.put($scope.Employee.EmpNo,Employee);
        promisePutEmployee.then(function (pl)
        {
            $location.path("/showemployee");
        },
              function (errorPl) {
                  $scope.error = 'failure loading Employee', errorPl;
              });
    };

});