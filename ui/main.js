console.log('Loaded!');

//Change text on maint

var ele=document.getElementById("maint");
ele.innerHTML="Roshni Roshni";

//Move the image
var img=document.getElementById("img");
img.onClick= function()
{
    img.style.marginLeft= '100px';
};