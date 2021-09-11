const Btn = document.querySelector('.colorChanger');
const background = document.querySelector('.background');
const showCode = document.querySelector('.showCode');
const logs = document.querySelector('.logs');
const log = document.querySelectorAll('.log');

function hexcode() {
    let code = '#';
    const list = [1,2,3,4,5,6,7,8,9,0,'A','B','C','D','E','F'];
    for (let i = 0; i < 6; i++) {
        const randomNum = Math.floor(Math.random() * 15);
        code += list[randomNum];
    }
    return code;
}

Btn.addEventListener('click', () => {
    const color = hexcode();
    background.style.backgroundColor = color;
    showCode.innerText = `The Hex Code for this color is: ${color}`;
    const log = document.createElement('div');
    log.setAttribute('class', 'log');
    log.style.backgroundColor = color;
    logs.appendChild(log);
});
