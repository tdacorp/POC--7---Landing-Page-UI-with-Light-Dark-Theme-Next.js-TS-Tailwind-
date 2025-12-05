"use client";

import { useState, useEffect } from "react";

export default function ContactPage() {
     const [success, setSuccess] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Validate all fields
    if (!form.name || !form.email || !form.subject || !form.message) {
      alert("Please fill out all fields!");
      return;
    }

    // Save data to LocalStorage
    localStorage.setItem("contactForm", JSON.stringify(form));

   // Success message
    setSuccess("Your message has been submitted successfully!");

    // Reset form
    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

     // Hide message after 3 sec
    setTimeout(() => setSuccess(""), 3000);
  };

  return (
    <div className="min-h-screen p-4 flex flex-col items-center">
      
      {/* Heading */}
      <h1 className="text-4xl font-bold mt-4 text-center">Contact Us</h1>
      <p className="text-center mt-2 text-gray-600 max-w-xl"style={{ background: "var(--bg)", color: "var(--text)" }}>
        We consider all the drivers of change and give you the components
        you need to create meaningful change.
      </p>

       {/* Success message */}
      {success && (
        <div className="mt-6 bg-green-100 text-green-700 p-3 rounded-lg text-center">
          {success}
        </div>
      )}


      {/* Form Container */}
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-2xl shadow-lg rounded-2xl p-6 mt-8 space-y-4"
        style={{ background: "var(--bg)", color: "var(--text)" }}
      >
        {/* Name + Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="font-semibold">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-xl bg-gray-50"
              style={{ background: "var(--bg)", color: "var(--text)" }}
            />
          </div>

          <div>
            <label className="font-semibold">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-xl bg-gray-50"
              style={{ background: "var(--bg)", color: "var(--text)" }}
            />
          </div>
        </div>

        {/* Subject */}
        <div>
          <label className="font-semibold">Subject</label>
          <input
            type="text"
            name="subject"
            placeholder="Write a Subject"
            value={form.subject}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl bg-gray-50"
            style={{ background: "var(--bg)", color: "var(--text)" }}
          />
        </div>

        {/* Message */}
        <div>
          <label className="font-semibold">Message</label>
          <textarea
            name="message"
            placeholder="Write Your Message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl bg-gray-50"
            style={{ background: "var(--bg)", color: "var(--text)" }}
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-red-600 text-white py-3 rounded-full hover:bg-red-700 transition"
        >
          Send
        </button>
      </form>
    </div>
  );
}
