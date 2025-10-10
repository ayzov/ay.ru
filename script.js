
const BACKGROUND_GIFS = [
    'https://i.pinimg.com/originals/70/cc/1d/70cc1d782efacc387351bc9de8ea9dfb.gif',
    'https://i.pinimg.com/originals/17/1c/e0/171ce0b6ae84db0170d17f54f2f909ad.gif',
    'https://i.pinimg.com/originals/ac/39/6b/ac396b7c6d00d54bfd4024ff2d68b5f6.gif',
    'https://i.pinimg.com/originals/30/e0/30/30e030c3f806996ab709beef711f5e22.gif',
    'https://i.pinimg.com/originals/98/3c/6a/983c6a229278111bb6736b552bb9e302.gif',
    'https://i.pinimg.com/originals/ae/fd/0a/aefd0ad7ea0607d3b4526154967b2b46.gif',
    'https://i.pinimg.com/originals/77/5c/0c/775c0c3cb186abd08746a14d37792f1a.gif',
    'https://i.pinimg.com/originals/3e/33/74/3e3374bc13943821a91c567ca7161cb0.gif',
    'https://i.pinimg.com/originals/44/23/12/442312bf8991a1bd3ed5dfc17793c418.gif',
    
];

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

function setRandomBackground() {
    const background = document.getElementById('background');
    const randomGif = BACKGROUND_GIFS[Math.floor(Math.random() * BACKGROUND_GIFS.length)];
    background.style.backgroundImage = `url('${randomGif}')`;
}

function loadSteamAvatar() {
    const avatar = document.getElementById('steamAvatar');
    // Формируем URL аватарки Steam
    avatar.src = `https://avatars.fastly.steamstatic.com/ae4905144fdef50e060de68a0ff2189230da0af5_full.jpg`;
}

document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    loadTheme();
    setRandomBackground();
    loadSteamAvatar();
    
    document.addEventListener('mousemove', moveParticles);
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
});
