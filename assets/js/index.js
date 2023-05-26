let menuBtn = document.getElementById('menu_btn');
let navBar = document.getElementById('menu_nv');
let sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', function () {
    var header = document.querySelector('.header');
    var menuNav = document.querySelector('.menu-nav');
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 600) {
        header.classList.add('activeHead')
        menuNav.classList.add('activeHead')
    } else {
        header.classList.remove('activeHead')
        menuNav.classList.remove('activeHead')
    }
});



menuBtn.addEventListener("click", () => {
    navBar.classList.toggle('power-on');
    if (menuBtn.innerHTML == '<span class="material-icons">close</span>') {
        menuBtn.innerHTML = '<span class="bx bx-menu"></span>';
    } else {
        menuBtn.innerHTML = '<span class="material-icons">close</span>';
    }
});

const hideNav = () => {
    navBar.classList.remove('power-on');
    menuBtn.innerHTML = '<span class="material-icons">menu</span>';
}

const changeClass = (className) => {
    let elements = document.querySelectorAll('.nav_active');
    elements.forEach(element => {
        element.classList.remove('nav_active');
    });
    let el = document.querySelectorAll('.' + className);
    el.forEach(element => {
        element.classList.add('nav_active');
    });
};

let changeNav = () => {
    sections.forEach(section => {
        const sectionTop = section.offsetTop - navBar.offsetHeight;
        const sectionHeight = section.offsetHeight;
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            const id = section.getAttribute('id');
            return changeClass(id);
        }
    });
};

window.addEventListener('scroll', changeNav);
window.addEventListener('resize', changeNav);
window.addEventListener('load', changeNav);
window.addEventListener('hashchange', changeNav);
window.addEventListener('scroll', hideNav);

$(document).ready(function () {
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});


