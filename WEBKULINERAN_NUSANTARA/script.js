// ==================== MOBILE NAVBAR ====================

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");


// Buka / tutup menu mobile
hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
        hamburger.textContent = "✕";
    } else {
        hamburger.textContent = "☰";
    }
});


// Tutup menu setelah link diklik
navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        hamburger.textContent = "☰";
    });
});


// ==================== TOMBOL PESAN ====================

const orderButtons = document.querySelectorAll(".food-footer button");

orderButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const foodCard = button.closest(".food-card");
        const foodName = foodCard.querySelector("h3").textContent;

        alert(
            `Terima kasih!\n\n` +
            `${foodName} telah dipilih.\n` +
            `Silakan hubungi kami untuk melanjutkan pemesanan.`
        );

    });

});