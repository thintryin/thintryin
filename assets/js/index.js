let menuBtn = document.getElementById('menu_btn');
let navBar = document.getElementById('menu_nv');
let sections = document.querySelectorAll('section[id]');

menuBtn.addEventListener("click", () => {
    navBar.classList.toggle('power-on');
    if (menuBtn.innerHTML == '<span class="material-icons">close</span>') {
        menuBtn.innerHTML = '<span class="material-icons">menu</span>';
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
