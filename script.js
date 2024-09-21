const button = document.getElementById('rollButton');
const result = document.getElementById('diceResult');

button.addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    result.textContent = `You rolled a: ${randomNumber}`;
});
