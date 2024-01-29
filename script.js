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




const navContainer = document.querySelector(".nav-container");
document.addEventListener('scroll', () => {
    navContainer.style.backgroundColor = "red";
});


