document.addEventListener('DOMContentLoaded', () => {
    const sendButton = document.getElementById('send-btn');
    const chatInput = document.getElementById('chat-input');
    const chatBox = document.getElementById('chat-box');

    sendButton.addEventListener('click', () => {
        const message = chatInput.value.trim();

        if (message) {
            const messageElement = document.createElement('div');
            messageElement.textContent = message;
            messageElement.classList.add('chat-message');
            chatBox.appendChild(messageElement);
            chatInput.value = '';

            // Scroll to the bottom
            chatBox.scrollTop = chatBox.scrollHeight;
        }
    });

    chatInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            sendButton.click();
        }
    });
});
