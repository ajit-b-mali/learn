import { useRef, useEffect } from 'react';
import ChatMessage from './ChatMessage';
import './ChatMessages.css';

function useAutoScroll(dependencies) {
  const ref = useRef(null);

  useEffect(() => {
    const containerElem = ref.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  return ref;
}

export default function ChatMessages({ chatMessages }) {
  const chatMessagesRef = useAutoScroll([chatMessages]);

  return (
    <div className="chat-messages-container" ref={chatMessagesRef}>
      {chatMessages.map((data, index) => <ChatMessage {...data} key={index} />)}
    </div>
  );
}