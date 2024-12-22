import React from "react";

const FriendList = ({ friends, currentFriend, setCurrentFriend }) => (
  <div className="friend-list">
    {friends.map((friend) => (
      <div
        key={friend.id}
        className={`friend-item ${friend.id === currentFriend.id ? "active" : ""}`}
        onClick={() => setCurrentFriend(friend)}
      >
        {friend.name}
      </div>
    ))}
  </div>
);

export default FriendList;
