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