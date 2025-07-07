
    const header = document.getElementById('main-header');
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    const btnTopo = document.getElementById("btn-topo");
const fecharMenu = document.querySelector('.fecharMenuPC');

const iconX = fecharMenu.querySelector('.iconX');
const iconMenu = fecharMenu.querySelector('.iconMenu');

fecharMenu.addEventListener('click', () => {
  const isFechado = navLinks.classList.contains('fechado');

  if (isFechado) {
    navLinks.classList.remove('fechado'); // mostra suavemente
    iconX.style.display = 'inline';
    iconMenu.style.display = 'none';
  } else {
    navLinks.classList.add('fechado'); // esconde suavemente
    iconX.style.display = 'none';
    iconMenu.style.display = 'inline';
  }
});





    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        btnTopo.style.display = "block";
      } else {
        btnTopo.style.display = "none";
      }
    });

    // Inicialmente escondido
    btnTopo.style.display = "none";

    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.arrow.left');
    const nextBtn = document.querySelector('.arrow.right');
    let currentIndex = 0;
    let startX = 0;
    let endX = 0;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) slide.classList.add('active');
      });

      dots.forEach((dot, i) => {
        dot.classList.remove('active');
        if (i === index) dot.classList.add('active');
      });
    }

    function goToSlide(index) {
      currentIndex = index;
      showSlide(currentIndex);
    }

    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
    });

    setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }, 5000);

    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    });

    const sliderContainer = document.querySelector('.slider-container');

    sliderContainer.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
    });

    sliderContainer.addEventListener('touchmove', (e) => {
      endX = e.touches[0].clientX;
    });

    sliderContainer.addEventListener('touchend', () => {
      if (startX - endX > 50) {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
      } else if (endX - startX > 50) {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
      }
    });
    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('btn-curriculo').addEventListener('click', function (event) {
    event.preventDefault();
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      skillsSection.style.display = 'grid';
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

