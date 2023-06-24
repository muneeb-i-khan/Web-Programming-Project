const hamb = document.querySelector(".hamb");
const nav = document.querySelector(".slide");

hamb.addEventListener("click", function() {
  nav.classList.toggle("click");
})

const naruto = document.querySelector(".mid");

//add 3d tilt effect to naruto on mouse move
naruto.addEventListener("mousemove", function(e) {
  const x = e.clientX;
  const y = e.clientY;
  
  const middleX = window.innerWidth / 2;
  const middleY = window.innerHeight / 2;

  const offsetX = ((middleX - x) / middleX) * 45;
  const offsetY = ((middleY - y) / middleY) * 45;

  naruto.style.transform = `rotateY(${offsetX}deg) rotateX(${offsetY}deg)`;
})

naruto.addEventListener("mouseleave", function() {
  naruto.style.transform = `rotateY(0deg) rotateX(0deg)`;
}
)

const cards = document.querySelectorAll('.card');

function removeActiveClass() {
  cards.forEach(card => card.classList.remove('active'));
}

cards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    removeActiveClass();
    card.classList.add('active');
  });
});





