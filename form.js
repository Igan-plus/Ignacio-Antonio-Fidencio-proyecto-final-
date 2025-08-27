document.getElementById("form").addEventListener("submit", function(e){
e.preventDefault();
let nombre = document.getElementById("nombre").value;
let curso = document.getElementById("curso").value;
document.getElementById("mensaje").textContent = nombre + " te has registrado en el curso de " + curso;
});