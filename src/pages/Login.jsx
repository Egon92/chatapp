import UserLoginItem from "../components/UserLoginItem";

function LogIn(props) {
  return (
    <div className="main-wrapper login">
      <section className="login-section">
        <h2>Choose your user!</h2>
        <ul>
          {props.users.map((user) => (
            <UserLoginItem key={user.id} user={user} logIn={props.logIn} />
          ))}
        </ul>
      </section>
    </div>
  );
}
export default LogIn;
