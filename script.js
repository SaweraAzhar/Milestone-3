// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
    // Select form and resume container elements
    var form = document.getElementById('resumeForm');
    var resumeContainer = document.getElementById('resume');
    // Handle form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent page reload
        // Collect form inputs
        var nameInput = document.getElementById('name');
        var emailInput = document.getElementById('email');
        var educationInput = document.getElementById('education');
        var experienceInput = document.getElementById('experience');
        var skillsInput = document.getElementById('skills');
        // Validate inputs
        if (!nameInput.value || !emailInput.value) {
            alert('Please fill in the required fields');
            return;
        }
        // Generate dynamic resume based on user input
        resumeContainer.innerHTML = "\n            <h2>".concat(nameInput.value, "</h2>\n            <p><strong>Email:</strong> ").concat(emailInput.value, "</p>\n            <h3>Education</h3>\n            <p>").concat(educationInput.value ? educationInput.value : 'No education details provided.', "</p>\n            <h3>Work Experience</h3>\n            <p>").concat(experienceInput.value ? experienceInput.value : 'No work experience details provided.', "</p>\n            <h3>Skills</h3>\n            <p>").concat(skillsInput.value ? skillsInput.value : 'No skills details provided.', "</p>\n        ");
    });
    // Real-time updates for each form input
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var educationInput = document.getElementById('education');
    var experienceInput = document.getElementById('experience');
    var skillsInput = document.getElementById('skills');
    nameInput.addEventListener('input', function () {
        document.getElementById('resumeName').textContent = nameInput.value;
    });
    emailInput.addEventListener('input', function () {
        document.getElementById('resumeEmail').textContent = emailInput.value;
    });
    educationInput.addEventListener('input', function () {
        document.getElementById('resumeEducation').textContent = educationInput.value;
    });
    experienceInput.addEventListener('input', function () {
        document.getElementById('resumeExperience').textContent = experienceInput.value;
    });
    skillsInput.addEventListener('input', function () {
        document.getElementById('resumeSkills').textContent = skillsInput.value;
    });
});
