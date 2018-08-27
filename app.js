var app =angular.module("myApp",["ngRoute"]);//module is a collection of services,derictives,controllers,filtersand configuration information
                                             //ng route helps to make your application SPA


app.config(function($routeProvider){    //to navigate to different pages in your application
    $routeProvider.when("/",{          // also for SPA
                                      //route povider is a route module  used to configure different routes in your applicati
                                          //ng model->binds the value of html controls like input select text area to application data
      templateUrl:"firstpage.html"
    }).when("/reserve",{
        templateUrl:"reserve.html"
    }).when("/places",{
        templateUrl:"places.html"
    }).when("/menu",{
        templateUrl:"menu.html"
    });

});
