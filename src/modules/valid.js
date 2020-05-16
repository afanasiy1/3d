
const valid = () => {
    const calcBlock = document.querySelector('.calc-block');
    const input1 = calcBlock.getElementsByTagName('input')[0];
    const input2 = calcBlock.getElementsByTagName('input')[1];
    const input3 = calcBlock.getElementsByTagName('input')[2];

    const popupContent = document.querySelector('.popup-content');
    const inputPopup = popupContent.getElementsByTagName('input')[1];
    const namePopup = popupContent.getElementsByTagName('input')[0];

    const footerMenu = document.querySelector('.footer-form-input');
    const inputFooter = footerMenu.getElementsByTagName('input')[2];
    const inputName = footerMenu.getElementsByTagName('input')[0];

    const mainMenu = document.querySelector('.main-form-input');
    const inputMain = mainMenu.getElementsByTagName('input')[2];
    const inputMaintext = mainMenu.getElementsByTagName('input')[0];

    input1.addEventListener('input', () => {
        input1.value = input1.value.replace(/[^0-9]+$/, '');
    });
    input2.addEventListener('input', () => {
        input2.value = input2.value.replace(/[^0-9]+$/, '');
    });
    input3.addEventListener('input', () => {
        input3.value = input3.value.replace(/[^0-9]+$/, '');
    });
    inputPopup.addEventListener('input', () => {
        inputPopup.value = inputPopup.value.replace(/[^0-9()\-+]+$/g, '');
    });
    inputFooter.addEventListener('input', () => {
        inputFooter.value = inputFooter.value.replace(/[^0-9()\-+]+$/g, '');
    });
    inputMain.addEventListener('input', () => {
        inputMain.value = inputMain.value.replace(/[^0-9()\-+]+$/g, '');
    });
    inputMaintext.addEventListener('input', () => {
        inputMaintext.value = inputMaintext.value.replace(/[^А-Яа-я\s.,]/g, '');
    });
    namePopup.addEventListener('input', () => {
        namePopup.value = namePopup.value.replace(/[^А-Яа-я\s.,]/g, '');
    });
    inputName.addEventListener('input', () => {
        inputName.value = inputName.value.replace(/[^А-Яа-я\s.,]/g, '');
    });


};
export default valid;
