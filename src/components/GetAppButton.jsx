import React, { useState } from 'react';
import { Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';
import DownloadApp from './DownloadApp';

export default function GetAppButton() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <motion.button
        onClick={() => setShowModal(true)}
        className="d-flex align-items-center justify-content-center px-4 px-md-5 py-3"
        style={{
          background: "rgba(0, 0, 0, 0.5)",
          color: "#ffffff",
          borderRadius: "15px",
          textDecoration: "none",
          fontWeight: "600",
          fontSize: "1rem",
          border: "1px solid rgba(0, 204, 255, 0.4)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 0 40px rgba(0, 204, 255, 0.2)",
          minWidth: "180px",
          transition: "all 0.3s ease",
          cursor: "pointer"
        }}
        whileHover={{
          scale: 1.05,
          background: "rgba(0, 204, 255, 0.25)",
          boxShadow: "0 0 60px rgba(0, 204, 255, 0.4)"
        }}
        whileTap={{ scale: 0.98 }}
      >
        <Smartphone size={20} className="me-2" />
        Get App
      </motion.button>
      
      {showModal && <DownloadApp onClose={() => setShowModal(false)} />}
    </>
  );
}