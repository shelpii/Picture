import { getResource } from "../services/requests";

const showMoreStyles = (trigger, wrapper) => {
    const btn = document.querySelector(trigger);
        

    
    btn.addEventListener('click', function() {
        getResource('assets/db.json')
            .then(res => createArts(res.styles))
            .catch(err => {
                let statusMessage = document.createElement('div');
                statusMessage.classList.add('status');
                statusMessage.style.paddingBottom = '30px'
                document.querySelector(wrapper).appendChild(statusMessage);

                let imgErr = document.createElement('img');
                imgErr.setAttribute('src', 'assets/img/fail.png');
                imgErr.classList.add('animated', 'fadeInLeft');
                statusMessage.appendChild(imgErr);

                let textErr = document.createElement('div');
                textErr.textContent = 'Ошибка:(  Попробуйте ещё раз';
                statusMessage.appendChild(textErr);
            });

        this.remove();
    })


    function createArts(response) {
        response.forEach(({src, title, link}) => {
            let card = document.createElement('div');
            card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');

            card.innerHTML = `
                <div class=styles-block>
                    <img src=${src} alt="style">
                    <h4>${title}</h4>
                    <a href=${link}>Подробнее</a>
                </div>
            `;

            document.querySelector(wrapper).appendChild(card);
        });
    }




}

export default showMoreStyles;