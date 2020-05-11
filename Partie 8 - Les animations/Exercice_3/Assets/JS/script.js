/*https://stackoverflow.com/questions/20307555/how-to-make-text-appear-on-scroll-in-html*/

let body = document.getElementsByTagName("body")[0];
let parent = document.getElementById('parent');
let child = document.querySelector('.child');
body.onscroll = function () {

   if (body.scrollTop >= child.offsetTop) //Adjust Tolerance as you want
   {
      child.style.display = "block"
   }
};