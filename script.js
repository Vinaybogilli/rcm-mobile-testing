/*let index = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  index++;
  if (index > slides.length) index = 1;
  slides[index - 1].style.display = "block";
  setTimeout(showSlides, 2000); 
}*/


function changepage(){
 window.location.href = "contact.html";
}

function changepage2(){
 window.location.href = "services.html";
}

function changepage3(){
 window.location.href = "contact.html";
}

function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('show');
  }

  document.addEventListener("DOMContentLoaded", function () {
    const isMobile = () => window.innerWidth <= 768;

    // Top-level toggles
    document.querySelectorAll(".dropdown-parent > a").forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        if (isMobile()) {
          e.preventDefault();
          const dropdown = this.nextElementSibling;
          if (dropdown && dropdown.classList.contains("dropdown")) {
            dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
          }
        }
      });
    });

    // Sub-level toggles
    document.querySelectorAll(".dropdown-sub-parent > span").forEach(span => {
      span.addEventListener("click", function () {
        if (isMobile()) {
          const sub = this.nextElementSibling;
          if (sub && sub.classList.contains("dropdown-sub")) {
            sub.style.display = sub.style.display === "block" ? "none" : "block";
          }
        }
      });
    });
  });