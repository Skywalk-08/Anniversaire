window.addEventListener("DOMContentLoaded", () => {

    const container = document.querySelector(".container-letter");
    const paragraphs = document.querySelectorAll(".container-letter p");

    container.style.opacity = 0;
    container.style.transform = "translateY(40px)";

    setTimeout(() => {
        container.style.transition = "1s ease";
        container.style.opacity = 1;
        container.style.transform = "translateY(0)";
    }, 200);

    paragraphs.forEach((p, i) => {
        p.style.opacity = 0;
        p.style.transform = "translateY(15px)";

        setTimeout(() => {
            p.style.transition = "0.6s ease";
            p.style.opacity = 1;
            p.style.transform = "translateY(0)";
        }, 400 + i * 150);
    });

});