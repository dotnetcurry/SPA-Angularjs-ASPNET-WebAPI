/// <reference path="F:\Mahesh_New\Articles\MVC\Infra\A8_SPA_New_MVC_Using_Angular\MVC_Using_Angular\Scripts/angular.min.js" />

/// <reference path="F:\Mahesh_New\Articles\MVC\Infra\A8_SPA_New_MVC_Using_Angular\MVC_Using_Angular\MyScripts/Module.js" />
/// <reference path="Services.js" />

app.controller('AddEmployeeController', function ($scope, SinglePageCRUDService) {
    $scope.EmpNo = 0;
    //The Save scope method use to define the Employee object and 
    //post the Employee information to the server by making call to the Service
    $scope.save = function () {
        var Employee = {
            EmpNo: $scope.EmpNo,
            EmpName: $scope.EmpName,
            Salary: $scope.Salary,
            DeptName: $scope.DeptName,
            Designation: $scope.Designation
        };
     
        var promisePost = SinglePageCRUDService.post(Employee);


        promisePost.then(function (pl) {
            $scope.EmpNo = pl.data.EmpNo;
            alert("EmpNo " + pl.data.EmpNo);
        },
              function (errorPl) {
                  $scope.error = 'failure loading Employee', errorPl;
              });

    };

});