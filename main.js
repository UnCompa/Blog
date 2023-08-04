const navToggle = document.querySelector(".toggle")
const navMenu = document.querySelector(".nav__ul")

navToggle.addEventListener("click",()=>{
    navMenu.classList.toggle("nav__ul--visible")
    if (navMenu.classList.contains("nav-ul_visible")) {
        navToggle.setAttribute("aria-label", "Cerrar menú");
      } else {
        navToggle.setAttribute("aria-label", "Abrir menú");
      }
})
const navBoton = document.querySelectorAll(".a__item")

navBoton.forEach((boton)=>{
  boton.addEventListener("click",()=>{
    navMenu.classList.remove("nav__ul--visible")
  })
})
