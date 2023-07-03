const colors = ['green', 'red', 'rgba(133, 122, 220)', '#f1f5025', 'black', 'yellow', 'blue'];
const btn = document.getElementById('change-color');
const color = document.getElementById('color-name');

btn.addEventListener('click', () => {
    // get random number 0 - 3
    const randomNumber =  Math.floor(Math.random() * colors.length);

    document.body.style.backgroundColor = colors[randomNumber];

    color.innerText = colors[randomNumber];
})
