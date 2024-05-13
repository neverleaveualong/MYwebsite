document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const searchBtn = document.querySelector('.search-btn');
    const searchInput = document.getElementById('search-input');
    const header = document.getElementById('main-header');
    const logo = document.querySelector('.logo a');
    const navLinks = document.querySelectorAll('nav a');
    const searchIcon = document.querySelector('.search-icon');

    // 햄버거 메뉴 토글
    if (menuToggle) {
        menuToggle.addEventListener('click', function () {
            const nav = document.querySelector('nav');
            if (nav) {
                nav.classList.toggle('show');
            }
        });
    }

    // 검색 기능
    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', function () {
            const query = searchInput.value.toLowerCase().trim();
            if (query) {
                const sections = document.querySelectorAll('.section-content');
                let found = false;
                sections.forEach(section => {
                    if (section.textContent.toLowerCase().includes(query) && !found) {
                        const currentShow = document.querySelector('.section-content.show');
                        if (currentShow) {
                            currentShow.classList.remove('show');
                        }
                        section.classList.add('show');
                        window.scrollTo(0, section.offsetTop - header.offsetHeight);
                        found = true;
                    }
                });
            }
        });

        searchInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                searchBtn.click();
            }
        });
    }

    // 스크롤 이벤트
    if (header && searchIcon) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 50) {
                header.style.backgroundColor = 'black';
                logo.style.color = 'white';
                searchIcon.style.backgroundImage = "url('icon.png')";
                navLinks.forEach(link => link.style.color = 'white');
            } else {
                header.style.backgroundColor = 'white';
                logo.style.color = 'black';
                searchIcon.style.backgroundImage = "url('icon2.png')";
                navLinks.forEach(link => link.style.color = 'black');
            }
        });
    }

    // 초기 섹션 표시
    const homeContent = document.getElementById('home-content');
    if (homeContent) {
        homeContent.classList.add('show');
    }
});
