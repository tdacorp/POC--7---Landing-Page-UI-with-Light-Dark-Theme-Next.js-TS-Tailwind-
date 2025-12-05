"use client";

import { useState } from "react";

export default function BookTablePage() {
  const [form, setForm] = useState({
    date: "",
    time: "",
    name: "",
    phone: "",
    persons: "1",
  });

  const [success, setSuccess] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!form.date || !form.time || !form.name || !form.phone || !form.persons) {
      alert("Please fill all the fields");
      return;
    }

    // Save to localStorage
    const previous = JSON.parse(localStorage.getItem("bookings") || "[]");
    previous.push(form);
    localStorage.setItem("bookings", JSON.stringify(previous));

    // Success message
    setSuccess("Booking saved successfully!");

    // Reset form
    setForm({
      date: "",
      time: "",
      name: "",
      phone: "",
      persons: "1",
    });

    // Hide message after 3 sec
    setTimeout(() => setSuccess(""), 3000);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      {/* Title */}
      <h1 className="text-5xl font-bold text-center">Book A Table</h1>
      <p className="text-center text-gray-600 mt-3"style={{ background: "var(--bg)", color: "var(--text)" }}>
        We consider all the drivers of change to give you the components
        you need to create a truly wonderful experience.
      </p>

      {/* Success message */}
      {success && (
        <div className="mt-6 bg-green-100 text-green-700 p-3 rounded-lg text-center">
          {success}
        </div>
      )}

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="mt-10 bg-white p-8 rounded-2xl shadow-xl space-y-5"
        style={{ background: "var(--bg)", color: "var(--text)" }}
      >
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block mb-1 font-semibold">Date</label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Time</label>
            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block mb-1 font-semibold">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Phone</label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter your phone"
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>
        </div>

        {/* Persons */}
        <div>
          <label className="block mb-1 font-semibold">Total Person</label>
          <input
            type="number"
            min="1"
            name="persons"
            value={form.persons}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-2xl font-semibold mt-4"
        >
          Send
        </button>
      </form>
    </div>
  );
}
