import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import api from "../api/api";

export default function Lecturers() {
  const [lecturers, setLecturers] = useState([]);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    staffId: "",
    department: "",
    designation: "",
  });

  useEffect(() => {
    let ignore = false;

    const fetchLecturers = async () => {
      try {
        const res = await api.get("/lecturers");
        if (!ignore) {
          setLecturers(res.data);
        }
      } catch (err) {
        console.error("Failed to fetch lecturers", err);
      }
    };

    fetchLecturers();

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
      await api.post("/lecturers", form);
      const res = await api.get("/lecturers");
      setLecturers(res.data);

      setForm({
        firstName: "",
        lastName: "",
        email: "",
        staffId: "",
        department: "",
        designation: "",
      });
    } catch (err) {
      console.error("Failed to add lecturer", err);
    }
  };

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-6">Lecturers</h1>

      {/* ADD LECTURER FORM */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow mb-8 grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="First Name" className="border p-2 rounded" />
        <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last Name" className="border p-2 rounded" />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="border p-2 rounded" />
        <input name="staffId" value={form.staffId} onChange={handleChange} placeholder="Staff ID" className="border p-2 rounded" />
        <input name="department" value={form.department} onChange={handleChange} placeholder="Department" className="border p-2 rounded" />
        <input name="designation" value={form.designation} onChange={handleChange} placeholder="Designation" className="border p-2 rounded" />

        <button className="bg-blue-600 text-white py-2 rounded md:col-span-3 hover:bg-blue-700">
          Add Lecturer
        </button>
      </form>

      {/* LECTURERS TABLE */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Staff ID</th>
              <th className="p-3 text-left">Department</th>
              <th className="p-3 text-left">Designation</th>
              <th className="p-3 text-left">Email</th>
            </tr>
          </thead>
          <tbody>
            {lecturers.map((l) => (
              <tr key={l.id} className="border-t">
                <td className="p-3">{l.firstName} {l.lastName}</td>
                <td className="p-3">{l.staffId}</td>
                <td className="p-3">{l.department}</td>
                <td className="p-3">{l.designation}</td>
                <td className="p-3">{l.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}