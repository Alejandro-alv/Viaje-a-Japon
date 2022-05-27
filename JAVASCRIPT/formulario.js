let btn = document.getElementById("boton");
let nombre = document.getElementById("nombre");
let mail = document.getElementById("mail");


btn.addEventListener("click", alerta);

function alerta(){
    if(nombre.value.trim() === "" && mail.value.trim() === ""){
        alert("Completa el formulario con tus datos de nombre y mail para ponernos en contacto!");
    }
    else if(nombre.value.trim() === "" || mail.value.trim() === "") {
        alert("Te olvidaste de completar tu nombre o mail, por favor vuelve a intentarlo");
    }
    else
        alert("Arigatou!")
}