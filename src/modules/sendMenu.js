
const sendMenu = () => {
    const errorMessage = 'что-то пошло не так',
        loadMessage = 'Загрузка..',
        successMessage = 'Спасибо! Мы скоро с вами свяжемся';
    const forms = document.querySelectorAll('.form');
    const statusMessage = document.createElement('div');
    statusMessage.textContent = '';
    statusMessage.style.cssText = 'font-size: 2em';
    statusMessage.style.cssText = 'color: #19b5fe';

    const postData = body => fetch('./server.php', {
        method: 'POST',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(body)
    });
    forms.forEach(form => {

        form.addEventListener('submit', event => {
            event.preventDefault();
            form.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;
            const formData = new FormData(form),
                body = {};
            formData.forEach((val, key) => {
                body[key] = val;
            });

            postData(body).then(response => {
                if (response.status !== 200) {
                    throw new Error('status network is not 200');
                }
                statusMessage.textContent = successMessage;
            })
                .catch(error => {
                    statusMessage.textContent = errorMessage;
                    console.error(error);
                });

            form.reset();
        });
    });
};
export default sendMenu;
