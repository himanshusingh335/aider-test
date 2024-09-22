const button = document.getElementById('rollButton');
const dice = document.getElementById('dice');
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

button.addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    dice.style.animation = 'roll 1s ease-out';

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
