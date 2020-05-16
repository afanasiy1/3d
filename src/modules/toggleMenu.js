
const toggleMenu = () => {
    const menu = document.querySelector('menu');

    const handlerMenu = () => {

        if (screen.width > 768) {
            menu.classList.toggle('active-menu');
        } else {
            if (!menu.style.transform || menu.style.transform === `translate(-100%)`) {
                menu.style.transform = `translate(0)`;
            } else {
                menu.style.transform = `translate(-100%)`;
            }
        }
    };

    document.body.addEventListener('click', () => {
        const target = event.target;
        if (target.closest('div .menu')) {
            handlerMenu();
        } else if (target.classList.contains('close-btn') ||
                target.closest('.active-menu li a')) {
            handlerMenu();
        } else if (menu.classList.contains('active-menu') && !target.classList.contains('active-menu')) {
            handlerMenu();
        }
    });

};
export default toggleMenu;
