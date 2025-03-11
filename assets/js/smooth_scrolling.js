document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".timeline-container");
    const scrollLeftBtn = document.getElementById("scroll-left");
    const scrollRightBtn = document.getElementById("scroll-right");
    const scrollAmount = 200;

    scrollLeftBtn.addEventListener("click", function () {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    scrollRightBtn.addEventListener("click", function () {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
});
