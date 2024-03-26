// ---------toggle icon navbar----//
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

document.addEventListener('DOMContentLoaded', function () {
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    window.addEventListener('scroll', () => {
        let scrollY = window.scrollY;

        sections.forEach(section => {
            let sectionTop = section.offsetTop - 150;
            let sectionHeight = section.offsetHeight;
            let sectionId = section.getAttribute('id');

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });

                // Use attribute selector with quotes
                document.querySelector(`header nav a[href="#${sectionId}"]`).classList.add('active');
            }
        });

        // --------------toggle sticky header-----------//
        let header = document.querySelector('header');
        header.classList.toggle('sticky', scrollY > 100);

        // --------------remove toggle icon and navbar-----------//
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

// scroll reaveal//

ScrollReveal ({
    // reset:true,
    distance:'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content , .heading' ,{origin: 'top'});
ScrollReveal().reveal('.home-img, .Skill-container ,.Project-box,Contact form',{origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img' ,{origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content' ,{origin: 'right'});


