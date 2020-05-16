
const togglePopup = () => {
    const popUp = document.querySelector('.popup'),
        popypBtn = document.querySelectorAll('.popup-btn'),
        popupСontent = document.querySelector('.popup-content');
    popypBtn.forEach(elem => {
        elem.addEventListener('click', () => {
            if (screen.width > 768) {
                popUp.style.display = 'block';
                const start = Date.now();

                const timer = setInterval(() => {
                    const timePassed = Date.now() - start;
                    if (timePassed >= 800) {
                        clearInterval(timer);
                        return;
                    }
                    draw(timePassed);
                    function draw(timePassed) {
                        let wContent = +getComputedStyle(popupСontent).width.split('px')[0];
                        wContent = -wContent / 2 + 50 + 'px';
                        popupСontent.style.left = timePassed / 16 + '%';
                        popupСontent.style.marginLeft = wContent;
                    }
                },);

            } else {
                popUp.style.display = 'block';
            }
        });
    });
    popUp.addEventListener('click', event => {
        let target = event.target;
        if (target.classList.contains('popup-close')) {
            popUp.style.display = 'none';
        } else {
            target = target.closest('.popup-content');

            if (!target) {
                popUp.style.display = 'none';
            }
        }
    });
};
export default togglePopup;
