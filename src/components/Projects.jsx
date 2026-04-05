import React, { useState } from "react";
import projects from "../data/projects";
import { Modal, Button, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Github, ExternalLink, X, Search, Code2, Copy, Check } from "lucide-react";

export default function Projects() {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [copiedCode, setCopiedCode] = useState(false);

  const handleShow = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };
  const handleClose = () => {
    setSelectedProject(null);
    setShowModal(false);
  };

  const copyCodeToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  // Get unique categories
  const categories = ["All", ...new Set(projects.map((p) => p.category))];

  // Filter projects by category and search term
  const filteredProjects = projects.filter((project) => {
    const matchesFilter = filter === "All" || project.category === filter;
    const matchesSearch = 
      searchTerm === "" ||
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.shortDesc.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.stack.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="projects" className="position-relative py-5" style={{ background: "transparent" }}>
      <div className="container">
        <h2 className="text-center mb-5 display-6 fw-bold text-white">Projects</h2>

        {/* Search Bar */}
        <div className="mb-4" style={{ maxWidth: "500px", margin: "0 auto 30px" }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(0,204,255,0.3)",
            borderRadius: "50px",
            padding: "5px 20px",
          }}>
            <Search size={18} color="#00cfff" />
            <input
              type="text"
              placeholder="Search projects by title or technology..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: "100%",
                padding: "12px 15px",
                background: "transparent",
                border: "none",
                color: "white",
                outline: "none",
              }}
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="text-center mb-4 d-flex flex-wrap justify-content-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                background: filter === cat ? "linear-gradient(135deg, #00cfff, #8b5cf6)" : "rgba(255,255,255,0.1)",
                color: filter === cat ? "white" : "rgba(255,255,255,0.7)",
                border: filter === cat ? "none" : "1px solid rgba(255,255,255,0.2)",
                padding: "8px 20px",
                borderRadius: "30px",
                cursor: "pointer",
                transition: "all 0.3s",
                fontSize: "0.85rem",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <p className="text-center mb-4" style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem" }}>
          Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""}
        </p>

        {/* Projects Grid */}
        <div className="row g-4 justify-content-center">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-5">
              <p style={{ color: "rgba(255,255,255,0.6)" }}>No projects found matching your search.</p>
            </div>
          ) : (
            filteredProjects.map((project) => (
              <div key={project.id} className="col-12 col-md-6 col-lg-4">
                <div
                  className="card h-100 cursor-pointer"
                  style={{
                    background: "rgba(15, 25, 45, 0.6)",
                    backdropFilter: "blur(16px)",
                    borderRadius: "20px",
                    border: "1px solid rgba(0, 204, 255, 0.25)",
                    color: "white",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    overflow: "hidden",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-10px)";
                    e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.3), 0 0 30px rgba(0,204,255,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <img 
                    src={project.image} 
                    className="card-img-top" 
                    alt={project.title}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body p-4">
                    <h5 className="card-title mb-2">{project.title}</h5>
                    <p className="card-text" style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.85rem" }}>
                      {project.shortDesc}
                    </p>
                    
                    {/* Action Buttons on Card */}
                    <div style={{ display: "flex", gap: "8px", marginTop: "12px", marginBottom: "12px" }}>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "6px",
                            padding: "6px 12px",
                            background: "linear-gradient(135deg, #00cfff, #8b5cf6)",
                            color: "white",
                            borderRadius: "8px",
                            textDecoration: "none",
                            fontSize: "0.7rem",
                            fontWeight: "500",
                          }}
                        >
                          <ExternalLink size={12} />
                          Live Demo
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "6px",
                            padding: "6px 12px",
                            background: "rgba(255,255,255,0.1)",
                            color: "white",
                            borderRadius: "8px",
                            textDecoration: "none",
                            fontSize: "0.7rem",
                            border: "1px solid rgba(255,255,255,0.2)",
                          }}
                        >
                          <Github size={12} />
                          GitHub
                        </a>
                      )}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleShow(project);
                        }}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                          padding: "6px 12px",
                          background: "rgba(0,204,255,0.15)",
                          color: "#00cfff",
                          borderRadius: "8px",
                          border: "1px solid rgba(0,204,255,0.3)",
                          fontSize: "0.7rem",
                          cursor: "pointer",
                        }}
                      >
                        Details
                      </button>
                    </div>
                    
                    {/* Code Preview Card */}
                    {project.codeSnippet && (
                      <div 
                        style={{
                          background: "#0a0a1a",
                          borderRadius: "12px",
                          padding: "12px",
                          marginTop: "12px",
                          border: "1px solid rgba(0,204,255,0.2)",
                          cursor: "pointer",
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          copyCodeToClipboard(project.codeSnippet);
                        }}
                      >
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                            <Code2 size={14} color="#00cfff" />
                            <span style={{ fontSize: "0.7rem", color: "#00cfff" }}>Code Preview</span>
                          </div>
                          {copiedCode ? (
                            <Check size={12} color="#10b981" />
                          ) : (
                            <Copy size={12} color="rgba(255,255,255,0.4)" />
                          )}
                        </div>
                        <code style={{
                          fontSize: "0.65rem",
                          fontFamily: "monospace",
                          color: "#00cfff",
                          display: "block",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}>
                          {project.codeSnippet.length > 80 ? project.codeSnippet.substring(0, 80) + "..." : project.codeSnippet}
                        </code>
                      </div>
                    )}
                    
                    <div className="mt-3">
                      {project.stack.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          style={{
                            display: "inline-block",
                            background: "rgba(0, 204, 255, 0.15)",
                            color: "#00cfff",
                            fontSize: "0.7rem",
                            padding: "4px 10px",
                            borderRadius: "20px",
                            marginRight: "6px",
                            marginBottom: "6px",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.stack.length > 3 && (
                        <span style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.5)" }}>
                          +{project.stack.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Modal - Full Details */}
      {selectedProject && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.8)",
            backdropFilter: "blur(8px)",
            zIndex: 1100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
          onClick={handleClose}
        >
          <div
            style={{
              maxWidth: "700px",
              width: "100%",
              maxHeight: "90vh",
              overflowY: "auto",
              background: "rgba(15, 25, 45, 0.95)",
              backdropFilter: "blur(20px)",
              borderRadius: "24px",
              border: "1px solid rgba(0, 204, 255, 0.3)",
              overflow: "hidden",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ padding: "20px", borderBottom: "1px solid rgba(255,255,255,0.1)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h3 style={{ color: "white", margin: 0 }}>{selectedProject.title}</h3>
              <button onClick={handleClose} style={{ background: "none", border: "none", cursor: "pointer" }}>
                <X size={24} color="white" />
              </button>
            </div>
            
            <div style={{ padding: "20px" }}>
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                style={{ width: "100%", borderRadius: "16px", marginBottom: "20px" }}
              />
              <p style={{ color: "rgba(255,255,255,0.8)", lineHeight: "1.6", marginBottom: "20px" }}>
                {selectedProject.description}
              </p>
              
              {/* Full Code Preview in Modal */}
              {selectedProject.codeSnippet && (
                <div style={{ marginBottom: "20px" }}>
                  <h4 style={{ color: "#00cfff", fontSize: "0.9rem", marginBottom: "10px", display: "flex", alignItems: "center", gap: "8px" }}>
                    <Code2 size={16} />
                    Code Preview
                  </h4>
                  <div style={{
                    background: "#0a0a1a",
                    borderRadius: "12px",
                    padding: "15px",
                    border: "1px solid rgba(0,204,255,0.2)",
                    position: "relative",
                  }}>
                    <button
                      onClick={() => copyCodeToClipboard(selectedProject.codeSnippet)}
                      style={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        background: "rgba(255,255,255,0.1)",
                        border: "none",
                        borderRadius: "6px",
                        padding: "5px 10px",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        fontSize: "0.7rem",
                        color: "white",
                      }}
                    >
                      {copiedCode ? <Check size={12} color="#10b981" /> : <Copy size={12} />}
                      {copiedCode ? "Copied!" : "Copy"}
                    </button>
                    <pre style={{
                      margin: 0,
                      fontSize: "0.75rem",
                      fontFamily: "monospace",
                      color: "#00cfff",
                      overflow: "auto",
                      whiteSpace: "pre-wrap",
                      wordBreak: "break-word",
                    }}>
                      <code>{selectedProject.codeSnippet}</code>
                    </pre>
                  </div>
                </div>
              )}
              
              <div style={{ marginBottom: "20px" }}>
                <h4 style={{ color: "#00cfff", fontSize: "0.9rem", marginBottom: "10px" }}>Tech Stack:</h4>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {selectedProject.stack.map((tech, idx) => (
                    <span
                      key={idx}
                      style={{
                        background: "rgba(0, 204, 255, 0.15)",
                        color: "#00cfff",
                        fontSize: "0.75rem",
                        padding: "5px 12px",
                        borderRadius: "20px",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                {selectedProject.demo && (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "10px 20px",
                      background: "linear-gradient(135deg, #00cfff, #8b5cf6)",
                      color: "white",
                      borderRadius: "10px",
                      textDecoration: "none",
                      fontSize: "0.85rem",
                    }}
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "10px 20px",
                      background: "rgba(255,255,255,0.1)",
                      color: "white",
                      borderRadius: "10px",
                      textDecoration: "none",
                      fontSize: "0.85rem",
                    }}
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}