// console.log('Loaded!');

// //Change text on maint

// var ele=document.getElementById("maint");
// ele.innerHTML="Roshni Roshni";

// //Move the image
// var img=document.getElementById("modi");
// var marginLeft=0;

// function moveRight()
// {
//     marginLeft= marginLeft + 1;
//     img.style.marginLeft= marginLeft+'px';
// }

// img.onclick= function()
// {
//     var interval=setInterval(moveRight,50);
// };




//Counter
var button=document.getElementById('counter');
// var counter=0;
button.onclick=function()
{
    //make a request to th counter endpoint
    var request= new XMLHttpRequest();
    
    //capture the response and store it in variable
    request.onreadystatechange=function()
    {
        if(request.readystate === XMLHttpRequest.DONE)
        {
            //take action
            if(request.status===200)
            {
                var counter=request.responseText;
                var span=document.getElementById('count');
                span.innerHTML= counter.toString();
            }
        }
        
        //not done yet
    };
   //Make request
   request.open('GET','http://anshikarosh.imad.hasura-app.io/counter',true);
   request.send(null);
   
   
   
   
   
    //render the variable in correct span
    // // counter=counter+1;
    //  var span=document.getElementById('count');
    //             span.innerHTML= counter.toString();
    
    
    
    
    
};