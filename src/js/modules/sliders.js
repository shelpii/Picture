const sliders = (slides, dir, prev, next, autoplay = { enabled: false, speed: 3000 }, infinity = false) => {

    let slideIndex = 1,
        paused = false;

    const items = document.querySelectorAll(slides);

    function showSlides() {

        items.forEach(item => {
            item.classList.add('animated');
            item.style.display = 'none';
        });

        items[slideIndex - 1].style.display = 'block';
    }

    showSlides();

    function changeSlides(n) {
  
        if (!infinity) {
            if (slideIndex === items.length && n > 0) return;
            if (slideIndex === 1 && n < 0) return;            
        }
        
        slideIndex += n;

        if (slideIndex > items.length) {
            slideIndex = 1;
        } else if (slideIndex < 1) {
            slideIndex = items.length;
        }

        showSlides(slideIndex);
    }

    try {
        const prevBtn = document.querySelector(prev),
              nextBtn = document.querySelector(next);

        prevBtn.addEventListener('click', () => {
            changeSlides(-1);
            items[slideIndex - 1].classList.remove('slideInLeft');
            items[slideIndex - 1].classList.add('slideInRight');
        });

        nextBtn.addEventListener('click', () => {
            changeSlides(1);
            items[slideIndex - 1].classList.remove('slideInRight');
            items[slideIndex - 1].classList.add('slideInLeft');
        });
    } catch (e) {}

    function activateAnimation() {
        if (!autoplay.enabled) return;
        const intervalSpeed = autoplay.speed || 3000; 

        if (dir === 'vertical') {
            paused = setInterval(function () {
                changeSlides(1);
                items[slideIndex - 1].classList.add('slideInDown');
            }, intervalSpeed);
        } else {
            paused = setInterval(function () {
                changeSlides(1);
                items[slideIndex - 1].classList.remove('slideInRight');
                items[slideIndex - 1].classList.add('slideInLeft');
            }, intervalSpeed);
        }
    }

    if (autoplay.enabled) activateAnimation(); 

    items[0].parentNode.addEventListener('mouseenter', () => {
        clearInterval(paused);
    });
    items[0].parentNode.addEventListener('mouseleave', () => {
        if (autoplay.enabled) activateAnimation();
    });
};

export default sliders;
