const nav = document.getElementById('navegacion');
const hamburguesa = document.getElementById('hambuerguesa');

hamburguesa.addEventListener('click', () => {
  const activo = nav.classList.toggle('activo');
  hamburguesa.classList.toggle('color', activo); 
  nav.classList.toggle('clipa', activo);
});
