const navMenu = document.querySelector("#nav-menu"),
    navClose = document.querySelector("#nav-close"),
    navToggle = document.querySelector("#nav-toggle");

if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
}

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("active");
    });
}

// deactive nav menu after clicking on links
const navLinks = document.querySelectorAll(".nav__link");
navLinks.forEach(navLink => {
    navLink.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});


// active header
const header = document.querySelector("#header");
window.addEventListener("scroll", () => {
    this.scrollY >= 50 ? header.classList.add("active") : header.classList.remove("active");
});

// active link

const sections = document.querySelectorAll('[data-section]');

window.addEventListener('scroll', () => {
    const scrollDown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector(`.nav__menu a[href*=${sectionId}]`);

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active')
        } else {
            sectionsClass.classList.remove('active')
        }
    })
});

// swiper

const servicesSwiper = new Swiper('.services__swiper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 24,
    slidesPerView: "auto",
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

// scrollup

window.addEventListener("scroll", () => {
    const scrollup = document.querySelector("#scrollup");

    this.scrollY > 350 ? scrollup.classList.add("active") : scrollup.classList.remove("active");
});