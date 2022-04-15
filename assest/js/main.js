const menuBtn = document.querySelector('.navbar__icon');
const heading = document.querySelector('.heading');
const navbars = document.querySelectorAll('.navbar__item')

menuBtn.onclick = function() {
    heading.classList.toggle('active');
}

for (let i = 0; i < navbars.length; i++) {
    navbars[i].onclick = function() {
        if(heading.classList.contains('active')) {
            heading.classList.toggle('active');
        }
    }
}