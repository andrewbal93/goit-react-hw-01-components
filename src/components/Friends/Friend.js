export default function Friend({ avatar, name, isOnline }) {
  return (
    <li className="item">
      <div className="status-avatar-div">
        {isOnline ? (
          <div className="status online"></div>
        ) : (
          <div className="status offline"></div>
        )}
        <img
          className="friend-avatar"
          src={avatar}
          alt="User avatar"
          width="48"
        />
      </div>
      <div className="name-div">
        <p className="name">{name}</p>
      </div>
    </li>
  );
}
