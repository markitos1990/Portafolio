//JAVASCRIPT//

var menuH = document.getElementById("menuHamburguesa");
menuH.addEventListener("click", aparecerM);

function aparecerM() {
  var menuA = document.getElementById("menuAparece");
  menuA.classList.toggle("menuListo");
}