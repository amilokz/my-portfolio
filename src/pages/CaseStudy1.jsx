import React from "react";
import { useNavigate } from "react-router-dom";

export default function CaseStudy1() {
  const navigate = useNavigate();
  return (
    <div className="container py-5 text-white">
      <button className="btn btn-secondary mb-4" onClick={() => navigate(-1)}>← Back</button>
      <h1 className="mb-3">Company Website – Case Study</h1>
      <p>
        <strong>Problem:</strong> Client needed a responsive company landing page with modern animations.
      </p>
      <p>
        <strong>Solution:</strong> Developed using React and Tailwind CSS with interactive sections and optimized performance.
      </p>
      <p>
        <strong>Tech Used:</strong> React, Tailwind CSS, JavaScript
      </p>
      <p>
        <strong>Challenges:</strong> Integrating animations smoothly without affecting performance.
      </p>
      <p>
        <strong>What I Learned:</strong> Improved animation techniques and responsive design.
      </p>
      <img src="companypro.jpeg" alt="Case Study" className="img-fluid rounded" />
    </div>
  );
}
