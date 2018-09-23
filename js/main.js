<<<<<<< HEAD
function myFunction(x) {
    x.classList.toggle("change");
}
=======


// function cross(x) {
//     x.classList.toggle("change");
// }

var menuicon = document.getElementsByClassName('menu-icon');

var bar1 = document.getElementsByClassName('bar1');
var bar2 = document.getElementsByClassName('bar2');
var bar3 = document.getElementsByClassName('bar3');

menuicon[0].addEventListener('click', function(){
  bar1[0].toggle("change");
  bar2[0].toggle("change");
  bar3[0].toggle("change");
  var menu = document.getElementById('menu');
  if(menu.style.display === "none"){
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }

});
>>>>>>> c2577e584ca1222fe91b205a7bc72c30e546c516
