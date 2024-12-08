window.addEventListener("load", () => {
    const header = document.querySelector("header h1");
    header.style.opacity = 0;
    header.style.transition = "opacity 2s ease-in-out";
    setTimeout(() => {
        header.style.opacity = 1;
    }, 500);
});
