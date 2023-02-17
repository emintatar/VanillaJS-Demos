const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const randomButton = document.querySelector('.randomButton');
const body = document.querySelector('body');
const message = document.querySelector('#message');
const hexCodes = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

const eventListeners = () => {
    input1.addEventListener("input", () => {
        let firstColor = input1.value;
        body.style.background = `linear-gradient(90deg, ${firstColor}, ${input2.value})`;
        updateColorCode();
    });

    input2.addEventListener("input", () => {
        let secondColor = input2.value;
        body.style.background = `linear-gradient(90deg, ${input1.value}, ${secondColor})`;
        updateColorCode();
    });

    randomButton.addEventListener("click", () => {
        let randomColor1 = `#${getRandomColor()}`;
        let randomColor2 = `#${getRandomColor()}`;

        input1.value = randomColor1;
        input2.value = randomColor2;

        body.style.background = `linear-gradient(90deg, ${randomColor1}, ${randomColor2})`;
        updateColorCode();
    });
};

const updateColorCode = () => {
    message.innerHTML = `background: linear-gradient(90deg, ${input1.value}, ${input2.value});`;
};

const getRandomColor = () => {
    let randomColor = '';
    for (let i = 0; i < 6; i++) {
        randomColor += hexCodes[Math.floor(Math.random() * hexCodes.length)];
    }
    return randomColor;
};

eventListeners();