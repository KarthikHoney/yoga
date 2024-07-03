import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Trainer from "./pages/Trainer";
import Sidebar from "./components/Sidebar";
import './App.css';
import RegisterPage from "./form/RegisterPage";
import Login from "./form/Login";
import StudentDashboard from "./student/StudentDashboard";
import StudentGrade from "./student/StudentGrade";

function App() {
  // State to track if the user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Mock login function (replace with your actual login logic)
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (    
    <div>
      <BrowserRouter>
        {isLoggedIn ? (
          <Sidebar>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/student" element={<Students />} />
              <Route path="/trainer" element={<Trainer />} />
              <Route path="/student-details" element={<StudentDashboard />} />
              <Route path="/grade" element={<StudentGrade />} />
            </Routes>
          </Sidebar>
        ) : (
          <Routes>
            <Route path="/" element={<Login onLogin={handleLogin} />} />
            <Route path="/registration" element={<RegisterPage />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
