// (function ($) {
//     const burger = document.getElementById('navbar-toggle');
//     const links = document.querySelectorAll('#link');
//     const nav = document.querySelectorAll('nav ul li');
//     const navComponent = document.querySelectorAll('nav ul li a');
//     const hidden = document.querySelector('.hidden');
//     let isOpen = false;
//     let playOnce = true;

//     burger.addEventListener('click', () => {
//         burger.classList.toggle('active');
//         $('nav ul li').toggle('slow');
//     });

//     hidden.addEventListener('click', () => {
//         if ($('nav ul li').is(':visible') && window.innerWidth < 1077) {
//             $('nav ul li').slideToggle();
//             burger.classList.remove('active');
//         }
//     });

//     links.forEach((link) => {
//         link.addEventListener('click', () => {
//             if (window.innerWidth < 1077) {
//                 burger.classList.remove('active');
//                 $('nav ul li').slideToggle();
//             }
//         });
//     });

//     window.addEventListener('scroll', () => {
//         let scrollValue =
//             (window.scrollY + window.innerHeight) / document.body.offsetHeight;
//         if (scrollValue > 0.85 && playOnce) {
//             popup.style.opacity = 1;
//             popup.style.transform = 'none';
//             playOnce = false;
//         }
//     });

//     closeBtn.addEventListener('click', () => {
//         popup.style.opacity = 0;
//         popup.style.transform = 'translateX(500px)';
//     });
// })(jQuery);

// function strReverse(str) {
//     // Écrivez votre code ici
//   return str.split("").reverse();

// }
//   // Afficher la sortie
//   console.log(strReverse("WayToLearnX"));
//   console.log(strReverse("Hello"));

document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('navbar-toggle');
    const navItems = document.querySelectorAll('nav ul li');
    const hidden = document.querySelector('.hidden');
    const popup = document.getElementById('popup');
    const closeBtn = document.getElementById('closeBtn');
    let playOnce = true;

    // Fonction de debounce pour optimiser les événements de défilement
    function debounce(fn, delay) {
        let timer;
        return function (...args) {
            clearTimeout(timer);
            timer = setTimeout(() => fn.apply(this, args), delay);
        };
    }

    // Gestion du clic sur le bouton de navigation
    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        navItems.forEach(
            (item) =>
                (item.style.display = burger.classList.contains('active')
                    ? 'block'
                    : 'none'),                    
                                      
        );
    });

    // Gestion du clic sur le bouton caché
    hidden.addEventListener('click', () => {
        if (burger.classList.contains('active')) {
            burger.classList.remove('active');
            navItems.forEach((item) => (item.style.display = 'none'));
        }
    });

    // Gestion des clics sur les liens de navigation
    navItems.forEach((item) => {
        item.addEventListener('click', () => {
            if (burger.classList.contains('active')) {
                burger.classList.remove('active');
                navItems.forEach((item) => (item.style.display = 'none'));
            }
        });
    });

    // Gestion du défilement avec debounce
    window.addEventListener(
        'scroll',
        debounce(() => {
            let scrollValue =
                (window.scrollY + window.innerHeight) /
                document.body.offsetHeight;
            if (scrollValue > 0.85 && playOnce) {
                popup.classList.add('active');
                popup.style.opacity = 1;
                playOnce = false;
            }
        }, 100)
    );

    // Gestion du clic pour fermer le popup
    closeBtn.addEventListener('click', () => {
        popup.style.opacity = 0;
    });
});
