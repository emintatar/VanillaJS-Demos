const panels = document.querySelectorAll('.panel');

panels.forEach(panel => panel.addEventListener('click', toggleOpen));

function toggleOpen() {
    removeActiveClasses();
    this.classList.add("active");
};

function removeActiveClasses() {
    panels.forEach(panel => panel.classList.remove("active"));
};