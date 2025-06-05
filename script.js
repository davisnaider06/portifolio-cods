
// Alternância de tema
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

themeToggle.addEventListener('click', () => {
  const currentTheme = htmlElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  htmlElement.setAttribute('data-theme', newTheme);
  
  // Opcional: Mudar ícone
  themeToggle.textContent = newTheme === 'dark' ? '🌙' : '☀️';
});

// Filtro de projetos
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove classe 'active' de todos
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = button.getAttribute('data-filter');

    projectCards.forEach(card => {
      const tech = card.getAttribute('data-tech');

      if (filter === 'all' || tech.includes(filter)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});


document.addEventListener('mousemove', (e) => {
  const light = document.getElementById('cursor-light');
  light.style.left = `${e.clientX}px`;
  light.style.top = `${e.clientY}px`;
});

let mouseX = 0, mouseY = 0;
let lightX = 0, lightY = 0;
const speed = 0.1; // Controla a suavidade (0.1 a 0.9)

function animate() {
  const light = document.getElementById('cursor-light');
  
  // Calcula a nova posição com suavização
  lightX += (mouseX - lightX) * speed;
  lightY += (mouseY - lightY) * speed;
  
  light.style.left = `${lightX}px`;
  light.style.top = `${lightY}px`;
  
  requestAnimationFrame(animate);
}

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

animate(); // Inicia a animação
