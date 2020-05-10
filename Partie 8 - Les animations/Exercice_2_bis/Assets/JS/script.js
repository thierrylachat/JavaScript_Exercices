let links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        let anchor = this.getAttribute('href');
        document.querySelector(anchor).scrollIntoView({
            behavior: 'smooth'
        });
    })
})