import React from "react";
import MessageInput from "./MessageInput";

const ChatWindow = ({ messages, onSendMessage }) => (
  <div className="chat-window">
    <div className="messages">
      {messages.map((msg, index) => (
        <div key={index} className={`message ${msg.sender === "You" ? "sent" : "received"}`}>
          <strong>{msg.sender}:</strong> {msg.message}
        </div>
      ))}
    </div>
    <MessageInput onSend={onSendMessage} />
  </div>
);

export default ChatWindow;
