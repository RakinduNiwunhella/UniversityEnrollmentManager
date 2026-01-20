import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-slate-100 min-h-screen">
        <Navbar />
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}