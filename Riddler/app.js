const riddles = document.querySelectorAll('.riddle');


riddles.forEach(riddle => {
    riddle.addEventListener('click', () => {
        removeActiveClasses();
        riddle.classList.add('active');
    });
});

function removeActiveClasses() {
    riddles.forEach(riddle => {
        riddle.classList.remove('active');
    });
};