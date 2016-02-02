'use strict';

// Declare app level module which depends on views, and components
var App = angular.module('myApp', [
  'ui.router'
])
.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /
  $urlRouterProvider.otherwise("/");
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: 'home/home.html',
      controller : 'homeController'
    })
})

//zoo directive
//exhibit scope is transcluded
.directive("zoo", ()=> {
  return {
    //Attach isolate scope and allow for DOM transclusion
    scope: {},
    transclude: true,
    template: 
    `
    <div class="row">
      <!--ISOLATE SCOPE -->
      <div id="header">
        <h1>Welcome to the ngZoo</h1>
      </div>  
    </div>
    <div class="row">  
      <div ng-transclude></div>    
    </div>`   
  };
})

//exhibit directive
//injected into zoo scope
.directive("exhibit", ()=> {
  return {
    scope: {
      animals: "=",
      welcome : "=",
      select: "=",
      cages : "="
      
    },
    template: 
    `
    <div class="col col-3">
    <!-- TRANSCLUDED SCOPE -->

    <!-- use ng-bind over {{}} because template loads before view is fully constructed-->
      <h2 ng-bind="welcome"></h2>
      <h3 >See the <span ng-bind="select"></span></h3>
      <img ng-src="{{path}}" class="featured"></img>
      <ul>
        <li ng-repeat="animal in animals"
          ng-bind="animal"
          ng-class="{'dark': animal === select}"
          ng-click="selectAnimal(animal)">

         </li>
      </ul>
    </div>  
    `,
    //Link Function
    //This lets the 2 sibling scopes share the same functions
    link: (scope, elem, attrs) => {
      scope.selectAnimal = (animal) => {
        scope.select = animal;
        scope.path = scope.cages[animal];
      };
    }
  };
}) 


;
