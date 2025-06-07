document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener("scroll", function() {
    let header = document.querySelector('#header');
    if (header) {
      header.classList.toggle('rolagem', window.scrollY > 0);
    }
  });
});
