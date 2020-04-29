// function myFunction() {
//   document.getElementsById("python").style.color = "pink";
// }



//Solution 1.

//
function changeColor(){
  let color = this.id;
  document.querySelector('p').style.color = color;
}
function changeFont(){
  let changeType = this.id;
  if(changeType == 'bold){
    document.querySelector('p').style.fontWeight = changeType;
  } else {
    document.querySelector ('p').style.fontWeight = changeType;
  }
}

//Renvoie un table contenant les boutons ayant l'id color.
let buttonsList = document.querySelectorAll('.color');
buttonsList.forEach(function(button){
  button.addEventListener('click', changeColor);
})
//Renvoie un table contenant les boutons ayant l'id font.
let buttonsList = document.querySelectorAll('.color');
buttonsList.forEach(function(button){
  button.addEventListener('click', changeColor);
})

