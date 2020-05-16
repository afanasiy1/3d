
const team = () => {
    const command = document.querySelector('.command');
    command.addEventListener('mouseover', e => {
        const target = e.target;
        const defImg = target.getAttribute('src');
        target.setAttribute('src', target.getAttribute('data-img'));
        command.addEventListener('mouseout', e => {
            e.target.setAttribute('src', defImg);
        });
    });

};
export default team;
