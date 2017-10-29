angular.module('productAppController').controller('productlistcontroller',function($scope,$window){

     console.log('productlist controller called');
     $scope.value=$window.localStorage.getItem('data');
     //console.log(($scope.value));
     $scope.value=JSON.parse($scope.value);


 });