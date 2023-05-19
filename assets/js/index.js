/// EFEITO MENU STICK

window.addEventListener("scroll", function(){
  var header = document.querySelector("nav");
  header.classList.toggle("menu-scroll", window.scrollY > 0)
})

// CARROSSEIS

$('.carrossel').slick({
  dots: false,
  infinite: true,
  arrows: false,
  speed: 300,
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  infinite: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    }
  ]
});

// MUDAR PORTFÓLIO

const portArtes = document.getElementById('artes');
const portCardapios = document.getElementById('cardapios');
const portIdVisuais = document.getElementById('idvisuais');
const btnActive = document.getElementById('button-active');

portCardapios.style.display = "none"
portIdVisuais.style.display = "none"

function mudarPortCardapio(){
  
  portCardapios.style.display = 'flex'
  portArtes.style.display = 'none'
  portIdVisuais.style.display = 'none'

  btnActive.classList.add("active-link-port")

}

function mudarPortArtes(){
  
  portArtes.style.display = 'flex'
  portCardapios.style.display = 'none'
  portIdVisuais.style.display = 'none'
  
}

function mudarPortIdvisuais(){
  
  portIdVisuais.style.display = 'flex'
  portArtes.style.display = 'none'
  portCardapios.style.display = 'none'
  
}

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

// MODAL

const modal = document.getElementById('modalArtes');
const modalIdVisuais = document.getElementById('modalIdVisuais');

modal.style.display = 'none'
modalIdVisuais.style.display = 'none'

function openModalArtes(){
  modal.style.display = 'flex'
}

function openModalIdVisuais(){
  modalIdVisuais.style.display = 'flex'
}

function closeModal(){
  modal.style.display = 'none'
  modalIdVisuais.style.display = 'none'
}
