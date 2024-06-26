import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import HomePage from "./Pages/HomePage";
import RegisterPage from "./Pages/RegisterPage";
import TasksPage from "./Pages/TasksPage";
import AddTaskPage from "./Pages/AddTaskPage";
import ProfilePage from "./Pages/ProfilePage";


function App() {
  return (
      <Router>
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/tasks" element={<TasksPage />} />
            <Route path="/addTask" element={<AddTaskPage />} />
            <Route path="/profile" element={<ProfilePage/>} />
        </Routes>
      </Router>
  );
}

export default App; // Eksportuj komponent App jako domyślny eksport