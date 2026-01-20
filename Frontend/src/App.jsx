import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Lecturers from "./pages/Lecturers";
import Alumni from "./pages/Alumni";

export default function App() {
  return (
    <Routes>
      {/* Default route */}
      <Route path="/" element={<Navigate to="/dashboard" />} />

      {/* Pages */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/students" element={<Students />} />
      <Route path="/lecturers" element={<Lecturers />} />
      <Route path="/alumni" element={<Alumni />} />

    </Routes>
  );
}