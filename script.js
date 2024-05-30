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
        var searchIcon = document.querySelector('.search-icon');

        if (window.scrollY > 50) {
            searchIcon.style.backgroundImage = "url('icon.png')";
            searchIcon.style.transition = 'background-image 1s ease-in-out';
            header.style.backgroundColor = 'black';
            header.style.color = 'white';
            logo.style.color = 'white';

            // Change text color in hamburger menu links
            navLinks.forEach(function (link) {
                if (window.innerWidth > 768) {
                    link.style.color = 'white';
                } else {
                    link.style.color = 'black';
                }
            });
        } else {
            searchIcon.style.transition = 'none';
            searchIcon.style.backgroundImage = "url('icon2.png')";
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

    const searchIcon = document.querySelector('.search-icon');
    const searchInput = document.getElementById('search-input');

    // Functionality to search and navigate on icon click
    searchIcon.addEventListener('click', function() {
        const query = searchInput.value.toLowerCase().trim();
        if (query) {
            const sections = document.querySelectorAll('.section-content');
            let found = false;

            sections.forEach(section => {
                if (section.textContent.toLowerCase().includes(query)) {
                    if (!found) { // Ensure we navigate to the first match
                        section.classList.add('show');
                        window.scrollTo(0, section.offsetTop);
                        found = true;
                    } else {
                        section.classList.remove('show');
                    }
                } else {
                    section.classList.remove('show');
                }
            });

            if (!found) {
                alert('No matching content found.');
            }
        }
    });
});
