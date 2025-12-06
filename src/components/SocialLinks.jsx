import React from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function SocialLinks() {
  const links = [
    {
      icon: <Github size={28} />,
      url: "https://github.com/your-username",
      label: "GitHub",
    },
    {
      icon: <Linkedin size={28} />,
      url: "https://linkedin.com/in/your-link",
      label: "LinkedIn",
    },
    {
      icon: <Mail size={28} />,
      url: "mailto:your-email@gmail.com",
      label: "Email",
    },
    {
      icon: <Phone size={28} />,
      url: "https://wa.me/923000000000",
      label: "WhatsApp",
    },
  ];

  return (
    <div className="d-flex justify-content-center gap-4 mt-4 flex-wrap">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="text-dark fs-4 p-3 rounded-circle bg-light shadow-sm d-flex align-items-center justify-content-center transition"
          style={{ width: "60px", height: "60px" }}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}
