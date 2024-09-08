// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    
    // Select form and resume container elements
    const form = document.getElementById('resumeForm') as HTMLFormElement;
    const resumeContainer = document.getElementById('resume') as HTMLElement;

    // Handle form submission
    form.addEventListener('submit', (event: Event) => {
        event.preventDefault(); // Prevent page reload
        
        // Collect form inputs
        const nameInput = document.getElementById('name') as HTMLInputElement;
        const emailInput = document.getElementById('email') as HTMLInputElement;
        const educationInput = document.getElementById('education') as HTMLInputElement;
        const experienceInput = document.getElementById('experience') as HTMLInputElement;
        const skillsInput = document.getElementById('skills') as HTMLInputElement;

        // Validate inputs
        if (!nameInput.value || !emailInput.value) {
            alert('Please fill in the required fields');
            return;
        }

        // Generate dynamic resume based on user input
        resumeContainer.innerHTML = `
            <h2>${nameInput.value}</h2>
            <p><strong>Email:</strong> ${emailInput.value}</p>
            <h3>Education</h3>
            <p>${educationInput.value ? educationInput.value : 'No education details provided.'}</p>
            <h3>Work Experience</h3>
            <p>${experienceInput.value ? experienceInput.value : 'No work experience details provided.'}</p>
            <h3>Skills</h3>
            <p>${skillsInput.value ? skillsInput.value : 'No skills details provided.'}</p>
        `;
    });

    // Real-time updates for each form input
    const nameInput = document.getElementById('name') as HTMLInputElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const educationInput = document.getElementById('education') as HTMLInputElement;
    const experienceInput = document.getElementById('experience') as HTMLInputElement;
    const skillsInput = document.getElementById('skills') as HTMLInputElement;

    nameInput.addEventListener('input', () => {
        document.getElementById('resumeName')!.textContent = nameInput.value;
    });

    emailInput.addEventListener('input', () => {
        document.getElementById('resumeEmail')!.textContent = emailInput.value;
    });

    educationInput.addEventListener('input', () => {
        document.getElementById('resumeEducation')!.textContent = educationInput.value;
    });

    experienceInput.addEventListener('input', () => {
        document.getElementById('resumeExperience')!.textContent = experienceInput.value;
    });

    skillsInput.addEventListener('input', () => {
        document.getElementById('resumeSkills')!.textContent = skillsInput.value;
    });
});
