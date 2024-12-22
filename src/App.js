import React, { useState, useEffect } from "react";
import FriendList from "./components/FriendList";
import ChatWindow from "./components/ChatWindow";
import { friends, chats } from "./data/mockdata";
import './App.css';

function App() {
  const [currentFriend, setCurrentFriend] = useState(friends[0]);
  const [messages, setMessages] = useState(chats);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check the user's preferred theme on load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.body.classList.add("dark-mode");
    } else {
      setIsDarkMode(false);
      document.body.classList.remove("dark-mode");
    }
  }, []);

  // Toggle dark mode and save preference to localStorage
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      if (newMode) {
        document.body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
      } else {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light");
      }
      return newMode;
    });
  };

  const sendMessage = (message) => {
    const updatedMessages = {
      ...messages,
      [currentFriend.id]: [
        ...messages[currentFriend.id],
        { sender: "You", message },
      ],
    };
    setMessages(updatedMessages);
  };
  return (
    <div className="messenger">
      <button className="theme-toggle" onClick={toggleTheme}>
        {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
      <FriendList 
        friends={friends} 
        currentFriend={currentFriend} 
        setCurrentFriend={setCurrentFriend} 
      />
      <ChatWindow 
        messages={messages[currentFriend.id]} 
        onSendMessage={sendMessage} 
      />
    </div>
      );
}

export default App;
