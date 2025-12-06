import React from "react";
import { useNavigate } from "react-router-dom";

export default function CaseStudy2() {
  const navigate = useNavigate();

  return (
    <div className="container py-5 text-white">
      <button className="btn btn-secondary mb-4" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h1 className="mb-3">SERP – Employee Record Portal Case Study</h1>

      <p>
        <strong>Problem:</strong> Need for a complete employee record management system with roles, CRUD, and authentication.
      </p>

      <p>
        <strong>Solution:</strong> Built a full admin portal using Laravel 12, MySQL, Bootstrap, and JavaScript with role-based access control and a responsive UI.
      </p>

      <p>
        <strong>Tech Used:</strong> Laravel, PHP, MySQL, Bootstrap, JavaScript
      </p>

      <p>
        <strong>Challenges:</strong> Implementing secure authentication, middleware, and ensuring responsive design for multiple devices.
      </p>

      <p>
        <strong>What I Learned:</strong> Enhanced my skills in Laravel, secure authentication, and CRUD operations in a real-world project scenario.
      </p>

      <img
        src="serp"
        alt="Case Study 2"
        className="img-fluid rounded"
      />
    </div>
  );
}
