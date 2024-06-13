function sendMessage() {
    const message = document.getElementById('chatMessage').value;
    if (message.trim()) {
        const chatMessages = document.querySelector('.chat-messages');
        const newMessage = document.createElement('div');
        newMessage.classList.add('chat-message');
        newMessage.textContent = message;
        chatMessages.appendChild(newMessage);
        document.getElementById('chatMessage').value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}
