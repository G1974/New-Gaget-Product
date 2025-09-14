// Όταν ο χρήστης κάνει scroll
window.addEventListener("scroll", function() {
  // Παίρνουμε πόσο έχει κατέβει ο χρήστης
  let scroll = window.scrollY;

  // Βρίσκουμε το στοιχείο με την κλάση .hero
  let hero = document.querySelector(".hero");

  // Αλλάζουμε τη θέση του background για εφέ
  hero.style.backgroundPosition = "center " + (scroll * 0.5) + "px";
});
