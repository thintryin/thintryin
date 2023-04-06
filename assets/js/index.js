let menuBtn = document.getElementById('menu_btn');
let navBar = document.getElementById('menu_nv');

menuBtn.addEventListener("click", () => {
    navBar.classList.toggle('power-on');
    if (menuBtn.innerHTML == '<span class="material-icons">close</span>') {
        menuBtn.innerHTML = '<span class="material-icons">menu</span>';
    } else {
        menuBtn.innerHTML = '<span class="material-icons">close</span>';
    }
})

const changeClass = (className) => {
    let elements = document.querySelectorAll('.nav_active');
    elements.forEach(element => {
        element.classList.remove('nav_active');
    });
    let el = document.querySelectorAll('.' + className);
    console.log(className)
    console.log(el)
    el.forEach(element => {
        element.classList.add('nav_active');
    });
}

let changeNav = () => {
    if (location.href.endsWith('#start')) {
        return changeClass('home');
    }
    if (location.href.endsWith('#aboutus')) {
        return changeClass('aboutus');
    }
    if (location.href.endsWith('#services')) {
        return changeClass('services');
    }
    if (location.href.endsWith('#projects')) {
        return changeClass('projects');
    }
    if (location.href.endsWith('#contact')) {
        return changeClass('contact');
    }
}

window.onhashchange = changeNav;
window.onload = changeNav;