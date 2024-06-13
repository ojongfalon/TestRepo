document.addEventListener('submit', function(event) {
    event.preventDefault();
    const form = event.target;
    if (form.matches('form')) {
        alert(`${form.querySelector('h2').textContent} form submitted`);
    }
});

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

document.addEventListener('DOMContentLoaded', () => {
    navigateTo('home');
});
