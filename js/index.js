// start ----for the nav menu button
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
hamburger.addEventListener('click',mobileMenu);

function mobileMenu(){
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}
const navLink = document.querySelectorAll('.nav-link');
navLink.forEach(n => n.addEventListener('click',closeMenu));
function closeMenu(){
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}
// ----end of nav menu button

// start of ----section-side button
const sectionButton = document.querySelector(".section-button");
const barSection = document.querySelectorAll(".bar-section");
const sectionSelection = document.querySelector(".section-selection");

sectionButton.addEventListener("click",openSideMenu);

function openSideMenu(){
    sectionSelection.classList.toggle("active");
    barSection.forEach(bar=>{
        bar.classList.toggle("active");
    })
}
// end of -----section-side button