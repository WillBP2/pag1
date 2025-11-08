 const nav = document.getElementById('navegacion');
const hamburguesa = document.getElementById('hambuerguesa');

hamburguesa.addEventListener('click', () => {
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  const activo = nav.classList.toggle('activo'); // alterna visibilidad del menú
  hamburguesa.classList.toggle('color', activo); 
});

