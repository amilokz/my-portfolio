import React, { useEffect, useState } from "react";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";

export default function Header() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dark/Light Mode effect
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

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
  ];

  const moreLinks = [
    { id: "journey", label: "Journey" },
    { id: "testimonials", label: "Testimonials" },
    { id: "blog", label: "Blog" },
    { id: "funfacts", label: "Fun Facts" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`py-3 transition ${
        scrolled ? "shadow-sm bg-white dark:bg-black" : "bg-white dark:bg-black"
      }`}
    >
      <Container>
        {/* Brand */}
        <Navbar.Brand href="#hero" className="fw-bold fs-3 text-primary">
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
                  className={activeSection === link.id ? "text-primary fw-semibold" : ""}
                >
                  {link.label}
                </NavDropdown.Item>
              ))}
            </NavDropdown>

            {/* Hire Me Button */}
            <Nav.Link href="#contact">
              <Button size="sm" className="btn-primary fw-bold">
                Hire Me
              </Button>
            </Nav.Link>

            {/* Dark/Light Mode */}
            <Nav.Link>
              <Button
                variant="outline-secondary"
                size="sm"
                onClick={() => setDarkMode(!darkMode)}
              >
                {darkMode ? "Light Mode" : "Dark Mode"}
              </Button>
            </Nav.Link>

            {/* Social Icons */}
            <Nav.Link href="https://github.com/komilhassan" target="_blank">
              <i className="bi bi-github fs-5"></i>
            </Nav.Link>
            <Nav.Link href="https://linkedin.com/in/komilhassan" target="_blank">
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
