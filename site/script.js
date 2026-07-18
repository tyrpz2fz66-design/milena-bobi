const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.site-nav');

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const open = navigation.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Затвори мени' : 'Отвори мени');
  });
}

const form = document.querySelector('#contact-form');
if (form) {
  const params = new URLSearchParams(window.location.search);
  const service = params.get('usluga');
  if (service && form.elements.service) form.elements.service.value = service;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const subject = encodeURIComponent(`Inner Sky — прашање од ${data.get('name')}`);
    const body = encodeURIComponent(`Име: ${data.get('name')}\nЕ-пошта: ${data.get('email')}\nУслуга: ${data.get('service')}\n\nПорака:\n${data.get('message')}`);
    const status = document.querySelector('#form-status');
    if (status) status.textContent = 'Се отвора e-mail апликацијата со подготвена порака…';
    window.location.href = `mailto:kontakt@innersky.mk?subject=${subject}&body=${body}`;
  });
}
