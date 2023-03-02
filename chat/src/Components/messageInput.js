import React from 'react';

const MessageInput = ({ newMessage, handleMessageChange, handleMessageSubmit }) => {
const handleFormSubmit = (event) => {
event.preventDefault();
if (newMessage.trim().length > 0) {
handleMessageSubmit(event);
}
}
return (
<form className="form-container" onSubmit={handleFormSubmit}>
<input className="input-message" type="text" placeholder="Type your message here" value={newMessage} onChange={handleMessageChange} style={{ width: '100%' }} />
<button className="btn-send">Send</button>
</form>
);
}

export default MessageInput;