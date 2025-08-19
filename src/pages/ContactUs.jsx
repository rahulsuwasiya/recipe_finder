import { useState } from "react";
import Navbar from "../components/Navbar";

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [notice, setNotice] = useState({ type: "", text: "" });

  const API_BASE = "http://localhost:8080"; // backend URL

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setNotice({ type: "", text: "" });

    if (!formData.name || !formData.email || !formData.message) {
      setNotice({ type: "error", text: "Please fill out all fields." });
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setNotice({ type: "success", text: data.message || "Message sent successfully!" });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setNotice({ type: "error", text: data.message || "Failed to send message." });
      }
    } catch (err) {
      setNotice({ type: "error", text: `Request failed: ${err.message}` });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />

     

      {/* Contact Form + Info */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 mt-15 items-start">
        {/* Left - Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100">
          <h2 className="text-2xl font-bold text-[#009688] mb-6">Send Us a Message</h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#FF6F61] shadow-sm"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#FF6F61] shadow-sm"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                rows="5"
                name="message"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#FF6F61] shadow-sm"
              />
            </div>

            {notice.text && (
              <div
                className={`rounded-xl p-3 text-sm ${
                  notice.type === "success"
                    ? "bg-green-50 text-green-700 border border-green-200"
                    : "bg-red-50 text-red-700 border border-red-200"
                }`}
              >
                {notice.text}
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className={`w-full py-3 bg-[#009688] hover:bg-[#FF6F61] text-white rounded-xl text-lg font-semibold transition shadow-md ${
                submitting ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {submitting ? "Sending..." : "✉️ Send Message"}
            </button>
          </form>
        </div>

        {/* Right - Info Cards */}
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-[#ff9e95]  to-white rounded-2xl shadow-md p-6 border border-blue-100 hover:shadow-xl transition">
            <div className="text-4xl mb-3">📍</div>
            <h3 className="text-lg font-semibold text-[#009688]">Our Address</h3>
            <p className="text-gray-600">123 Recipe Street, Mumbai, India</p>
          </div>
          <div className="bg-gradient-to-r from-[#ff9e95] to-white rounded-2xl shadow-md p-6 border border-blue-100 hover:shadow-xl transition">
            <div className="text-4xl mb-3 text-[#FF6F61]">📞</div>
            <h3 className="text-lg font-semibold text-[#009688]">Call Us</h3>
            <p className="text-gray-600">+91 98765 43210</p>
          </div>
          <div className="bg-gradient-to-r  from-[#ff9e95]  to-white rounded-2xl shadow-md p-6 border border-blue-100 hover:shadow-xl transition">
            <div className="text-4xl mb-3 ">📧</div>
            <h3 className="text-lg font-semibold text-[#009688]">Email Us</h3>
            <p className="text-gray-600">support@rasoiway.com</p>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="mt-6 px-6 pb-16">
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.710429539471!2d72.81451227497158!3d19.08219778707485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c63f5f9e2a1f%3A0x3f8f99d1f5b5b3b9!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1691920000000!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          className="shadow-lg rounded-2xl"
        ></iframe>
      </div>
    </>
  );
};

export default ContactUs;
