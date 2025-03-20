document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".event").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: "smooth"
            });
        });
    });
});
