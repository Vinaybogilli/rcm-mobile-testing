let index = 0;
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
}


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
      const navLinks = document.querySelector('.nav-links');
      navLinks.classList.toggle('active');
    }