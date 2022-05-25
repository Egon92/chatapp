import { userInfo } from "os";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/Login";
import Main from "./pages/Main";
import NotFoundPage from "./pages/Not-found-page";

export default function App() {
  const [modal, setModal] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  function login(user) {
    // set user in state as the current user
    setCurrentUser(user);
    //navigate to the main page of the user
    navigate("/login");
  }

  return (
    <div className="app">
      <Routes>
        <Route index element={<Navigate replace to="/login" />} />
        <Route
          path="/login"
          element={<Login setModal={setModal} login={login} />}
        />
        <Route path="/logged-in" element={<Main />} />
        <Route path="/logged-in/:conversationId" element={<Main />} />
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
