import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { friends, chats } from "./data/mockdata";

describe("App component", () => {
  test("renders the friend list", () => {
    render(<App />);
    
    friends.forEach(friend => {
      expect(screen.getByText(friend.name)).toBeInTheDocument();
    });
  });

  test("renders the chat window for selected friend", () => {
    render(<App />);
    
    const selectedFriend = friends[0];
    expect(screen.getByText(`Hi ${selectedFriend.name}!`)).toBeInTheDocument();
  });

  test("sends a message", () => {
    render(<App />);
    
    const input = screen.getByPlaceholderText("Type a message...");
    const sendButton = screen.getByText("Send");
    
    fireEvent.change(input, { target: { value: "Hello!" } });
    fireEvent.click(sendButton);
    
    expect(screen.getByText("Hello!")).toBeInTheDocument();
  });
});
