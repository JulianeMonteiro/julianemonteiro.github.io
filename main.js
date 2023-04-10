let typing = new Typed(".animate", {
  strings: [
    "",
    "Front-End Developer",
    "",
    "Curious",
    "",
    "UX/UI Lover",
    "",
    "Passionate about web development",
  ],
  typeSpeed: 120,
  backSpeed: 70,
  loop: true,
});

let btn = document.querySelector("#back-to-top");

btn.addEventListener("click", function () {
  window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
});

document.querySelector(".button").addEventListener("click", () => {
  document.querySelector(".sidebar").classList.toggle("isOpen");
});

window.onclick = (e) => {
  // seleciona o .menu__list
  let menu = document.querySelector(".menu__list");

  // verifica se está fechado ou aberto
  let open = menu.classList.contains("isOpen");

  // verifica se o elemento clicado contém a classe .menu__list
  let alv = e.target.classList.contains("menu__list");

  // verifica se o elemento clicado é filho de .menu__list
  let father = e.target.closest(".menu__list");

  // se tudo for falso, fecha o menu__list
  if (!open && !alv && !father) menu.classList.toggle("isOpen");
};
