import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import api from "../api/api";

export default function Alumni() {
  const [alumni, setAlumni] = useState([]);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    graduationYear: "",
    currentCompany: "",
  });

  // Fetch alumni list
  useEffect(() => {
    let ignore = false;

    const fetchAlumni = async () => {
      try {
        const res = await api.get("/alumni");
        if (!ignore) {
          setAlumni(res.data);
        }
      } catch (err) {
        console.error("Failed to fetch alumni", err);
      }
    };

    fetchAlumni();

    return () => {
      ignore = true;
    };
  }, []);

  // Handle form input
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Submit new alumni
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/alumni", form);

      // Refresh alumni list
      const res = await api.get("/alumni");
      setAlumni(res.data);

      // Reset form
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        graduationYear: "",
        currentCompany: "",
      });
    } catch (err) {
      console.error("Failed to add alumni", err);
    }
  };

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-6">Alumni</h1>

      {/* ADD ALUMNI FORM */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow mb-8 grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <input
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
          placeholder="First Name"
          className="border p-2 rounded"
        />
        <input
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          className="border p-2 rounded"
        />
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="border p-2 rounded"
        />
        <input
          name="graduationYear"
          value={form.graduationYear}
          onChange={handleChange}
          placeholder="Graduation Year"
          className="border p-2 rounded"
        />
        <input
          name="currentCompany"
          value={form.currentCompany}
          onChange={handleChange}
          placeholder="Current Company"
          className="border p-2 rounded"
        />

        <button className="bg-blue-600 text-white py-2 rounded md:col-span-3 hover:bg-blue-700">
          Add Alumni
        </button>
      </form>

      {/* ALUMNI TABLE */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Graduation Year</th>
              <th className="p-3 text-left">Company</th>
              <th className="p-3 text-left">Email</th>
            </tr>
          </thead>
          <tbody>
            {alumni.map((a) => (
              <tr key={a.id} className="border-t">
                <td className="p-3">
                  {a.firstName} {a.lastName}
                </td>
                <td className="p-3">{a.graduationYear}</td>
                <td className="p-3">{a.currentCompany}</td>
                <td className="p-3">{a.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}