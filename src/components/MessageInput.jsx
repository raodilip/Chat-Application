import React, { useState, useRef, useEffect } from "react";
import Picker from "emoji-picker-react";
// import "./../App.css"; 

const MessageInput = ({ onSend }) => {
  const [text, setText] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const pickerRef = useRef(null); // Reference for the picker

  // Close picker on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target)) {
        setShowEmojiPicker(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(()=>{
    if(showEmojiPicker)
    document?.querySelector(".epr-skin-tones")?.remove()
  },[showEmojiPicker])
  
  const handleEmojiClick = (emojiObject) => {
    setText((prev) => prev + emojiObject.emoji); // Append emoji to message input
  };


  const handleSend = () => {
    if (text.trim()) {
      onSend(text);
      setText("");
    }
  };

  const toggleEmojiPicker = () =>{
      setShowEmojiPicker((prev) => !prev)
  }

  return (
    <div className="message-input">
        {showEmojiPicker && (
            <div ref={pickerRef}>
              <Picker onEmojiClick={handleEmojiClick} style={{ position: "absolute", bottom: "60px", right: "20px", zIndex: 10 }} />
            </div>
        )}
        {/* <button onClick={() => setShowEmojiPicker((prev) => !prev)}>😀</button> */}
        <button onClick={toggleEmojiPicker}>😀</button>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="messageInput"
        placeholder="Type a message..."
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default MessageInput;
