const spaceImg = document.getElementById('space');
const earthImg = document.getElementById('earth');

function playAnimation() {
  // Reset
  spaceImg.style.opacity = 1;
  earthImg.style.opacity = 0;

  // Fade in da Terra
  setTimeout(() => {
    earthImg.style.opacity = 1;
  }, 3000); // Começa o fade após 3 segundos
}

function resetAnimation() {
  spaceImg.style.opacity = 1;
  earthImg.style.opacity = 0;
}

// Auto play quando carregar
window.onload = () => {
  setTimeout(playAnimation, 800);
};
