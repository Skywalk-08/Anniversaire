window.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const oui = document.querySelector('.oui');
    const non = document.querySelector('.non');

    let active = true;

    function bounce(btn) {

        function loop() {
            if (!active) return;
            gsap.to(btn, {
                y: "+=5",
                duration: 0.8,
                ease: "sine.inOut",
                yoyo: true,
                repeat: 1,
                onComplete: loop
            });
        }

        loop();
    }

    bounce(oui);
    bounce(non);

    document.addEventListener('mousemove', (e) => {

        if (!active) return;

        const rect = non.getBoundingClientRect();

        const dx = e.clientX - (rect.left + rect.width / 2);
        const dy = e.clientY - (rect.top + rect.height / 2);

        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 120) {

            const moveX = (dx > 0 ? -1 : 1) * (120 - distance);
            const moveY = (dy > 0 ? -1 : 1) * (120 - distance);

            gsap.to(non, {
                x: `+=${moveX}`,
                y: `+=${moveY}`,
                duration: 0.3,
                ease: "power2.out"
            });
        }

    });

    oui.addEventListener('click', () => {

        active = false;

        gsap.to([oui, non], {
            scale: 0.6,
            opacity: 0,
            duration: 0.6
        });

        gsap.to(container, {
            scale: 0.7,
            opacity: 0,
            y: -80,
            duration: 1,
            ease: "power3.inOut",
            onComplete: () => {
                window.location.href = "page2.html";
            }
        });
    });
});