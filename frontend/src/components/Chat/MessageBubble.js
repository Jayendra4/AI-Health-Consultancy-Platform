// src/components/Chat/MessageBubble.js
import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import Avatar from 'react-avatar';
import './MessageBubble.css'; // We will create this file next

const MessageBubble = ({ message }) => {
  const { user } = useAuth();
  const isOwnMessage = message.sender === 'user';

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`message-row ${isOwnMessage ? 'own-message' : 'other-message'}`}
    >
      <div className="avatar-container">
        {!isOwnMessage && <Avatar name="AI" size="40" round={true} color="#2563eb" />}
      </div>
      <div className={`message-bubble ${isOwnMessage ? 'own-bubble' : 'other-bubble'}`}>
        <p className="message-content">{message.content}</p>
        <div className="message-timestamp">{formatTime(message.timestamp)}</div>
      </div>
    </motion.div>
  );
};

export default MessageBubble;