// Step 1: Select key DOM elements
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");
const chatBox = document.getElementById("chat-box");

// Event listeners for button click and pressing "Enter"
sendBtn.addEventListener("click", processMessage);
userInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        processMessage();
    }
});

// Main function handling Requirements 1, 2, and 3
function processMessage() {
    // Requirement 1: Read user input and trim whitespace
    const text = userInput.value.trim();
    if (text === "") return;

    // Requirement 2: Display user message in chat
    appendMessage("User", text);
    userInput.value = ""; // Clear input field

    // Requirement 3: Generate assistant response
    const botResponse = generateResponse(text);
    
    // Display assistant response
    setTimeout(() => {
        appendMessage("Assistant", botResponse);
    }, 300); // Brief delay for natural feel
}

// Helper function to append messages dynamically to DOM
function appendMessage(sender, text) {
    const messageElement = document.createElement("p");
    messageElement.innerHTML = `<strong>${sender}:</strong> ${text}`;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to bottom
}

// Logic engine for generating dynamic responses
function generateResponse(input) {
    // Normalize input to lowercase for robust matching
    const cleanInput = input.toLowerCase().trim();

    if (cleanInput === "hello" || cleanInput === "hi") {
        return "Hello! How can I assist you today?";
    } else if (cleanInput === "help") {
        return "Available commands: hello, hi, help, time, date, about.";
    } else if (cleanInput === "time") {
        return `Current time is ${new Date().toLocaleTimeString()}.`;
    } else if (cleanInput === "date") {
        return `Today's date is ${new Date().toLocaleDateString()}.`;
    } else if (cleanInput === "about") {
        return "I am a simple JavaScript Virtual Assistant built to process commands.";
    } else {
        return "Sorry, I don't recognize that command. Type 'help' for available commands.";
    }
}