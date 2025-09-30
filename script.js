// Loader
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  loader.classList.add('fade');
  setTimeout(() => loader.style.display = 'none', 1000);
});

// Scroll animations
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
sections.forEach(section => observer.observe(section));

// Carrossel
let index = 0;
const slides = document.querySelectorAll('.slide');
function mostrarSlide() {
  slides.forEach(slide => slide.classList.remove('ativo'));
  slides[index].classList.add('ativo');
  index = (index + 1) % slides.length;
}
setInterval(mostrarSlide, 4000);
mostrarSlide();

// Formulário de contato
const form = document.getElementById('formContato');
const resposta = document.getElementById('resposta');
if(form){
  form.addEventListener('submit', e => {
    e.preventDefault();
    resposta.textContent = 'Mensagem enviada com sucesso!';
    form.reset();
  });
}

// Menu hambúrguer
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('mobile-active');
});
