import React, { useState } from 'react';
import './Chat.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import MessageList from './messageList';
import MessageInput from './messageInput';

const Chat = (props) => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [isDark, setIsDark] = useState(false);

    const handleMessageSubmit = (event) => {
        event.preventDefault();
        setMessages([...messages, { message: newMessage, seen: false, sent: true }]);
        setNewMessage("");
    }

    const handleMessageChange = (event) => {
        setNewMessage(event.target.value);
    }

    const markAsSeen = (index) => {
        let messagesCopy = [...messages];
        messagesCopy[index].seen = true;
        setMessages(messagesCopy);
    }
    const toggleTheme = () => {
        setIsDark(!isDark);
    }

    return (
        <div className={`chat-container ${isDark ? 'dark-theme' : 'white-theme'}`}>
            <button className="theme-toggle" onClick={toggleTheme}><FontAwesomeIcon icon={isDark ? faSun : faMoon} /></button>
            <div className='form-container'>
                <MessageInput newMessage={newMessage} handleMessageChange={handleMessageChange} handleMessageSubmit={handleMessageSubmit} />
                <MessageList messages={messages} markAsSeen={markAsSeen} />
            </div>
        </div>
    );
}

export default Chat;
