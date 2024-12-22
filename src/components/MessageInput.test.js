import { render, screen, fireEvent } from "@testing-library/react";
import MessageInput from "./MessageInput";

describe("MessageInput component", () => {
  test("renders the input field and button", () => {
    render(<MessageInput onSend={() => {}} />);
    
    const input = screen.getByPlaceholderText("Type a message...");
    const button = screen.getByText("Send");
    
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test("calls onSend with the correct message", () => {
    const onSend = jest.fn();
    render(<MessageInput onSend={onSend} />);
    
    const input = screen.getByPlaceholderText("Type a message...");
    const button = screen.getByText("Send");
    
    fireEvent.change(input, { target: { value: "Test message" } });
    fireEvent.click(button);
    
    expect(onSend).toHaveBeenCalledWith("Test message");
  });

  test("clears input after sending message", () => {
    const onSend = jest.fn();
    render(<MessageInput onSend={onSend} />);
    
    const input = screen.getByPlaceholderText("Type a message...");
    const button = screen.getByText("Send");
    
    fireEvent.change(input, { target: { value: "Test message" } });
    fireEvent.click(button);
    
    expect(input.value).toBe("");
  });
});
