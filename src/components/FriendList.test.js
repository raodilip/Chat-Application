import { render, screen, fireEvent } from "@testing-library/react";
import FriendList from "./FriendList";
import { friends } from "../data/mockdata";

describe("FriendList component", () => {
  test("renders the list of friends", () => {
    render(<FriendList friends={friends} currentFriend={friends[0]} setCurrentFriend={() => {}} />);
    
    friends.forEach(friend => {
      expect(screen.getByText(friend.name)).toBeInTheDocument();
    });
  });

  test("highlights the selected friend", () => {
    render(<FriendList friends={friends} currentFriend={friends[1]} setCurrentFriend={() => {}} />);
    
    const selectedFriend = screen.getByText(friends[1].name);
    expect(selectedFriend).toHaveClass("active");
  });

  test("calls setCurrentFriend on click", () => {
    const setCurrentFriend = jest.fn();
    render(<FriendList friends={friends} currentFriend={friends[0]} setCurrentFriend={setCurrentFriend} />);
    
    fireEvent.click(screen.getByText(friends[1].name));
    expect(setCurrentFriend).toHaveBeenCalledWith(friends[1]);
  });
});
