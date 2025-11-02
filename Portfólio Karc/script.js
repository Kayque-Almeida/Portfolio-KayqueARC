// Limpar o Hash ao Recarregar
window.addEventListener("load", () => {
  if (window.location.hash) {
    history.replaceState(null, null, " ");
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
});

// Topo do Site
document.getElementById("home").addEventListener("click", function (event) {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Menu de Navegação
window.addEventListener('scroll', function () {
    let header = document.querySelector('#header')
    header.classList.toggle('roll', window.scrollY > 0)
})

// Animação Início do Site
const textoDigitado = "desenvolvedor front end ";
const textoSpan = document.querySelector(".typed");

function digitar(text, contador) {
  if (contador < text.length) {
    setTimeout(() => {
      const parteBranca = text.substring(0, 13); // "desenvolvedor "
      const parteAzul = text.substring(13);      // "front end."

      textoSpan.innerHTML = `
        <span style="color: white;">${parteBranca.slice(0, contador)}</span>
        ${contador > 13 ? `<span style="color: #007bff;">${parteAzul.slice(0, contador - 13)}</span>` : ""}
      `;

      contador++;
      digitar(text, contador);
    }, 120);
  }
}

digitar(textoDigitado, 0);

// Download Currículo
function baixarCurriculo() {
  const link = document.createElement("a");
  link.href = "docs/currículo.KayqueAlmeida.pdf";
  link.download = "currículo.KayqueAlmeida.pdf";
  link.click();
}

// Site Projetos
function abrirSiteMosquito() {
  window.open("https://kayque-almeida.github.io/Projeto_Jogo_Mata_Mosquito/", "_blank");
}
function abrirSiteCalculadora() {
  window.open("https://kayque-almeida.github.io/Projeto-Calculadora/", "_blank");
}
function abrirSiteParallax() {
  window.open("https://kayque-almeida.github.io/ProjetoParallax-PasseiodeBaloes/", "_blank");
}
function abrirSiteFinans() {
  window.open("https://kayque-almeida.github.io/Projeto-Finans/", "_blank");
}
function abrirSiteSpotify() {
  window.open("https://kayque-almeida.github.io/Projeto_Spotify/", "_blank");
}
function abrirSiteNoticias() {
  window.open("https://kayque-almeida.github.io/Projeto_NoticiasCidade/", "_blank");
}

// Menu Mobile
let btnMenu = document.getElementById('btn-menu')
let menuMobile = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', () => {
    menuMobile.classList.add('open-menu-hamburguer')
})

menuMobile.addEventListener('click', () => {
    menuMobile.classList.remove('open-menu-hamburguer')
})

overlay.addEventListener('click', () => {
    menuMobile.classList.remove('open-menu-hamburguer')
})

//Mensagem no WhatsApp
function enviarWhats(event) {
    event.preventDefault()

    const nome = document.getElementById('name').value;
    const mensagem = document.getElementById('message').value;
    const telefone = '5511947390711'

    const texto = `Olá! Me chamo ${nome}, ${mensagem}`
    const msgFormatada = encodeURIComponent(texto)

    const url = `https://wa.me/${telefone}?text=${msgFormatada}`

    window.open(url, '_blank')
}

