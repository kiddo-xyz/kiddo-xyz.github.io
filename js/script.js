var typingEffect = new Typed(".multiText", {
    strings: ["Hisyam", "Student", "Coder", "Journalist", "Designer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1500,
});

let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('nav ul li a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if (top >= offset && top < offset + height) {
            //active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('nav ul li a[href*=' + id + ']').classList.add('active')
            });
        }
    });
}

// const header = document.querySelector("navItems");
// window.addEventListener("scroll", function(){
//     header.classList.toggle("sticky", window.scrollY > 120);
// })
