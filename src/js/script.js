// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}

// Smooth Scrool
document.addEventListener("DOMContentLoaded", function() {
    // Ambil semua elemen dengan class "scroll-smooth"
    var smoothScrollLinks = document.querySelectorAll(".scroll-smooth");

    // Loop melalui setiap link
    smoothScrollLinks.forEach(function(link) {
        // Tambahkan event listener untuk setiap link
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Mencegah default action dari link

            // Dapatkan target dari link
            var targetId = this.getAttribute("href");

            // Gulir secara halus ke elemen target menggunakan smooth scrolling
            document.querySelector(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});


// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});