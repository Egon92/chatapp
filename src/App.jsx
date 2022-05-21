import { userInfo } from "os";
import { Navigate, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/Login";
import Main from "./pages/Main";
import NotFoundPage from "./pages/Not-found-page";

export default function App() {
  const [modal, setModal] = useState("");
  return (
    <div className="app">
      <Routes>
        <Route index element={<Navigate replace to="/login" />} />
        <Route path="/login" element={<Login setModal={setModal} />} />
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
