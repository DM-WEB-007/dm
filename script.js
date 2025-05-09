const topBar = document.getElementById('topBar');
const mainNav = document.getElementById('mainNav');
const toggleBtn = document.getElementById('toggleMenuBtn');
const toggleIcon = document.getElementById('toggleIcon');
const mobileMenu = document.getElementById('mobileMenu');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll && currentScroll > 50) {
    topBar.classList.add('opacity-0', 'pointer-events-none');
    mainNav.classList.replace('top-10', 'top-0');
  } else {
    topBar.classList.remove('opacity-0', 'pointer-events-none');
    mainNav.classList.replace('top-0', 'top-10');
  }

  lastScroll = currentScroll;
});

toggleBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('translate-x-full');
  mobileMenu.classList.toggle('translate-x-0');

  // Toggle icon
  if (toggleIcon.classList.contains('fa-bars')) {
    toggleIcon.classList.remove('fa-bars');
    toggleIcon.classList.add('fa-times');
  } else {
    toggleIcon.classList.remove('fa-times');
    toggleIcon.classList.add('fa-bars');
  }

  topBar.classList.add('hidden');
  mainNav.classList.replace('top-10', 'top-0');
});







const app = document.getElementById('typing');
const typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .typeString('front-end developer')
  .pauseFor(2000)
  .deleteAll()
  .typeString('UI enthusiast')
  .pauseFor(2000)
  .deleteAll()
  .typeString('React Developer')
  .pauseFor(2000)
  .start();
new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
});