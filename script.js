document.addEventListener('DOMContentLoaded', function () {
    // Toggle navigation visibility on hamburger icon click
    var menuToggle = document.querySelector('.menu-toggle');
    menuToggle.addEventListener('click', function () {
        var nav = document.querySelector('nav');
        nav.classList.toggle('show');
    });

    // Scroll event for changing header style and text color in the hamburger menu
    window.addEventListener('scroll', function () {
        var header = document.getElementById('main-header');
        var logo = document.querySelector('.logo a');
        var navLinks = document.querySelectorAll('nav a');

        if (window.scrollY > 50) {
            header.style.backgroundColor = 'black';
            header.style.color = 'white';
            logo.style.color = 'white';

            // Change text color in hamburger menu links
            navLinks.forEach(function (link) {
        	if (window.innerWidth > 768){
				link.style.color = 'white';
			} else {
				link.style.color = 'black';
			}
            });
        } else {
            header.style.backgroundColor = 'white';
            header.style.color = 'black';
            logo.style.color = 'black';

            // Change text color in hamburger menu links
            navLinks.forEach(function (link) {
                link.style.color = 'black';
            });
        }
    });

    // Show the home section on page load
    document.getElementById('home-content').classList.add('show');

    // Navigation link click events
    var navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            var sectionId = link.getAttribute('data-section');

            document.querySelectorAll('.section-content').forEach(function (section) {
                section.classList.remove('show');
            });

            document.getElementById(sectionId).classList.add('show');

            // Close the navigation menu on mobile after clicking a link
            var nav = document.querySelector('nav');
            nav.classList.remove('show');
        });
    });
});
