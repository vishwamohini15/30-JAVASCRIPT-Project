const tabButtons = document.querySelectorAll('.tab-button');
const tabSections = document.querySelectorAll('.tab-content-section');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const sectionId = button.textContent.toLowerCase().replace(" ", ""); // Extract section ID from button text
console.log(sectionId);

        // Deactivate all tabs and sections
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabSections.forEach(section => section.classList.remove('active'));

        // Activate the clicked tab and corresponding section
        button.classList.add('active');
        document.getElementById(sectionId).classList.add('active');
    });
});