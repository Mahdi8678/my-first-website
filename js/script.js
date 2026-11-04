
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

function closeMenu() {
    menuToggle.classList.remove("active");
    navLinks.classList.remove("active");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "باز کردن منو");
}

menuToggle.addEventListener("click", () => {

    const isOpen = menuToggle.classList.toggle("active");

    navLinks.classList.toggle("active", isOpen);

    menuToggle.setAttribute("aria-expanded", String(isOpen));

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "بستن منو" : "باز کردن منو"
    );

});

navLinks.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", closeMenu);

});

document.addEventListener("click", event => {

    const clickedInsideMenu = navLinks.contains(event.target);
    const clickedToggle = menuToggle.contains(event.target);

    if (!clickedInsideMenu && !clickedToggle) {
        closeMenu();
    }

});

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        closeMenu();
    }

});
