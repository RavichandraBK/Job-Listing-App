import "./App.css";
import LoginPage from "./Pages/LoginPage/LoginPage";
import Register from "./Pages/RegisterPage/Register";
import JobPost from "./Pages/JobPost/JobPost";
import Details from "./Pages/Details/Details";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/HomePage/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/AddJob" element={<JobPost />} />
        <Route path="/Details" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
