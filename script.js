window.addEventListener('scroll', function () {
    var header = document.getElementById('main-header');
    var logo = document.querySelector('.logo a');
    var navLinks = document.querySelectorAll('nav a');

    if (window.scrollY > 50) {
        header.style.backgroundColor = 'black';
        header.style.color = 'white';
        logo.style.color = 'white';

        navLinks.forEach(function (link) {
            link.style.color = 'white';
        });
    } else {
        header.style.backgroundColor = 'white';
        header.style.color = 'black';
        logo.style.color = 'black';

        navLinks.forEach(function (link) {
            link.style.color = 'black';
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // 초기 홈 섹션을 표시
    document.getElementById('home-content').classList.add('show');

    // 네비게이션 항목에 클릭 이벤트 추가
    var navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            // 클릭된 항목의 데이터 속성을 이용하여 해당 섹션을 식별
            var sectionId = link.getAttribute('data-section');
            
            // 모든 섹션 숨기기
            document.querySelectorAll('.section-content').forEach(function (section) {
                section.classList.remove('show');
            });

            // 클릭된 항목에 해당하는 섹션 표시
            document.getElementById(sectionId).classList.add('show');
        });
    });
});

