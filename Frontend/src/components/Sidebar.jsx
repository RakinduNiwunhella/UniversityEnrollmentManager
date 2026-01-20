export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen p-6">
      <h2 className="text-xl font-bold mb-8">University Admin</h2>

      <nav className="space-y-4">
        <a className="block hover:text-blue-400" href="/">Dashboard</a>
        <a className="block hover:text-blue-400" href="/students">Students</a>
        <a className="block hover:text-blue-400" href="/lecturers">Lecturers</a>
        <a className="block hover:text-blue-400" href="/alumni">Alumni</a>
      </nav>
    </aside>
  );
}