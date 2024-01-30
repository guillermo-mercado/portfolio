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