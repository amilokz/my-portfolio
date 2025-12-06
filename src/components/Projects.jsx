import React, { useState } from "react";
import projects from "../data/projects";
import { Modal, Button, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Projects() {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [filter, setFilter] = useState("All");

  const handleShow = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };
  const handleClose = () => {
    setSelectedProject(null);
    setShowModal(false);
  };

  const enhancedProjects = [
    ...projects,
    {
      id: 9,
      title: "Company Website",
      category: "React",
      shortDesc: "Modern company landing page with responsive design.",
      description:
        "Developed a fully responsive company website using React and Tailwind CSS. Features smooth animations, interactive sections, and optimized performance.",
      image: "companypro.jpeg",
      stack: ["React", "Tailwind CSS", "JavaScript"],
      demo: "#",
      github: "#",
      caseStudy: "/casestudy/1",
    },
  ];

  const filteredProjects =
    filter === "All"
      ? enhancedProjects
      : enhancedProjects.filter((project) => project.category === filter);

  const categories = ["All", ...new Set(enhancedProjects.map((p) => p.category))];

  return (
    <section id="projects" className="position-relative py-5" style={{ background: "transparent" }}>
      <div className="container">
        <h2 className="text-center mb-5 display-6 fw-bold text-white">Projects</h2>

        {/* Category Filter */}
        <div className="text-center mb-4">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={filter === cat ? "primary" : "outline-primary"}
              className="mx-1 my-1"
              onClick={() => setFilter(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="row g-4 justify-content-center">
          {filteredProjects.map((project) => (
            <div key={project.id} className="col-12 col-md-6 col-lg-4">
              <div
                className="card h-100 shadow-lg cursor-pointer p-2"
                style={{
                  background: "rgba(0,0,0,0.35)",
                  backdropFilter: "blur(20px)",
                  borderRadius: "1.5rem",
                  border: "1px solid rgba(255,255,255,0.3)",
                  color: "white",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow = "0 0 60px rgba(255,255,255,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 0 40px rgba(255,255,255,0.2)";
                }}
                onClick={() => project.caseStudy ? navigate(project.caseStudy) : handleShow(project)}
              >
                <img src={project.image} className="card-img-top rounded-3" alt={project.title} />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.shortDesc}</p>
                  <div>
                    {project.stack.map((tech, idx) => (
                      <Badge bg="info" className="me-1 mb-1" key={idx} style={{ fontSize: "0.8rem" }}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <Modal show={showModal} onHide={handleClose} size="lg" centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedProject.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={selectedProject.image} alt={selectedProject.title} className="img-fluid mb-3 rounded-3" />
            <p>{selectedProject.description}</p>
            <div className="mb-3">
              {selectedProject.stack.map((tech, idx) => (
                <Badge bg="info" className="me-1" key={idx}>
                  {tech}
                </Badge>
              ))}
            </div>
          </Modal.Body>
          <Modal.Footer>
            {selectedProject.demo && <Button variant="primary" href={selectedProject.demo} target="_blank">Live Demo</Button>}
            {selectedProject.github && <Button variant="dark" href={selectedProject.github} target="_blank">GitHub</Button>}
            <Button variant="secondary" onClick={handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      )}
    </section>
  );
}
