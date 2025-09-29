function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.top = Math.random() * 100 + 'vh';
        particle.style.opacity = Math.random() * 0.5 + 0.2;
        particlesContainer.appendChild(particle);
    }
}

function moveParticles(e) {
    const particles = document.querySelectorAll('.particle');
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    particles.forEach((particle, index) => {
        const speed = 0.02 + (index * 0.002);
        const x = parseFloat(particle.style.left);
        const y = parseFloat(particle.style.top);
        
        const dx = mouseX - x;
        const dy = mouseY - y;
        
        particle.style.transform = `translate(${dx * speed}px, ${dy * speed}px)`;
    });
}

function toggleTheme() {
    document.body.classList.toggle('light-theme');
    const icon = document.querySelector('#themeToggle i');
    
    if (document.body.classList.contains('light-theme')) {
        icon.className = 'fas fa-sun';
        localStorage.setItem('theme', 'light');
    } else {
        icon.className = 'fas fa-moon';
        localStorage.setItem('theme', 'dark');
    }
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        document.querySelector('#themeToggle i').className = 'fas fa-sun';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    loadTheme();
    document.addEventListener('mousemove', moveParticles);
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
});