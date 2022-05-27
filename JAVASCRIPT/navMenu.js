const navMenu = document.getElementById("navMenu");
const navOpciones = document.getElementById("navOpciones");

navMenu.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    navOpciones.classList.toggle('desplegar');
})

