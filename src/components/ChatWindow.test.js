import { render, screen, fireEvent } from "@testing-library/react";
import ChatWindow from "./ChatWindow";
import { chats } from "../data/mockdata";

describe("ChatWindow component", () => {
  test("renders messages correctly", () => {
    render(<ChatWindow messages={chats[1]} onSendMessage={() => {}} />);
    expect(screen.getByText("You:")).toBeInTheDocument();
    expect(screen.getByText("Hi Alice!")).toBeInTheDocument();
    //expect(screen.getByText("You: Hi Alice!")).toBeInTheDocument();
  });

  test("renders no messages for empty chat", () => {
    render(<ChatWindow messages={[]} onSendMessage={() => {}} />);
    
    expect(screen.queryByText("You:")).toBeNull();
  });

  test("calls onSendMessage when a new message is sent", () => {
    const onSendMessage = jest.fn();
    render(<ChatWindow messages={chats[1]} onSendMessage={onSendMessage} />);
    
    const input = screen.getByPlaceholderText("Type a message...");
    const sendButton = screen.getByText("Send");
    
    fireEvent.change(input, { target: { value: "New message!" } });
    fireEvent.click(sendButton);
    
    expect(onSendMessage).toHaveBeenCalledWith("New message!");
  });
});
