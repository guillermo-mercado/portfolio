

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
    // console.log(scrollValue)
    if (scrollValue < 150) {
        navbar.classList.remove('bgColor');
    }
    // else if (scrollValue>664){ cambiar el hover de color blanco para azul
    // o verde}
    else {
        navbar.classList.add('bgColor');
    }
}

// const iframeId = document.getElementById("iframeId-1");
// iframeId.addEventListener('click', function () {
//     var redirectWindow = window.open("https://github.com/guillermo-mercado/dice", "_blank");
//     redirectWindow.location;
// })

window.addEventListener('scroll', changeBg)

// --------Recent Projects animation MOUSEOVER/MOUSELEAVE--------
var ex1 = document.querySelector(".ex1")
var ex2 = document.querySelector(".ex2")
var ex3 = document.querySelector(".ex3")

ex1.addEventListener('mouseenter', (event) => {
    ex1.classList.add('projectEffect2')
    ex2.classList.add('projectEffect1');
    ex3.classList.add('projectEffect1');
})
ex1.addEventListener("mouseleave", (e) => {
    ex1.classList.remove("projectEffect2")
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