import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import StatCard from "../components/StatCard";
import api from "../api/api";

export default function Dashboard() {
  const [stats, setStats] = useState({
    students: 0,
    lecturers: 0,
    alumni: 0,
  });

  useEffect(() => {
    let isMounted = true;

    const fetchStats = async () => {
      try {
        const res = await api.get("/dashboard/stats");
        if (isMounted) {
          setStats(res.data);
        }
      } catch (error) {
        console.error("Error fetching dashboard stats", error);
      }
    };

    fetchStats();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-6">Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Students" value={stats.students} />
        <StatCard title="Lecturers" value={stats.lecturers} />
        <StatCard title="Alumni" value={stats.alumni} />
      </div>
    </DashboardLayout>
  );
}