console.log('Loaded!');

//Change text on maint

var ele=document.getElementById("maint");
ele.innerHTML="Roshni Roshni";

//Move the image
var img=document.getElementById("modi");
img.onclick= function()
{
    img.style.marginLeft= '100px';
};