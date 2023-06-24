const hamb = document.querySelector(".hamb");
const nav = document.querySelector(".slide");

hamb.addEventListener("click", function () {
  nav.classList.toggle("click");
})

const naruto = document.querySelector(".mid");

//add 3d tilt effect to naruto on mouse move
naruto.addEventListener("mousemove", function (e) {
  const x = e.clientX;
  const y = e.clientY;

  const middleX = window.innerWidth / 2;
  const middleY = window.innerHeight / 2;

  const offsetX = ((middleX - x) / middleX) * 45;
  const offsetY = ((middleY - y) / middleY) * 45;

  naruto.style.transform = `rotateY(${offsetX}deg) rotateX(${offsetY}deg)`;
})

naruto.addEventListener("mouseleave", function () {
  naruto.style.transform = `rotateY(0deg) rotateX(0deg)`;
})

const btnone = document.getElementById("btnone");
const btntwo = document.getElementById("btntwo");
const btnthree = document.getElementById("btnthree");

let tuple_naruto = [document.getElementById("bgtwo"), document.getElementById("naruto"), document.getElementById("img_naruto")];
let tuple_sasuke = [document.getElementById("bgone"), document.getElementById("sasuke"), document.getElementById("img_sasuke")];
let tuple_sakura = [document.getElementById("bgthree"), document.getElementById("sakura"), document.getElementById("img_sakura")];

function switch_hero(enable, disable) {
  enable.forEach(e => e.classList.add("heroactive"));
  enable[0].classList.add("active");
  disable.flat().forEach(e => e.classList.remove("active", "heroactive"));
  clearInterval(hero_slideshow);
}

btnone.addEventListener("click", () => {
  switch_hero(tuple_sasuke, [tuple_naruto, tuple_sakura]);
  document.documentElement.style.setProperty('--accentcolor', '#9D75CB');
});

btntwo.addEventListener("click", () => {
  switch_hero(tuple_naruto, [tuple_sasuke, tuple_sakura]);
  document.documentElement.style.setProperty('--accentcolor', '#ea1300');
});

btnthree.addEventListener("click", () => {
  switch_hero(tuple_sakura, [tuple_naruto, tuple_sasuke]);
  document.documentElement.style.setProperty('--accentcolor', '#CE7B91');
});

function hero_slideshow() {
  setInterval(() => {
    if (tuple_naruto[0].classList.contains("active")) {
      switch_hero(tuple_sakura, [tuple_naruto, tuple_sasuke]);
      document.documentElement.style.setProperty('--accentcolor', '#CE7B91');
    } else if (tuple_sasuke[0].classList.contains("active")) {
      switch_hero(tuple_naruto, [tuple_sakura, tuple_sasuke]);
      document.documentElement.style.setProperty('--accentcolor', '#ea1300');
    } else {
      switch_hero(tuple_sasuke, [tuple_naruto, tuple_sakura]);
      document.documentElement.style.setProperty('--accentcolor', '#9D75CB');
    }
  }, 5000);
}

hero_slideshow();