import React from "react";

export default function Footer() {
  return (
    <footer
      className="position-relative pt-5 pb-4 mt-5"
      style={{
        background: "rgba(0,0,0,0.35)",       // semi-transparent glass
        backdropFilter: "blur(15px)",        // blur for glass effect
        borderTop: "1px solid rgba(255,255,255,0.2)"
      }}
    >
      {/* Bootstrap Icons CDN */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
      />

      <div className="container">

        {/* Top Section */}
        <div className="row text-center text-md-start align-items-center">

          {/* Branding */}
          <div className="col-md-4 mb-4">
            <h4 className="fw-bold text-white">Komil Hassan</h4>
            <p className="text-light opacity-75">
              Web Developer (PHP | Laravel | React | Bootstrap)
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-semibold mb-3 text-white">Navigation</h5>
            <ul className="list-unstyled">
              {["Home", "About", "Skills", "Projects", "Contact"].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-light text-decoration-none"
                    style={{ transition: "0.3s" }}
                    onMouseEnter={e => e.currentTarget.style.color = "#4a90e2"}
                    onMouseLeave={e => e.currentTarget.style.color = "#ffffff"}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-semibold mb-3 text-white">Follow Me</h5>
            <div className="d-flex gap-3 justify-content-center justify-content-md-start">
              {[
                { icon: "bi-facebook", link: "https://facebook.com" },
                { icon: "bi-instagram", link: "https://instagram.com" },
                { icon: "bi-linkedin", link: "https://linkedin.com" },
                { icon: "bi-github", link: "https://github.com" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-light fs-4"
                  style={{ transition: "0.3s" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#4a90e2"}
                  onMouseLeave={e => e.currentTarget.style.color = "#ffffff"}
                >
                  <i className={`bi ${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

        </div>

        <hr className="border-light opacity-25" />

        {/* Bottom */}
        <div className="text-center text-light opacity-75 mt-3">
          © {new Date().getFullYear()} <strong>Komil Hassan</strong>. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
