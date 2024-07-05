// script.js

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('colorButton');
    const body = document.body;

    button.addEventListener('click', () => {
        const colors = [ '#F3FF90','#ffce2f9d','violet','darkgray', '#E1AFD1','#ffebcd', 'cyan','#98fb98', '#1e90ff', '#e6e6fa', '#fffacd' ,'#00ffcc'];
        const currentColor = body.style.backgroundColor;
        let newColor = currentColor;

        while (newColor === currentColor) {
            newColor = colors[Math.floor(Math.random() * colors.length)];
        }

        body.style.backgroundColor = newColor;
    });
});
