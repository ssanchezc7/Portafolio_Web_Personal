/* ===========================================================
   1. MENÚ RESPONSIVE
   Abre/cierra la navegación en pantallas pequeñas.
   =========================================================== */
const navToggle = document.getElementById('navToggle');
const primaryNav = document.getElementById('primaryNav');

navToggle.addEventListener('click', () => {
  const isOpen = primaryNav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

primaryNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    primaryNav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

/* ===========================================================
   2. TEMA CLARO / OSCURO CON PERSISTENCIA (localStorage)
   =========================================================== */
const themeToggle = document.getElementById('themeToggle');
const THEME_KEY = 'portfolio-theme';

function applyTheme(theme) {
  if (theme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
}

const savedTheme = localStorage.getItem(THEME_KEY);
if (savedTheme) applyTheme(savedTheme);

themeToggle.addEventListener('click', () => {
  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  const next = isLight ? 'dark' : 'light';
  applyTheme(next);
  localStorage.setItem(THEME_KEY, next);
});

/* ===========================================================
   3. FILTRO DE PROYECTOS POR TECNOLOGÍA
   =========================================================== */
const filterBar = document.getElementById('filterBar');
const projectCards = document.querySelectorAll('.project-card');
const emptyState = document.getElementById('emptyState');

filterBar.addEventListener('click', (event) => {
  const button = event.target.closest('.filter-btn');
  if (!button) return;

  filterBar.querySelectorAll('.filter-btn').forEach((btn) => btn.classList.remove('is-active'));
  button.classList.add('is-active');

  const filter = button.dataset.filter;
  let visibleCount = 0;

  projectCards.forEach((card) => {
    const matches = filter === 'all' || card.dataset.tech === filter;
    card.hidden = !matches;
    if (matches) visibleCount += 1;
  });

  emptyState.hidden = visibleCount !== 0;
});

/* ===========================================================
   4. BOTÓN VOLVER AL INICIO
   Aparece tras hacer scroll y sube suavemente a #inicio.
   =========================================================== */
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  backToTop.hidden = window.scrollY < 480;
}, { passive: true });

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ===========================================================
   5. VALIDACIÓN DEL FORMULARIO DE CONTACTO
   =========================================================== */
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

const fields = {
  name: { input: document.getElementById('name'), error: document.getElementById('nameError') },
  email: { input: document.getElementById('email'), error: document.getElementById('emailError') },
  message: { input: document.getElementById('message'), error: document.getElementById('messageError') },
};

function validateField(key) {
  const { input, error } = fields[key];
  const value = input.value.trim();
  let message = '';

  if (value === '') {
    message = 'Este campo es obligatorio.';
  } else if (key === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    message = 'Ingresa un correo electrónico válido.';
  } else if (key === 'message' && value.length < 10) {
    message = 'Cuéntame un poco más (mínimo 10 caracteres).';
  }

  error.textContent = message;
  return message === '';
}

Object.keys(fields).forEach((key) => {
  fields[key].input.addEventListener('blur', () => validateField(key));
});

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const results = Object.keys(fields).map(validateField);
  const isValid = results.every(Boolean);

  if (!isValid) {
    formStatus.textContent = 'Revisa los campos marcados antes de enviar.';
    formStatus.style.color = 'var(--color-danger)';
    return;
  }

  /* No hay backend conectado: esto solo confirma que el formulario
     está validado correctamente en el cliente. Conecta un servicio
     real (Formspree, EmailJS, tu propio backend, etc.) cuando lo tengas. */
  formStatus.textContent = '¡Mensaje listo para enviar!😁';
  formStatus.style.color = 'var(--color-accent)';
  contactForm.reset();
});
