// EFEITO MENU STICK
window.addEventListener("scroll", function(){
    var header = document.querySelector("nav");
    header.classList.toggle("menu-scroll", window.scrollY > 0)
})

// MENU RESPONSIVO
const menuResp = document.getElementById("menuResponsivo");
const btnMenuOpen = document.getElementById("btnOpen");
const btnMenuClose = document.getElementById("btnClose");

btnMenuClose.style.display = 'none'

function openMenu(){

    menuResp.style.display = "flex"
    btnMenuOpen.style.display = 'none'
    btnMenuClose.style.display = 'flex'
}

function closeMenu(){

    menuResp.style.display = 'none'
    btnMenuOpen.style.display = 'flex'
    btnMenuClose.style.display = 'none'
}

function linkfecharmenu(){
    menuResp.style.display = 'none'
    btnMenuOpen.style.display = 'flex'
    btnMenuClose.style.display = 'none'
}