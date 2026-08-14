import React, { useEffect, useState, useContext } from "react";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import { FaSun, FaMoon } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";

export default function Header() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

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
      const scrollY = window.scrollY + 100; // offset for navbar
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

  // Links
  const mainLinks = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "stats", label: "Stats" },
  ];

  const moreLinks = [
    { id: "achievements", label: "Achievements" },
    { id: "journey", label: "Journey" },
    { id: "testimonials", label: "Testimonials" },
    { id: "socialproof", label: "Social Proof" },
    { id: "blog", label: "Blog" },
    { id: "funfacts", label: "Fun Facts" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      onToggle={(nextExpanded) => setExpanded(nextExpanded)}
      className={`py-3 transition ${
        scrolled ? "shadow-sm bg-white dark:bg-black" : "bg-white dark:bg-black"
      }`}
    >
      <Container>
        {/* Brand */}
        <Navbar.Brand
          href="#hero"
          onClick={() => setExpanded(false)}
          className="fw-bold fs-3 text-primary"
        >
          Komil <span className="text-dark dark:text-white">Hassan</span>
        </Navbar.Brand>

        {/* Toggler */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navbar Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center gap-2">

            {/* Main Links */}
            {mainLinks.map((link) => (
              <Nav.Link
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setExpanded(false)}
                className={`fw-semibold ${
                  activeSection === link.id ? "text-primary" : ""
                }`}
              >
                {link.label}
              </Nav.Link>
            ))}

            {/* Dropdown Menu */}
            <NavDropdown
              title="More"
              id="more-dropdown"
              className={moreLinks.some(link => link.id === activeSection) ? "text-primary" : ""}
            >
              {moreLinks.map((link) => (
                <NavDropdown.Item
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setExpanded(false)}
                  className={activeSection === link.id ? "text-primary fw-semibold" : ""}
                >
                  {link.label}
                </NavDropdown.Item>
              ))}
            </NavDropdown>

            {/* Hire Me Button */}
            <Nav.Link href="#contact" onClick={() => setExpanded(false)}>
              <Button size="sm" className="btn-primary fw-bold">
                Hire Me
              </Button>
            </Nav.Link>

            {/* Dark/Light Mode Toggle */}
            <Nav.Link className="d-flex align-items-center">
              <button
                type="button"
                role="switch"
                aria-checked={!darkMode}
                aria-label="Toggle light/dark theme"
                title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                onClick={() => {
                  toggleTheme();
                  setExpanded(false);
                }}
                className="theme-switch"
              >
                <span className="theme-switch__track">
                  <span className="theme-switch__icon theme-switch__icon--sun">
                    <FaSun size={13} />
                  </span>
                  <span className="theme-switch__icon theme-switch__icon--moon">
                    <FaMoon size={12} />
                  </span>
                  <span className={`theme-switch__knob ${darkMode ? "is-dark" : "is-light"}`} />
                </span>
              </button>
            </Nav.Link>

            {/* Social Icons */}
            <Nav.Link href="https://github.com/amilokz" target="_blank">
              <i className="bi bi-github fs-5"></i>
            </Nav.Link>
            <Nav.Link href="www.linkedin.com/in/komil-hassan-a97b66282" target="_blank">
              <i className="bi bi-linkedin fs-5"></i>
            </Nav.Link>
            <Nav.Link href="https://twitter.com/komilhassan" target="_blank">
              <i className="bi bi-twitter fs-5"></i>
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
