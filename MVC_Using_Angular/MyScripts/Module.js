    var app = angular.module("ApplicationModule", ["ngRoute"]);

    //The Factory used to define the value to
    //Communicate and pass data across controllers

    app.factory("ShareData", function () {
        return { value: 0 }
    });

    //Defining Routing
    app.config(['$routeProvider','$locationProvider', function ($routeProvider,$locationProvider) {
        $routeProvider.when('/showemployees',
                            {
                                templateUrl: 'EmployeeInfo/ShowEmployees',
                                controller: 'ShowEmployeesController'
                            });
        $routeProvider.when('/addemployee',
                            {
                                templateUrl: 'EmployeeInfo/AddNewEmployee',
                                controller: 'AddEmployeeController'
                            });
        $routeProvider.when("/editemployee",
                            {
                                templateUrl: 'EmployeeInfo/EditEmployee',
                                controller: 'EditEmployeeController'
                            });
        $routeProvider.when('/deleteemployee',
                            {
                                templateUrl: 'EmployeeInfo/DeleteEmployee',
                                controller: 'DeleteEmployeeController'
                            });
        $routeProvider.otherwise(
                            {
                                redirectTo: '/'
                            });
       // $locationProvider.html5Mode(true);
        $locationProvider.html5Mode(true).hashPrefix('!')
    }]);