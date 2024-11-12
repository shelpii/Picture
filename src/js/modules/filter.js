const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
          items = menu.querySelectorAll('li'),
          wrapper = document.querySelector('.portfolio-wrapper'),
          markAll = wrapper.querySelectorAll('.all'),
          no = document.querySelector('.portfolio-no');

    const markTypes = {
        all: markAll,
        lovers: wrapper.querySelectorAll('.lovers'),
        chef: wrapper.querySelectorAll('.chef'),
        girl: wrapper.querySelectorAll('.girl'),
        guy: wrapper.querySelectorAll('.guy'),
        grandmother: null,
        granddad: null
    };

    const typeFilter = (markType) => {
        markAll.forEach(mark => {
            mark.style.display = 'none';
            mark.classList.remove('animated', 'fadeIn');
        });

        no.style.display = "none";
        no.classList.remove('animated', 'fadeIn');

        if (markType) {
            markType.forEach(mark => {
                mark.style.display = 'block';
                mark.classList.add('animated', 'fadeIn');
            });
        } else {
            no.style.display = 'block';
            no.classList.add('animated', 'fadeIn');
        }
    };

    const addFilterEvent = (buttonClass, markType) => {
        const btn = menu.querySelector(`.${buttonClass}`);
        if (btn) {
            btn.addEventListener('click', () => typeFilter(markType));
        }
    };

    Object.entries(markTypes).forEach(([key, markType]) => {
        addFilterEvent(key, markType);
    });

    menu.addEventListener('click', (e) => {
        const target = e.target;
        if (target && target.tagName === "LI") {
            items.forEach(btn => btn.classList.remove('active'));
            target.classList.add('active');
        }
    });
};

export default filter;
