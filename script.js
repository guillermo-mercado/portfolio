

const sidebarToggleBtn = document.getElementById('sidebarToggleBtn');
const sidebar = document.querySelector(".sidebar");
const sidebarCloseBtn = document.querySelector(".sidebarCloseBtn");

sidebarToggleBtn.addEventListener('click', function () {
    if (sidebar.classList.contains('show-sidebar')) {
        sidebar.classList.remove("show-sidebar");
    } else {
        sidebar.classList.add("show-sidebar");
    }
});

sidebarCloseBtn.addEventListener('click', function () {
    sidebar.classList.remove("show-sidebar");
})

function changeBg() {
    var navbar = document.getElementById("navbar");
    var scrollValue = window.scrollY;
    if (scrollValue < 150) {
        navbar.classList.remove('bgColor');
    } else {
        navbar.classList.add('bgColor');
    }
}
window.addEventListener('scroll', changeBg)

// --------Recent Projects animation MOUSEOVER/MOUSELEAVE--------
var ex1 = document.querySelector(".ex1")
var ex2 = document.querySelector(".ex2")
var ex3 = document.querySelector(".ex3")

ex1.addEventListener('mouseenter', (event) => {
    ex2.classList.add('projectEffect1');
    ex3.classList.add('projectEffect1');
})
ex1.addEventListener("mouseleave", (e) => {
    ex2.classList.remove("projectEffect1")
    ex3.classList.remove('projectEffect1');
});

ex2.addEventListener('mouseenter', (event) => {
    ex1.classList.add('projectEffect1');
    ex3.classList.add('projectEffect1');
})
ex2.addEventListener("mouseleave", (e) => {
    ex1.classList.remove("projectEffect1")
    ex3.classList.remove('projectEffect1');
});

ex3.addEventListener('mouseenter', (event) => {
    ex1.classList.add('projectEffect1');
    ex2.classList.add('projectEffect1');
})
ex3.addEventListener("mouseleave", (e) => {
    ex1.classList.remove("projectEffect1")
    ex2.classList.remove('projectEffect1');
});