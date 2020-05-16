
const scroll = () => {
    const closeBtn = document.querySelector('.close-btn');
    const anchors = document.querySelectorAll('a[href^="#"]');

    for (const anchor of anchors) {
        anchor.addEventListener('click', e => {
            e.preventDefault();
            if (e.target !== closeBtn) {
                const blockID = anchor.getAttribute('href');
                document.querySelector(blockID).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
};
export default scroll;
