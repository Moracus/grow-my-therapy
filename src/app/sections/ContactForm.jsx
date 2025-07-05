"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    preferredTime: "",
    consent: false,
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }
    if (!formData.message.trim()) newErrors.message = "This field is required";
    if (!formData.preferredTime.trim())
      newErrors.preferredTime = "Preferred time is required";
    if (!formData.consent) newErrors.consent = "You must agree to be contacted";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted:", formData);
      // You can connect this with an API or service like Formspree / EmailJS
      alert("Form submitted!");
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
        preferredTime: "",
        consent: false,
      });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <section className="py-20 px-6 bg-[#f8f8f8]">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl text-black text-center mb-8">Contact</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block font-medium text-gray-700">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full mt-1 p-3 border border-gray-300 rounded text-black"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block font-medium text-gray-700">Phone</label>
            <input
              type="text"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="w-full mt-1 p-3 border border-gray-300 rounded text-black"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full mt-1 p-3 border border-gray-300 rounded text-black"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* What brings you here */}
          <div>
            <label className="block font-medium text-gray-700">
              What brings you here?
            </label>
            <textarea
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full mt-1 p-3 border border-gray-300 rounded h-28 text-black"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {/* Preferred time */}
          <div>
            <label className="block font-medium text-gray-700 ">
              Preferred time to reach you
            </label>
            <input
              type="text"
              value={formData.preferredTime}
              onChange={(e) =>
                setFormData({ ...formData, preferredTime: e.target.value })
              }
              className="w-full mt-1 p-3 border border-gray-300 rounded text-black"
            />
            {errors.preferredTime && (
              <p className="text-red-500 text-sm mt-1">
                {errors.preferredTime}
              </p>
            )}
          </div>

          {/* Consent */}
          <div className="flex items-start">
            <input
              type="checkbox"
              checked={formData.consent}
              onChange={(e) =>
                setFormData({ ...formData, consent: e.target.checked })
              }
              className="mt-1 mr-2"
            />
            <label className="text-sm text-gray-700">
              I agree to be contacted
            </label>
          </div>
          {errors.consent && (
            <p className="text-red-500 text-sm -mt-3 mb-2">{errors.consent}</p>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#9ebabb] text-white font-semibold py-3 rounded hover:bg-[#88a5a6] transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
