import logo from './logo.svg';
import './App.css';

function App() {
  const [currentFriend, setCurrentFriend] = useState(friends[0]);
  const [messages, setMessages] = useState(chats);

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
