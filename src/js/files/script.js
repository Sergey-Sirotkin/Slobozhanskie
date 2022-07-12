// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


// hover for icons at product-card
if (document.documentElement.clientWidth > 768) {
    if (document.querySelector('.product-card__info-icons')) {
        const iconImages = document.querySelectorAll('.product-card__info-icon-img');
        iconImages.forEach(iconImage => {
            iconImage.addEventListener("mouseenter", function (e) {
                iconImage.closest('.product-card__info-icon').classList.add('hover');
            });
            iconImage.addEventListener("mouseleave", function (e) {
                iconImage.closest('.product-card__info-icon').classList.remove('hover');
            });
        });
    };
};












