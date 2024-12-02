// Add interactivity if needed (e.g., highlighting current page or animations)
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav a");
    const currentLocation = window.location.pathname;

    links.forEach(link => {
        if (link.getAttribute("href") === currentLocation.split("/").pop()) {
            link.style.fontWeight = "bold";
            link.style.textDecoration = "underline";
        }
    });
    document.addEventListener("DOMContentLoaded", () => {
        // Set the current year in the footer
        const yearSpan = document.getElementById("currentYear");
        const currentYear = new Date().getFullYear();
        yearSpan.textContent = currentYear;
    });
    
});
