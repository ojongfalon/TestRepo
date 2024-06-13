document.addEventListener('DOMContentLoaded', function() {
    const profileForm = document.getElementById('profileForm');
    const profilesTable = document.getElementById('profilesTable').getElementsByTagName('tbody')[0];

    // Load profiles from local storage on page load
    loadProfiles();

    profileForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const skills = document.getElementById('skills').value;
        const experience = document.getElementById('experience').value;

        // Create a new profile object
        const profile = {
            name: name,
            skills: skills,
            experience: experience
        };

        // Save the profile to local storage
        saveProfile(profile);

        // Add the profile to the table
        addProfileToTable(profile);

        // Clear the form
        profileForm.reset();
    });

    function saveProfile(profile) {
        let profiles = JSON.parse(localStorage.getItem('profiles')) || [];
        profiles.unshift(profile); // Add the new profile to the beginning of the array
        localStorage.setItem('profiles', JSON.stringify(profiles));
    }

    function loadProfiles() {
        let profiles = JSON.parse(localStorage.getItem('profiles')) || [];
        profiles.forEach(profile => addProfileToTable(profile));
    }

    function addProfileToTable(profile) {
        const row = profilesTable.insertRow(0); // Insert row at the top
        const nameCell = row.insertCell(0);
        const skillsCell = row.insertCell(1);
        const experienceCell = row.insertCell(2);

        nameCell.textContent = profile.name;
        skillsCell.textContent = profile.skills;
        experienceCell.textContent = profile.experience;
    }
});
