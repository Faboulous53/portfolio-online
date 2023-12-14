// (function ($) {
//     // a retravailler
//     $(window).resize(function () {
//         if ($(window).width() > 1077) {
//             $('nav ul li').css('display', 'block');
//             $('#navbar-toggle').classList.toggle('');
//         } else {
//             $('nav ul li').css('display', 'none');
//             $('#navbar-toggle').removeClass();
//         }
//     });

//     //  open and close nav
//     $('#navbar-toggle').click(function () {
//         $('nav ul li').slideToggle();
//     });

//     // Hamburger toggle
//     $('#navbar-toggle').on('click', function () {
//         this.classList.toggle('active');
//     });

//     $('nav ul li a').click(function () {
//         $('nav ul li').hide('slow');
//         $('#navbar-toggle')[0].classList.remove('active');
//     });

//     $('.hidden').on('click', function () {
//         $('nav ul li ').hide('slow');
//         $('#navbar-toggle')[0].classList.remove('active');
//     });

// })(jQuery);
(function ($) {

const burger = document.getElementById('navbar-toggle');
const links = document.querySelectorAll('#link');
const nav = document.querySelectorAll('nav ul li');
const navComponent = document.querySelectorAll('nav ul li a');
const hidden = document.querySelector('.hidden');
let isOpen = false;
let playOnce = true;
console.log(nav)
burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    $('nav ul li').toggle('slow');
});

hidden.addEventListener('click', () => {
    if ($('nav ul li').is(':visible') && window.innerWidth < 1077) {
        $('nav ul li').slideToggle();
        burger.classList.remove('active');
    }
});

links.forEach((link) => {
    link.addEventListener('click', () => {
        if (window.innerWidth < 1077) {
            burger.classList.remove('active');
            $('nav ul li').slideToggle();
            
        }
    });
});

window.addEventListener('scroll', () => {
    let scrollValue =
        (window.scrollY + window.innerHeight) / document.body.offsetHeight;
    if (scrollValue > 0.85 && playOnce) {
        popup.style.opacity = 1;
        popup.style.transform = 'none';
        playOnce = false;
    }
});

closeBtn.addEventListener('click', () => {
    popup.style.opacity = 0;
    popup.style.transform = 'translateX(500px)';
});
})(jQuery);