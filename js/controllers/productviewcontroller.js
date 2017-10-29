angular.module('productAppController').controller('singleproductcontroller',function($scope,$stateParams,$window){
          
          console.log("Single product controller called");
          console.log($stateParams.id);
          $scope.value=$window.localStorage.getItem('data');
          $scope.value=JSON.parse($scope.value);
          $scope.x=$scope.value[$stateParams.id];
          console.log($scope.x);
 });