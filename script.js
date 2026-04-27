// Seleccionamos el botón hamburguesa
const toggle = document.getElementById("menu-toggle");

// Seleccionamos el menú
const menu = document.getElementById("menu");

// Evento al hacer click
toggle.addEventListener("click", () => {
    // Agrega o quita la clase "active"
    menu.classList.toggle("active");
});
