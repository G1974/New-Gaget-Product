
window.addEventListener("scroll", function() {

  let scroll = window.scrollY;

 
  let hero = document.querySelector(".hero");

  hero.style.backgroundPosition = "center " + (scroll * 0.5) + "px";
});

