const routes = {
    'home': 'home.html',
    'registration': 'registration.html',
    'login': 'login.html',
    'recruiter-dashboard': 'recruiter-dashboard.html',
    'employee-dashboard': 'employee-dashboard.html',
    'profile-management': 'profile-management.html',
    'browse-profiles': 'browse-profiles.html',
    'profile-details': 'profile-details.html',
    'chat': 'chat.html',
    'notifications': 'notifications.html',
    'about-us': 'about-us.html',
    'terms': 'terms.html',
    '404': '404.html'
};

function navigateTo(page) {
    const contentDiv = document.querySelector('.content');
    const url = routes[page] || routes['404'];
    fetch(url)
        .then(response => response.text())
        .then(html => {
            contentDiv.innerHTML = html;
            const activeItem = document.querySelector('.content-item.active');
            if (activeItem) activeItem.classList.remove('active');
            const newActiveItem = document.querySelector('.content-item');
            if (newActiveItem) newActiveItem.classList.add('active');
            initializePage(page);
        })
        .catch(() => contentDiv.innerHTML = 'Page not found.');
}

function initializePage(page) {
    switch (page) {
        case 'registration':
            document.querySelector('form').addEventListener('submit', handleRegistration);
            break;
        case 'login':
            document.querySelector('form').addEventListener('submit', handleLogin);
            break;
        case 'chat':
            document.querySelector('.chat-input button').addEventListener('click', sendMessage);
            break;
        case 'notifications':
            loadNotifications();
            break;
        case 'recruiter-dashboard':
            loadRecruiterDashboard();
            break;
        case 'employee-dashboard':
            loadEmployeeDashboard();
            break;
        case 'terms':
            loadTermsScripts();
            break;
    }
}

function loadTermsScripts() {
    const script = document.createElement('script');
    script.src = 'terms.js';
    document.body.appendChild(script);
}

function handleRegistration(event) {
    event.preventDefault();
    alert('Registration form submitted');
}

function handleLogin(event) {
    event.preventDefault();
    const role = document.getElementById('role').value;
    if (role === 'recruiter') {
        navigateTo('recruiter-dashboard');
    } else if (role === 'employee') {
        navigateTo('employee-dashboard');
    } else {
        alert('Please select a role');
    }
}

function sendMessage() {
    const messageInput = document.getElementById('chatMessage');
    const message = messageInput.value.trim();
    if (message) {
        const chatMessages = document.querySelector('.chat-messages');
        const newMessage = document.createElement('div');
        newMessage.classList.add('chat-message');
        newMessage.textContent = message;
        chatMessages.appendChild(newMessage);
        messageInput.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}

function loadNotifications() {
    const notifications = [
        'Job offer from Company A',
        'New message from User B',
        'Profile view from Recruiter C'
    ];

    const notificationList = document.getElementById('notificationList');
    notificationList.innerHTML = '';
    notifications.forEach(notification => {
        const listItem = document.createElement('li');
        listItem.textContent = notification;
        notificationList.appendChild(listItem);
    });
}

function loadRecruiterDashboard() {
    document.getElementById('browseProfiles').addEventListener('click', browseProfiles);
    document.getElementById('viewNotifications').addEventListener('click', viewNotifications);
    document.getElementById('initiateChat').addEventListener('click', initiateChat);
}

function browseProfiles() {
    const profiles = [
        { name: 'John Doe', skills: 'JavaScript, React', experience: '5 years' },
        { name: 'Jane Smith', skills: 'Python, Django', experience: '3 years' },
        { name: 'Alice Johnson', skills: 'Java, Spring Boot', experience: '4 years' }
    ];

    const dashboardContent = document.getElementById('dashboardContent');
    dashboardContent.innerHTML = '<h3>Browse Profiles</h3>';
    profiles.forEach(profile => {
        const profileDiv = document.createElement('div');
        profileDiv.classList.add('profile');
        profileDiv.innerHTML = `<strong>${profile.name}</strong><br>Skills: ${profile.skills}<br>Experience: ${profile.experience}`;
        dashboardContent.appendChild(profileDiv);
    });
}

function viewNotifications() {
    loadNotifications();
    const dashboardContent = document.getElementById('dashboardContent');
    dashboardContent.innerHTML = '<h3>Notifications</h3><ul id="notificationList"></ul>';
    loadNotifications();
}

function initiateChat() {
    const dashboardContent = document.getElementById('dashboardContent');
    dashboardContent.innerHTML = `
        <h3>Chat Interface</h3>
        <div class="chat-window">
            <div class="chat-messages"></div>
            <div class="chat-input">
                <input type="text" id="chatMessage" placeholder="Type your message here...">
                <button onclick="sendMessage()">Send</button>
            </div>
        </div>
    `;
}

function loadEmployeeDashboard() {
    document.getElementById('manageProfile').addEventListener('click', () => navigateTo('profile-management'));
    document.getElementById('viewNotifications').addEventListener('click', viewNotifications);
    document.getElementById('accessChat').addEventListener('click', initiateChat);
}

document.addEventListener('DOMContentLoaded', () => {
    navigateTo('home');
});
