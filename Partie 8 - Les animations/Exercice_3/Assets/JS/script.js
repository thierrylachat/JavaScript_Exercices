let body = document.getElementsByTagName('body');
let parent = document.getElementById('parent');
let child = document.getElementsByClassName('.child');

body.onscroll = function () {

    if (child.scrollTop>=child.offsetTop) {
        child.style.display = "block";
    }
};