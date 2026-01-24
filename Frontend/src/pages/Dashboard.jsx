import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import StatCard from "../components/StatCard";
import api from "../api/api";
import { Users, UserCheck, GraduationCap } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

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

  const data = [
    { name: "Students", value: stats.students },
    { name: "Lecturers", value: stats.lecturers },
    { name: "Alumni", value: stats.alumni },
  ];

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-6">Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<StatCard
  title="Students"
  value={stats.students}
  icon={<Users size={36} />}
/>

<StatCard
  title="Lecturers"
  value={stats.lecturers}
  icon={<UserCheck size={36} />}
/>

<StatCard
  title="Alumni"
  value={stats.alumni}
  icon={<GraduationCap size={36} />}
/>
      </div>
      <div className="bg-white rounded-xl shadow p-6 mt-8">
        <h2 className="text-lg font-semibold mb-4">System Overview</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </DashboardLayout>
  );
}