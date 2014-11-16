/// <reference path="F:\Mahesh_New\Articles\MVC\Infra\A8_SPA_New_MVC_Using_Angular\MVC_Using_Angular\Scripts/angular.min.js" />

/// <reference path="F:\Mahesh_New\Articles\MVC\Infra\A8_SPA_New_MVC_Using_Angular\MVC_Using_Angular\MyScripts/Module.js" />

app.service("SinglePageCRUDService", function ($http) {

    //Function to Read All Employees
    this.getEmployees = function () {
        return $http.get("/api/EmployeeInfoAPI");
    };

    //Fundction to Read Employee based upon id
    this.getEmployee = function (id) {
        return $http.get("/api/EmployeeInfoAPI/" + id);
    };

    //Function to create new Employee
    this.post = function (Employee) {
        var request = $http({
            method: "post",
            url: "/api/EmployeeInfoAPI",
            data: Employee
        });
        return request;
    };
    //Function  to Edit Employee based upon id 
    this.put = function (id,Employee) {
        var request = $http({
            method: "put",
            url: "/api/EmployeeInfoAPI/" + id,
            data: Employee
        });
        return request;
    };

    //Function to Delete Employee based upon id
    this.delete = function (id) {
        var request = $http({
            method: "delete",
            url: "/api/EmployeeInfoAPI/" + id
        });
        return request;
    };
});








