const chatbotButton = document.getElementById('chatbot-button');
const chatbotContainer = document.getElementById('chatbot-container');
const chatbotMessages = document.getElementById('chatbot-messages');
const userInputElement = document.getElementById('user-input');

// Open chatbot
chatbotButton.addEventListener('click', () => {
  chatbotContainer.style.display = 'block';
});

// Close chatbot
document.getElementById('chatbot-close').addEventListener('click', () => {
  chatbotContainer.style.display = 'none';
});

// Handle user input
userInputElement.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    const userMessage = userInputElement.value;
    chatbotMessages.innerHTML += `<div class="user-message">${userMessage}</div>`;
    // Send user message to the chatbot API and receive response
    // Display the chatbot's response in chatbotMessages
    userInputElement.value = '';
  }
});
