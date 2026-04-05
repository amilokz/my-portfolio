import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Briefcase } from "lucide-react";

export default function Header() {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  // Only essential sections
  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" }
  ];

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section highlighting
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const handleScroll = () => {
      const scrollY = window.scrollY + 100;
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`py-3 transition`}
      style={{
        background: scrolled 
          ? "rgba(5, 10, 25, 0.95)" 
          : "rgba(5, 10, 25, 0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(0, 204, 255, 0.2)",
      }}
    >
      <Container>
        {/* Brand / Logo */}
        <Navbar.Brand 
          href="#hero" 
          className="fw-bold"
          style={{
            fontSize: "1.5rem",
            background: "linear-gradient(135deg, #ffffff, #00cfff, #8b5cf6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Komil Hassan
        </Navbar.Brand>

        {/* Toggler */}
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav"
          style={{
            background: "rgba(0, 204, 255, 0.2)",
            border: "1px solid rgba(0, 204, 255, 0.5)",
            borderRadius: "8px",
          }}
        />

        {/* Navbar Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center gap-2">

            {/* Main Navigation Links - Only 5 sections */}
            {navItems.map((item) => (
              <Nav.Link
                key={item.id}
                href={`#${item.id}`}
                className={`fw-semibold px-3 ${
                  activeSection === item.id ? "active" : ""
                }`}
                style={{
                  color: activeSection === item.id ? "#00cfff" : "rgba(255,255,255,0.85)",
                  transition: "all 0.3s",
                }}
              >
                {item.label}
              </Nav.Link>
            ))}

            {/* Hire Me Button */}
            <Button
              onClick={scrollToContact}
              className="ms-2 px-4 py-2"
              style={{
                background: "linear-gradient(135deg, #00cfff, #8b5cf6)",
                color: "white",
                fontWeight: "600",
                borderRadius: "10px",
                border: "none",
                boxShadow: "0 0 15px rgba(0, 204, 255, 0.4)",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 0 25px rgba(0, 204, 255, 0.6)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 0 15px rgba(0, 204, 255, 0.4)";
              }}
            >
              <Briefcase size={16} />
              Hire Me
            </Button>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}