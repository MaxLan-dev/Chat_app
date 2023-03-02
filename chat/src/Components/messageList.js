import { useEffect } from 'react';

const MessageList = ({ messages, markAsSeen }) => {
  useEffect(() => {
    messages.forEach((message, index) => {
      if (!message.seen) {
        markAsSeen(index);
      }
    });
  }, [messages, markAsSeen]);
  

  
  return (
    <div className="message-container" style={{overflowY: 'scroll', maxHeight: 'calc(100% - 120px)'}}>
      {messages.map((message, index) => (
        <div key={index} className={`message ${message.seen ? 'seen' : 'not-seen'} ${message.sent ? 'sent' : ''}`}>
      
          <p>{message.message}</p>
          <div className="message-info">
            <div className="message-status">
              {message.seen ? "Seen" : "Not seen"}
            </div>
            <div className="message-time">Sent just now</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MessageList;

    



