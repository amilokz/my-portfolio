import React from "react";
import { useNavigate } from "react-router-dom";

export default function CaseStudy3() {
  const navigate = useNavigate();

  return (
    <div className="container py-5 text-white">
      <button className="btn btn-secondary mb-4" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h1 className="mb-3">FlexiPDF – PDF Management Tool Case Study</h1>

      <p>
        <strong>Problem:</strong> Users needed an easy tool to merge, compress, preview, and manage PDF files online.
      </p>

      <p>
        <strong>Solution:</strong> Developed a lightweight web application using PHP and JavaScript. Provided merge, compress, preview, and download features with a clean UI.
      </p>

      <p>
        <strong>Tech Used:</strong> PHP, JavaScript, HTML, CSS
      </p>

      <p>
        <strong>Challenges:</strong> Handling large PDFs efficiently and ensuring smooth user experience for all browsers.
      </p>

      <p>
        <strong>What I Learned:</strong> Improved skills in file handling, client-server interaction, and UI design for web tools.
      </p>

      <img
        src="flexipdf.jpeg"
        alt="Case Study 3"
        className="img-fluid rounded"
      />
    </div>
  );
}
