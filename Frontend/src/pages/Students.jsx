import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import api from "../api/api";

export default function Students() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    studentId: "",
    degreeProgram: "",
    year: "",
  });

  useEffect(() => {
    let ignore = false;

    const fetchStudents = async () => {
      try {
        const res = await api.get("/students");
        if (!ignore) {
          setStudents(res.data);
        }
      } catch (err) {
        console.error("Failed to fetch students", err);
      }
    };

    fetchStudents();

    return () => {
      ignore = true;
    };
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/students", {
        ...form,
        year: Number(form.year),
      });
      const res = await api.get("/students");
      setStudents(res.data);
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        studentId: "",
        degreeProgram: "",
        year: "",
      });
    } catch (err) {
      console.error("Failed to add student", err);
    }
  };

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-6">Students</h1>

      {/* ADD STUDENT FORM */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow mb-8 grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="First Name" className="border p-2 rounded" />
        <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last Name" className="border p-2 rounded" />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="border p-2 rounded" />
        <input name="studentId" value={form.studentId} onChange={handleChange} placeholder="Student ID" className="border p-2 rounded" />
        <input name="degreeProgram" value={form.degreeProgram} onChange={handleChange} placeholder="Degree Program" className="border p-2 rounded" />
        <input name="year" value={form.year} onChange={handleChange} placeholder="Year" type="number" className="border p-2 rounded" />

        <button className="bg-blue-600 text-white py-2 rounded md:col-span-3 hover:bg-blue-700">
          Add Student
        </button>
      </form>

      {/* STUDENTS TABLE */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Student ID</th>
              <th className="p-3 text-left">Degree</th>
              <th className="p-3 text-left">Year</th>
              <th className="p-3 text-left">Email</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <tr key={s.id} className="border-t">
                <td className="p-3">{s.firstName} {s.lastName}</td>
                <td className="p-3">{s.studentId}</td>
                <td className="p-3">{s.degreeProgram}</td>
                <td className="p-3">{s.year}</td>
                <td className="p-3">{s.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}