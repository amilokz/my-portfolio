import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function SocialProof() {
  // Replace placeholders with real API data if you integrate later
  const githubStars = "1.2k"; // placeholder
  const linkedinFollowers = "900+"; // placeholder

  return (
    <section id="socialproof" className="py-5 text-white" style={{ background: "transparent" }}>
      <div className="container">
        <h2 className="text-center fw-bold mb-5 display-5">Social Proof</h2>

        <div className="d-flex justify-content-center gap-4 flex-wrap">
          <motion.div className="p-3 rounded-4 text-center" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <FaGithub size={30} color="#ffffff" />
            <h5 className="mt-2">{githubStars}</h5>
            <p className="mb-0">GitHub Stars</p>
            <a className="text-info" href="https://github.com/komilhassan" target="_blank" rel="noreferrer">View Repo</a>
          </motion.div>

          <motion.div className="p-3 rounded-4 text-center" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <FaLinkedin size={30} />
            <h5 className="mt-2">{linkedinFollowers}</h5>
            <p className="mb-0">LinkedIn Followers</p>
            <a className="text-info" href="www.linkedin.com/in/komil-hassan-a97b66282" target="_blank" rel="noreferrer">View Profile</a>
          </motion.div>

          <motion.a href="https://wa.me/923238559822" className="p-3 rounded-4 text-center" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <FaWhatsapp size={30} color="#25D366" />
            <h5 className="mt-2">Say Hi</h5>
            <p className="mb-0">WhatsApp</p>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
