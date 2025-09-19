// ====== Carrossel ======
let currentIndex = 0
const images = document.querySelectorAll(".carousel img")

setInterval(() => {
  images[currentIndex].classList.remove("active")
  currentIndex = (currentIndex + 1) % images.length
  images[currentIndex].classList.add("active")
}, 3000)

// ====== Contador ======
const inicioRelacionamento = new Date("2024-05-14T13:00:00") // coloque a data aqui

function atualizarContador() {
  const agora = new Date()
  const diff = agora - inicioRelacionamento

  const anos = Math.floor(diff / (1000 * 60 * 60 * 24 * 365))
  const dias = Math.floor((diff / (1000 * 60 * 60 * 24)) % 365)
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutos = Math.floor((diff / (1000 * 60)) % 60)
  const segundos = Math.floor((diff / 1000) % 60)

  document.getElementById(
    "contador"
  ).innerText = `${anos} ano, ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`
}
setInterval(atualizarContador, 1000)
atualizarContador()

// ====== Corações caindo ======
function criarCoracao() {
  const heart = document.createElement("div")
  heart.innerText = "💛"
  heart.classList.add("heart")
  heart.style.left = Math.random() * window.innerWidth + "px"
  heart.style.animationDuration = 3 + Math.random() * 3 + "s"
  document.body.appendChild(heart)

  setTimeout(() => {
    heart.remove()
  }, 6000)
}
setInterval(criarCoracao, 500)
