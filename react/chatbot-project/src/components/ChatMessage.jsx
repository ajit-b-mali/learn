import robotLogo from '../assets/robot.png'
import userLogo from '../assets/user.png'
import './ChatMessage.css';

export default function ChatMessage({ message, sender }) {
  return (
    <div className={sender === "user" ? "chat-message-user" : "chat-message-robot"}>
      {sender === "robot" &&
        <img src={robotLogo} className="chat-message-profile" />
      }
      <div className="chat-message-text">{message}</div>
      {sender === "user" && <img src={userLogo} className="chat-message-profile" />}
    </div>
  );
}