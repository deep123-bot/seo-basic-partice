// Website loaded check
console.log("Deepa Digital Website Loaded 🚀");

// Smooth scroll for navigation links
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        alert("Navigation clicked (demo mode)");
    });
});

// Button click effect
const button = document.querySelector("button");

if (button) {
    button.addEventListener("click", function () {
        alert("Thanks for showing interest! 🚀");
    });
}
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = this.getAttribute('href');
        if(target && target !== "#") {
            document.querySelector(target)?.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = this.getAttribute('href');

        if(target && target !== "#") {
            document.querySelector(target)?.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});