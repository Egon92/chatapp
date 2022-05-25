import { useState } from "react";
import { useEffect } from "react";
import UserLoginItem from "../components/UserLoginItem";

function Login(props) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:4000/users`)
      .then((resp) => resp.json())
      .then((usersFromServer) => setUsers(usersFromServer));
  }, []);
  return (
    <div className="main-wrapper login">
      <section className="login-section">
        <h2>Choose your user!</h2>
        <ul>
          {users.map((user) => (
            <UserLoginItem key={user.id} user={user} login={props.login} />
          ))}
        </ul>
      </section>
    </div>
  );
}
export default Login;
