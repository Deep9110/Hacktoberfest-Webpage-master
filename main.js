const enter = document.querySelector('.enter-box');

function show(e) {
    e.preventDefault();
    enter.classList.add('animate__bounceIn');
}
enter.addEventListener('click', show);
const client = document.querySelector('.client-img');

function anim(e) {
    client.classList.add('animate__slideIn');
}
client.addEventListener('click', anim);