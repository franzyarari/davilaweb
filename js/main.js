// Cuando el usuario se desplaza por la página, ejecute myFunction myFunction
window.onscroll = function() {myFunction()};

// Obtener el encabezado Get the header
var header = document.getElementById("myHeader");

// Obtener la posición de desplazamiento de la barra de navegación / Get the offset position of the navbar
var sticky = header.offsetTop;

// Agregue la clase adhesiva al encabezado cuando llegue a su posición de desplazamiento. Eliminar "pegajoso" cuando salga de la posición de desplazamiento Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}



