import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Users, GraduationCap, UserCheck } from "lucide-react";

export default function Sidebar() {
  const location = useLocation();

  const linkClass = (path) =>
    `flex items-center gap-3 px-3 py-2 rounded-lg ${
      location.pathname === path
        ? "bg-blue-600 text-white"
        : "text-slate-300 hover:bg-slate-800"
    }`;

  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen p-6">
      <h2 className="text-xl font-bold mb-8">University Admin</h2>

      <nav className="space-y-2">
        <Link to="/dashboard" className={linkClass("/dashboard")}>
          <LayoutDashboard size={18} /> Dashboard
        </Link>

        <Link to="/students" className={linkClass("/students")}>
          <Users size={18} /> Students
        </Link>

        <Link to="/lecturers" className={linkClass("/lecturers")}>
          <UserCheck size={18} /> Lecturers
        </Link>

        <Link to="/alumni" className={linkClass("/alumni")}>
          <GraduationCap size={18} /> Alumni
        </Link>
      </nav>
    </aside>
  );
}