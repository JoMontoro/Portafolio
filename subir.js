const btnTop = document.getElementById("btnsubir");

// Mostrar botón cuando bajas
window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
        btnTop.style.display = "block";
    } else {
        btnTop.style.display = "none";
    }
});

// Subir suavemente al hacer click
btnTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});