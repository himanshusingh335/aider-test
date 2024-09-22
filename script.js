const button = document.getElementById('rollButton');
const dice = document.getElementById('dice');
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Load the dice rolling sound
const diceRollSound = new Audio('dice-roll.mp3');

button.addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    // Ensure animation is always applied
    dice.style.animation = 'roll 1s ease-out';

    // Play the dice rolling sound
    diceRollSound.play();

    setTimeout(() => {
        switch (randomNumber) {
            case 1:
                dice.style.transform = 'rotateX(0deg) rotateY(0deg)';
                break;
            case 2:
                dice.style.transform = 'rotateX(0deg) rotateY(90deg)';
                break;
            case 3:
                dice.style.transform = 'rotateX(0deg) rotateY(180deg)';
                break;
            case 4:
                dice.style.transform = 'rotateX(0deg) rotateY(270deg)';
                break;
            case 5:
                dice.style.transform = 'rotateX(90deg) rotateY(0deg)';
                break;
            case 6:
                dice.style.transform = 'rotateX(270deg) rotateY(0deg)';
                break;
        }
        // Reset animation after it completes
        dice.style.animation = '';
    }, 1000); 
});

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = 'Light Mode';
    } else {
        darkModeToggle.textContent = 'Dark Mode';
    }
});
