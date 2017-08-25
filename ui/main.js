console.log('Loaded!');

//Change text on maint

var ele=document.getElementById("maint");
ele.innerHTML="Roshni Roshni";

//Move the image
var img=document.getElementById("modi");
var marginLeft=0;

function moveRight()
{
    marginLeft= marginLeft + 1;
    img.style.marginLeft= marginLeft+'px';
}

img.onclick= function()
{
    var interval=setInterval(moveRight,50);
};