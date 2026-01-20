import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen p-6">
      <h2 className="text-xl font-bold mb-8">University Admin</h2>

      <nav className="space-y-4">
        <Link to="/dashboard" className="block hover:text-blue-400">
          Dashboard
        </Link>

        <Link to="/students" className="block hover:text-blue-400">
          Students
        </Link>

        <Link to="/lecturers" className="block hover:text-blue-400">
          Lecturers
        </Link>


        <Link to="/alumni" className="block hover:text-blue-400">
          Alumni
        </Link>

      </nav>
    </aside>
  );
}