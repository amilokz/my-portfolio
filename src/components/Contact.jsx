import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="position-relative py-5 overflow-hidden"
      style={{ background: "transparent" }}
    >
      <div className="container">

        {/* Section Title */}
        <h2 className="text-center fw-bold mb-5 display-6 text-white">
          Contact Me
        </h2>

        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">

            {/* Contact Form */}
            <form
              className="p-4 rounded-4 shadow-lg"
              style={{
                background: "rgba(0,0,0,0.35)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.3)",
                color: "white",
              }}
            >
              <div className="mb-3">
                <label className="form-label fw-semibold">Your Name</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter your name"
                  style={{ background: "rgba(255,255,255,0.1)", color: "white", border: "1px solid rgba(255,255,255,0.3)" }}
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Your Email</label>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="Enter your email"
                  style={{ background: "rgba(255,255,255,0.1)", color: "white", border: "1px solid rgba(255,255,255,0.3)" }}
                  defaultValue="amilokz1@gmail.com"
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Your Message</label>
                <textarea
                  rows="5"
                  className="form-control form-control-lg"
                  placeholder="Enter your message"
                  style={{ background: "rgba(255,255,255,0.1)", color: "white", border: "1px solid rgba(255,255,255,0.3)" }}
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-lg w-100"
              >
                Send Message
              </button>
            </form>

            {/* Email Info */}
            <p className="text-center mt-4 text-primary">
              Or email me directly at:{" "}
              <a
                href="mailto:amilokz1@gmail.com"
                className="text-primary fw-semibold"
              >
                amilokz1@gmail.com
              </a>
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}
