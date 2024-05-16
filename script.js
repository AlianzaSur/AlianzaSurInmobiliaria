// FUNCIONAMIENTO DEL NAV

const btnAbrir = document.getElementById('btn-abrir')
const btnCerrar = document.getElementById('btn-cerrar')

const imgOpen = document.getElementById('img-navBar-open')
const imgClose = document.getElementById('img-navBar-close')

const ul = document.getElementById('ul-navBar')

btnAbrir.addEventListener('click', () => {
    btnAbrir.style.display = 'none' 
    btnCerrar.style.display = 'block'
    imgClose.style.display = 'none'
    imgOpen.style.display = 'flex'
    ul.className = 'ul-navBar-flex'
   
})

btnCerrar.addEventListener('click', () => {
    btnCerrar.style.display = 'none'
    btnAbrir.style.display = 'block'
    imgOpen.style.display = 'none'
    imgClose.style.display = 'flex'
    ul.className = 'ul-navBar-none'
})

// funcion subir en la pagina
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Esto hace que el desplazamiento sea suave
    });
}