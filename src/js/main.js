import modals from "./modules/modals";
import sliders from "./modules/sliders";

window.addEventListener('DOMContentLoaded', () => {
    'use-strict';

    modals();
    sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn', { enabled: true, speed: 4000 }, true);
    sliders('.main-slider-item', 'vertical', '', '', { enabled: true, speed: 4000 }, true);


});