angular.module('productAppController').directive ('ratings',function($window){
 
   console.log("entered here in directive");

    return  {
     restrict:'E',

     link:function(scope,element,attrs){


        scope.calculate_rating=function(outerindex){
                
                var x=scope.x.upvotes;
                var y=scope.x.downvotes;
                var z=x+y;
                var star=x/z;
                star=star*5;
                star=Math.floor(star);
                scope.x.stars="";
                for(var i=0;i<star;i++)
                {
                    scope.x.stars+="#";
                }
                
                
                var value=$window.localStorage.getItem('data');
                value=JSON.parse(value);
                value[outerindex]=scope.x;
                $window.localStorage.setItem('data',JSON.stringify(value));
                
             
               var list=element.find('a');
                 console.log(list);
                for(var i=0;i<2;i++)
              {
                 $(list[i]).addClass("inactive")
             }


        };
        scope.upvote=function(outerindex){
        	if(scope.x.upvotes!=1 && scope.x.downvotes!=1)
        	{
            console.log(scope.x.upvotes);
            scope.x.upvotes+=1;
            scope.calculate_rating(outerindex);
            }
        };

        scope.downvote=function(outerindex)
        {
        	if(scope.x.downvotes!=1 && scope.x.downvotes!=1)
        	{
            scope.x.downvotes+=1;
            scope.calculate_rating(outerindex);
            }
        };
     },

     controller:'productlistcontroller'

    };

  });