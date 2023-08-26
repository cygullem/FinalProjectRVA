// header, sticky
const header = document.querySelector("header");
window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 100);
});

// menu icon
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('open');
};


// navlist, stay at main color when active
document.addEventListener("DOMContentLoaded", function() {
    const navItems = document.querySelectorAll(".navlist li a");

    navItems.forEach(item => {
        item.addEventListener("click", function() {
            navItems.forEach(link => link.classList.remove("active"));

            item.classList.add("active");
        });
    });
});

// toggle
// document.addEventListener("DOMContentLoaded", function() {
//     const menuIcon = document.getElementById("menu-icon");
//     const navList = document.querySelector(".navlist");

//     menuIcon.addEventListener("click", function() {
//         // Toggle the 'active' class on navlist
//         navList.classList.toggle("active");
//     });
// });
