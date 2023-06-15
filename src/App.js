import { Routes, Route } from "react-router-dom";
import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginPage from "./Pages/LoginPage";
import Home from "./Pages/Home";

function App() {
  return (
    <div>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar
        transition={Flip}
      />
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
