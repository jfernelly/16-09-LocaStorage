const saludar = document.getElementById("ingresaStorage");

saludar.addEventListener("click", () => {
    nombre = prompt("Ingrese su nombre")
    localStorage.setItem("nombre", nombre)
})

const ver = document.getElementById("verStorage");
const contenido = document.getElementById("contenido");

ver.addEventListener("click", () => {
    nombreStorage = localStorage.getItem("nombre");
    contenido.innerHTML = nombreStorage;
})


const limpia = document.getElementById("clearStorage");
limpia.addEventListener("click", () => {
    nombreStorage = localStorage.removeItem("nombre");
    contenido.innerHTML = "";
})