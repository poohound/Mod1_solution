
(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.LunchItems = "";

  $scope.CountItems = function () {
    if($scope.LunchItems == ""){
      $scope.ItemCount = 0;
    }else{
      $scope.ItemCount = $scope.LunchItems.split(',').length;
    }
    $scope.message = $scope.GetMessage($scope.ItemCount);
  };

  $scope.GetMessage = function (number) {
    if(number == 0){
      return "Please enter data first"
    }else if(number < 4){
      return "Enjoy!";
    }else{
      return "Too much!";
    }
  };
}

})();
