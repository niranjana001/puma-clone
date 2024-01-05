const menubutton = document.getElementById('menu-toggle');
const navbar = document.getElementById('navigation');
const pumaLogo = document.getElementById('pumaLogo');
const whiteLogo = document.getElementById('whiteLogo');
const menuMobDiv = document.getElementById("menu-mob-div");
menubutton.addEventListener('click', function() {
    navbar.classList.toggle('nav-light');
    menuMobDiv.hidden = !menuMobDiv.hidden;
    pumaLogo.hidden = !pumaLogo.hidden;
    whiteLogo.hidden = !whiteLogo.hidden;
    document.body.classList.toggle('no-scroll');
});


document.addEventListener('DOMContentLoaded', function() {
    const toggles = document.querySelectorAll('.dropdown-toggle');
    toggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const content = this.nextElementSibling;
            content.style.display = (content.style.display === 'block') ? 'none' : 'block';
        });
    });
});