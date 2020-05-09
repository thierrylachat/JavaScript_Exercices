let body=document.getElementsByTagName("body")[0];
let parent=document.getElementById('parent');
let child=document.querySelector('.child');
body.onscroll = function(){
//console.log(documenhttps://fiddle.jshell.net/3urv0tp0/#tidyt.getElementById("child-div").style.top)
if(body.scrollTop>=child.offsetTop)//Adjust Tolerance as you want
{
   child.style.display="block"
}

};