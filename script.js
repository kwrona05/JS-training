const btn1 = document.querySelector('.button1');
const btn2 = document.querySelector('.button2');
const btn3 = document.querySelector('.button3');

const paragraph = document.querySelector('.text');

function text1() {
    paragraph.textContent = "If you see this text, it means that my program is good"
};

function text2() {
    paragraph.textContent = "Wow! My program is really good"
};

function text3() {
    paragraph.textContent = "Nice! I love coding"
};

btn1.addEventListener('click', text1);
btn2.addEventListener('click', text2);
btn3.addEventListener('click', text3);