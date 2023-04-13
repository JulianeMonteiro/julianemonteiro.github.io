let typing = new Typed(".animate", {
  strings: [
    "",
    "Curious",
    "A front-End Developer",
    "Curious",
    "UX/UI Lover",
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
