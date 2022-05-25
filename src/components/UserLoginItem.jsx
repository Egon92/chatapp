function UserLoginItem({ user, login }) {
  return (
    <li>
      <button
        className="user-selection"
        onClick={() => {
          login();
        }}
      >
        <img
          className={user.firstName}
          width="50"
          height="50"
          src={user.avatar}
          alt=""
        />
        <h3>
          {user.firstName} {user.lastName}
        </h3>
      </button>
    </li>
  );
}

export default UserLoginItem;
