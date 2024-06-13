document.addEventListener('DOMContentLoaded', () => {
    const notifications = [
        'Job offer from Company A',
        'New message from User B',
        'Profile view from Recruiter C'
    ];

    const notificationList = document.getElementById('notificationList');
    notifications.forEach(notification => {
        const listItem = document.createElement('li');
        listItem.textContent = notification;
        notificationList.appendChild(listItem);
    });
});
