import Friend from './Friend';

export default function Friends({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <Friend key={friend.id} {...friend} />
      ))}
    </ul>
  );
}
