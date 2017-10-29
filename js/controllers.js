angular.module('productAppController',[]);
 /*
 .controller('Productadditioncontroller',function($scope,$state,$window,$cookies,$localStorage){

    console.log("Product additon controller called");

    
     var value=$window.localStorage.getItem('data');
     console.log(JSON.parse(value));


    $scope.imageuploaded=0;
    $scope.imagefile="";

    $scope.productinfo=function(){

    	console.log($scope.productname);
    	//console.log($scope.productdesc);
    	//console.log($scope.stepsModel[0]);
       var value=$window.localStorage.getItem('data');

        if(value===null)
      {
        var obj=new Object();
        obj.productname=$scope.productname;
        obj.productimage=$scope.imagefile;
        obj.upvotes=0;
        obj.downvotes=0;
        obj.stars="";
        var x=[];
        x.push(obj);
        /*
        $cookies.putObject('data',x);
        var value=$cookies.getObject('data');
        console.log(value);
        
  
        $window.localStorage.setItem('data',JSON.stringify(x));
        var value=$window.localStorage.getItem('data');
        console.log(JSON.parse(value));

       } 

       else
       {

          console.log("Entered else ");
 
           var obj=new Object();
           obj.productname=$scope.productname;
           obj.productimage=$scope.imagefile;
           obj.upvotes=0;
           obj.downvotes=0;
           obj.stars="";
           //var value=$cookies.getObject('data');
           //value.push(obj);
           //$cookies.putObject('data',value);

           var value=$window.localStorage.getItem('data');
           value=(JSON.parse(value));
           value.push(obj);
           $window.localStorage.setItem('data',JSON.stringify(value));
            var value=$window.localStorage.getItem('data');
            console.log(JSON.parse(value));

        }
     
    }
  
   
   

    $scope.imageUpload = function(event){

         $scope.stepsModel=[];

         var files = event.target.files; //FileList object
         
         for (var i = 0; i < files.length; i++) {
             var file = files[i];
                 var reader = new FileReader();
                 reader.onload = $scope.imageIsLoaded; 
                 reader.readAsDataURL(file);
         }
    }

    $scope.imageIsLoaded = function(e){
    	console.log("Entered here");
        $scope.$apply(function() {
            console.log(typeof(e.target.result));
            console.log((e.target.result).length);
            
            var img=new Image();
            img.src=e.target.result;

             img.onload = function () {

                            // CREATE A CANVAS ELEMENT AND ASSIGN THE IMAGES TO IT.
                            var canvas = document.createElement("canvas");

                            //var value = $('#size').val();

                            // RESIZE THE IMAGES ONE BY ONE.
                            img.width = (img.width * 10) / 100
                            img.height = (img.height * 10) / 100

                            var ctx = canvas.getContext("2d");
                            ctx.clearRect(0, 0, canvas.width, canvas.height);
                            canvas.width = img.width;
                            canvas.height = img.height;
                            ctx.drawImage(img, 0, 0, img.width, img.height);

                            var url=canvas.toDataURL("image/png");

                            console.log(typeof(url));

                            console.log(url.length);

                            $scope.imagefile=url;
                      };      




            
        });
    }

  
})
 .controller('productlistcontroller',function($scope,$cookies,$window,$localStorage){

     console.log('productlist controller called');
     $scope.value=$window.localStorage.getItem('data');
     //console.log(($scope.value));
     $scope.value=JSON.parse($scope.value);


 })
  .controller('singleproductcontroller',function($scope,$stateParams,$window,$cookies,$localStorage){
          
          console.log("Single product controller called");
          console.log($stateParams.id);
          $scope.value=$window.localStorage.getItem('data');
          $scope.value=JSON.parse($scope.value);
          $scope.x=$scope.value[$stateParams.id];
          console.log($scope.x);
  });
  */