document.addEventListener("DOMContentLoaded", function () {
    let desktopVideoInitialized = false;

    function initDesktopVideo() {
        if (window.innerWidth > 768 && !desktopVideoInitialized) {
            $('#header').vide('./video/vid', {
                bgColor: '#FFFFFF',
                poster: './img/desktop-poster.jpg'
            });
            desktopVideoInitialized = true;
        }
    }

    $(window).on('load', function() {
        $('#video-mobile').vide('./video/vid-mobile', {
            bgColor: '#FFFFFF',
            poster: './img/mobile-poster.jpg'
        });
        initDesktopVideo();

        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                $('#video-mobile').hide();
                $('#header').show();
                initDesktopVideo();
            } else {
                if (desktopVideoInitialized) {
                    $('#header').vide('destroy');
                    desktopVideoInitialized = false;
                }
                $('#header').hide();
                $('#video-mobile').show();
            }
        });
    });
    
    const buttons = document.querySelectorAll(".portfolio-nav-btn");
    const portfolioCardsWrapper = document.getElementById("portfolio-cards");

    const portfolioData = {
        design: [
            { title: "wehatelinearthinking", image: "./img/portfolio/whlt-card.png", link: "whlt.html" },
            { title: "Дизайн проект 2", image: "./img/portfolio/testing.png", link: "whlt.html" },
        ],
        music: [
            { title: "Музыкальный проект 1", image: "./img/portfolio/testing.png", link: "whlt.html" },
            { title: "Музыкальный проект 2", image: "./img/portfolio/testing.png", link: "whlt.html" },
        ],
        coding: [
            { title: "Программный проект 1", image: "./img/portfolio/testing.png", link: "whlt.html" },
            { title: "Программный проект 2", image: "./img/portfolio/testing.png", link: "whlt.html" },
        ],
        projects: [
            { title: "Проект 1", image: "./img/portfolio/testing.png", link: "whlt.html" },
            { title: "Проект 2", image: "./img/portfolio/testing.png", link: "whlt.html" },
        ],
    };

    function showCards(category) {
        const cards = portfolioData[category];
        portfolioCardsWrapper.innerHTML = "";

        cards.forEach((card) => {
            const cardElement = document.createElement("div");
            cardElement.classList.add("card");

            const cardLink = document.createElement("a");
            cardLink.href = card.link;
            cardLink.classList.add("card-link");

            const cardImage = document.createElement("img");
            cardImage.src = card.image;
            cardImage.alt = card.title;
            cardImage.classList.add("card-img");

            const cardTitle = document.createElement("h3");
            cardTitle.textContent = card.title;
            cardTitle.classList.add("card-title");

            cardLink.appendChild(cardImage);
            cardLink.appendChild(cardTitle);
            cardElement.appendChild(cardLink);
            portfolioCardsWrapper.appendChild(cardElement);
        });
    }

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            buttons.forEach((btn) => btn.classList.remove("active"));
            this.classList.add("active");
            showCards(this.dataset.category);
        });
    });

    showCards("design");
});

document.addEventListener('touchstart', function() {}, true);