import { Chatbot } from 'supersimpledev'
import { useState } from 'react';
import './ChatInput.css';

export default function ChatInput({ setChatMessages }) {
  const [inputText, setInputText] = useState("");

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  function sendMessage() {
    setChatMessages((chatMessages) => [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID()
      }
    ]
    );
    setInputText("");

    const response = Chatbot.getResponse(inputText);
    setChatMessages((chatMessages) => [
      ...chatMessages,
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID()
      }
    ]
    );
  }

  return (
    <div className="chat-input-container">
      <input
        placeholder="Send a message to chatbot"
        size="30"
        onChange={saveInputText}
        value={inputText}
        className="chat-input"
      />
      <button
        onClick={sendMessage}
        className="send-button"
      >Send</button>
    </div>
  );
}