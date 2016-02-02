(function () {
    'use strict';
    var controllerId = 'homeController';
    App.controller(controllerId, ["$scope", "$http", "$window",

          function homeController($scope, $http, $window) {

            $scope.init = function() {
                    

              
            };

            //safari exhibit 
            $scope.safari = {
              stock: [
                "Lion",
                "Gazelle",
                "Rhino"
              ],
              select: "Gazelle",
              welcome : "Explore the Savannah",
              cages : {
                "Lion" : './img/lion.jpg',
                "Gazelle" : './img/gazelle.jpg',
                "Rhino" : './img/rhino.jpg'
              }
            };

            //arcitic Exhibit
            $scope.arctic = {
              stock: [
                "Penguin",
                "Seal",
                "Narwhal"
              ],
              select: "Seal",
              welcome : "Freeze in the Arctic",
              cages : {
                "Penguin" : './img/penguin.jpg',
                "Seal" : './img/seal.jpg',
                "Narwhal" : './img/narwhal.jpg'
              }
            };

            function reloadPage() {
                $window.location.reload();
            }
        }
    ]);
})();