window.addEventListener("DOMContentLoaded", () => {

    const container = document.querySelector(".container-letter");
    const paragraphs = document.querySelectorAll(".container-letter p");
    const signature = document.querySelector(".signature");
    container.style.opacity = 0;
    container.style.transform = "translateY(40px)";
    signature.style.opacity = 0;
    signature.style.transform = "translateY(15px)";

    setTimeout(() => {
        container.style.transition = "1s ease";
        container.style.opacity = 1;
        container.style.transform = "translateY(0)";
    }, 200);

    setTimeout(() => {
        signature.style.transition = "3.5s ease";
        signature.style.opacity = 1;
        signature.style.transform = "translateY(0)";
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
