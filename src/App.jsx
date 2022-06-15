import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import LogIn from "./pages/Login";
import Main from "./pages/Main";
import NotFoundPage from "./pages/Not-found-page";

export default function App() {
  const [modal, setModal] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:4000/users`)
      .then((resp) => resp.json())
      .then((usersFromServer) => setUsers(usersFromServer));
  }, []);

  function logIn(user) {
    // set user in state as the current user
    setCurrentUser(user);
    //navigate to the main page of the user
    navigate("/logged-in");
  }

  function logOut() {
    setCurrentUser(null);
  }

  return (
    <div className="app">
      <Routes>
        <Route index element={<Navigate replace to="/login" />} />
        <Route
          path="/login"
          element={<LogIn setModal={setModal} logIn={logIn} users={users} />}
        />
        <Route
          path="/logged-in"
          element={
            <Main currentUser={currentUser} logOut={logOut} users={users} />
          }
        />
        <Route
          path="/logged-in/:conversationId"
          element={
            <Main currentUser={currentUser} logOut={logOut} users={users} />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {modal === "new-user" ? (
        <div className="modal-wrapper">
          <div className="modal">
            <h1>This is new user modal</h1>
          </div>
        </div>
      ) : null}
    </div>
  );
}

//This is a test comment