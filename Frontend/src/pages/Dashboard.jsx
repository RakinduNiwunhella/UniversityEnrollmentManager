import DashboardLayout from "../layouts/DashboardLayout";
import StatCard from "../components/StatCard";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-6">Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Students" value="1200" />
        <StatCard title="Lecturers" value="85" />
        <StatCard title="Alumni" value="5400" />
      </div>
    </DashboardLayout>
  );
}