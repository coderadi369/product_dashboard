angular.module('productAppController',[]).controller('Productadditioncontroller',function($scope,$state,$window){

    console.log("Product additon controller called");

    
     var value=$window.localStorage.getItem('data');
     console.log(JSON.parse(value));


    $scope.imageuploaded=0;
    $scope.imagefile="";

    $scope.productinfo=function(){  //function when data is submitted.

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
        */
  
        $window.localStorage.setItem('data',JSON.stringify(x));  //using local storage to store the object.
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
           value.push(obj);                                                //pushiing the entire object into data.
           $window.localStorage.setItem('data',JSON.stringify(value));
            var value=$window.localStorage.getItem('data');
            console.log(JSON.parse(value));

        }
     
    }
  
   
   

    $scope.imageUpload = function(event){   //functiion called when image is uploaded and canvas is used to reduce the size of image thus indirectly reducing the lenght of base64 string.

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

                            $scope.imagefile=url;  //image url is collected over here.
                      };      




            
        });
    }

  
});