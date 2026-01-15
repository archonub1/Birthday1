function createFloatingElement() {
    const elements = ['🌸', '✨', '💖', '🦋', '⭐'];
    const element = document.createElement('div');

    element.className = 'floating';
    element.textContent = elements[Math.floor(Math.random() * elements.length)];
    element.style.left = Math.random() * window.innerWidth + 'px';
    element.style.top = Math.random() * window.innerHeight + 'px';
    element.style.fontSize = (Math.random() * 20 + 10) + 'px';

    document.body.appendChild(element);

    gsap.to(element, {
        y: -window.innerHeight - 100,
        duration: Math.random() * 12 + 14,
        opacity: 0,
        onComplete: () => element.remove()
    });
}

setInterval(createFloatingElement, 400);
