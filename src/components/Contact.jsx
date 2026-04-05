import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, User, MessageSquare, CheckCircle } from "lucide-react";
import confetti from 'canvas-confetti';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate email sending (replace with actual API later)
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitted(true);
      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
      
      // 🎉 CONFETTI EFFECT 🎉
      confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#00cfff', '#8b5cf6', '#ffffff', '#f59e0b', '#10b981'],
        startVelocity: 15,
        gravity: 1,
        ticks: 200,
      });
      
      // Also trigger side confetti
      setTimeout(() => {
        confetti({
          particleCount: 100,
          angle: 60,
          spread: 55,
          origin: { x: 0, y: 0.5 },
          colors: ['#00cfff', '#8b5cf6']
        });
        confetti({
          particleCount: 100,
          angle: 120,
          spread: 55,
          origin: { x: 1, y: 0.5 },
          colors: ['#00cfff', '#8b5cf6']
        });
      }, 100);
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="position-relative py-5 overflow-hidden"
      style={{ background: "transparent" }}
    >
      <div className="container">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center fw-bold mb-5 display-6"
          style={{
            background: "linear-gradient(135deg, #ffffff, #00cfff, #8b5cf6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Contact Me
        </motion.h2>

        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            
            {/* Success Message */}
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="alert alert-success text-center mb-4"
                style={{
                  background: "rgba(16, 185, 129, 0.2)",
                  border: "1px solid #10b981",
                  color: "#10b981",
                  borderRadius: "12px",
                }}
              >
                <CheckCircle size={18} className="me-2" />
                Message sent successfully! 🎉 I'll get back to you soon.
              </motion.div>
            )}

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="p-4 p-md-5 rounded-4"
              style={{
                background: "rgba(15, 25, 45, 0.6)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(0, 204, 255, 0.25)",
                borderRadius: "24px",
              }}
            >
              {/* Name Field */}
              <div className="mb-4">
                <label className="form-label fw-semibold d-flex align-items-center gap-2" style={{ color: "rgba(255,255,255,0.8)" }}>
                  <User size={16} color="#00cfff" />
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control form-control-lg"
                  placeholder="Enter your name"
                  required
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    color: "white",
                    border: "1px solid rgba(0, 204, 255, 0.3)",
                    borderRadius: "12px",
                  }}
                />
              </div>

              {/* Email Field */}
              <div className="mb-4">
                <label className="form-label fw-semibold d-flex align-items-center gap-2" style={{ color: "rgba(255,255,255,0.8)" }}>
                  <Mail size={16} color="#00cfff" />
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control form-control-lg"
                  placeholder="Enter your email"
                  required
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    color: "white",
                    border: "1px solid rgba(0, 204, 255, 0.3)",
                    borderRadius: "12px",
                  }}
                />
              </div>

              {/* Message Field */}
              <div className="mb-4">
                <label className="form-label fw-semibold d-flex align-items-center gap-2" style={{ color: "rgba(255,255,255,0.8)" }}>
                  <MessageSquare size={16} color="#00cfff" />
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="form-control form-control-lg"
                  placeholder="Enter your message"
                  required
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    color: "white",
                    border: "1px solid rgba(0, 204, 255, 0.3)",
                    borderRadius: "12px",
                  }}
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  width: "100%",
                  padding: "14px",
                  background: "linear-gradient(135deg, #00cfff, #8b5cf6)",
                  color: "white",
                  border: "none",
                  borderRadius: "12px",
                  fontWeight: "600",
                  fontSize: "1rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  cursor: isLoading ? "not-allowed" : "pointer",
                  opacity: isLoading ? 0.7 : 1,
                }}
              >
                {isLoading ? (
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div className="spinner-border spinner-border-sm" role="status" style={{ color: "white" }}>
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    Sending...
                  </div>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>
            </motion.form>

            {/* Email Info */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mt-4"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              Or email me directly at:{" "}
              <a
                href="mailto:amilokz1@gmail.com"
                style={{ color: "#00cfff", textDecoration: "none", fontWeight: "500" }}
              >
                amilokz1@gmail.com
              </a>
            </motion.p>

          </div>
        </div>
      </div>

      {/* Add spinner animation style */}
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .spinner-border {
          display: inline-block;
          width: 1rem;
          height: 1rem;
          border: 2px solid currentColor;
          border-right-color: transparent;
          border-radius: 50%;
          animation: spin 0.75s linear infinite;
        }
        .visually-hidden {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
      `}</style>
    </section>
  );
}