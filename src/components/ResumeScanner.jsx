import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, X, Check, AlertCircle, Sparkles, FileText, Trash2 } from 'lucide-react';

export default function ResumeScanner({ onClose }) {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState(null);

  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      setFileName(uploadedFile.name);
      scanResume(uploadedFile);
    }
  };

  const scanResume = (file) => {
    setScanning(true);
    setTimeout(() => {
      const mockResult = {
        score: Math.floor(Math.random() * 20) + 75,
        strengths: [
          'Strong technical skills demonstrated',
          'Good project experience',
          'Clear and professional formatting',
          'Relevant keywords included'
        ],
        improvements: [
          'Add more quantifiable achievements',
          'Include links to GitHub/LinkedIn',
          'Add a professional summary section'
        ],
        keywords: ['React', 'Laravel', 'JavaScript', 'PHP', 'MySQL', 'API'],
        atsScore: Math.floor(Math.random() * 15) + 80
      };
      setResult(mockResult);
      setScanning(false);
    }, 2000);
  };

  const resetScanner = () => {
    setFile(null);
    setFileName('');
    setResult(null);
    setScanning(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0,0,0,0.9)',
        backdropFilter: 'blur(10px)',
        zIndex: 10001,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 50 }}
        style={{
          maxWidth: '550px',
          width: '90%',
          maxHeight: '85vh',
          overflow: 'auto',
          background: 'rgba(10, 20, 35, 0.98)',
          backdropFilter: 'blur(20px)',
          borderRadius: '24px',
          border: '1px solid rgba(0, 204, 255, 0.3)',
          padding: '30px',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '15px',
            right: '15px',
            background: 'rgba(255,255,255,0.1)',
            border: 'none',
            borderRadius: '50%',
            width: '35px',
            height: '35px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
        >
          <X size={18} color="white" />
        </button>

        {/* Header */}
        <h3 style={{ color: '#00cfff', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Sparkles size={24} /> AI Resume Scanner
        </h3>

        {/* File Info (if uploaded) */}
        {file && !scanning && !result && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'rgba(0,204,255,0.1)',
            padding: '10px 15px',
            borderRadius: '12px',
            marginBottom: '20px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <FileText size={18} color="#00cfff" />
              <span style={{ color: 'white', fontSize: '0.8rem' }}>{fileName}</span>
            </div>
            <button onClick={resetScanner} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
              <Trash2 size={16} color="#ef4444" />
            </button>
          </div>
        )}

        {/* Upload Area */}
        {!result && !scanning && !file && (
          <div
            style={{
              border: '2px dashed rgba(0,204,255,0.3)',
              borderRadius: '16px',
              padding: '40px',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = '#00cfff'}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(0,204,255,0.3)'}
          >
            <input
              type="file"
              accept=".pdf,.docx,.txt"
              onChange={handleFileUpload}
              style={{ display: 'none' }}
              id="resume-upload"
            />
            <label htmlFor="resume-upload" style={{ cursor: 'pointer' }}>
              <Upload size={48} color="#00cfff" />
              <p style={{ color: 'white', marginTop: '15px' }}>Click to upload your resume</p>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.7rem' }}>PDF, DOCX, or TXT format</p>
            </label>
          </div>
        )}

        {/* Scanning Animation */}
        {scanning && (
          <div style={{ textAlign: 'center', padding: '40px' }}>
            <div className="spinner" style={{
              width: '50px',
              height: '50px',
              border: '3px solid rgba(0,204,255,0.2)',
              borderTopColor: '#00cfff',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
              margin: '0 auto 20px',
            }} />
            <p style={{ color: 'white' }}>AI analyzing your resume...</p>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.7rem', marginTop: '10px' }}>
              This may take a few seconds
            </p>
          </div>
        )}

        {/* Results */}
        {result && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {/* Score Card */}
            <div style={{
              background: 'rgba(0,204,255,0.1)',
              borderRadius: '16px',
              padding: '20px',
              textAlign: 'center',
              marginBottom: '20px',
            }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#00cfff' }}>{result.score}%</div>
              <div style={{ color: 'white' }}>Overall Score</div>
              <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', marginTop: '5px' }}>
                ATS Compatibility: {result.atsScore}%
              </div>
            </div>

            {/* Strengths */}
            <h4 style={{ color: '#10b981', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Check size={16} /> Strengths
            </h4>
            {result.strengths.map((s, i) => (
              <p key={i} style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem', marginBottom: '8px', marginLeft: '20px' }}>
                • {s}
              </p>
            ))}

            {/* Suggestions */}
            <h4 style={{ color: '#f59e0b', marginBottom: '10px', marginTop: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <AlertCircle size={16} /> Suggestions
            </h4>
            {result.improvements.map((s, i) => (
              <p key={i} style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem', marginBottom: '8px', marginLeft: '20px' }}>
                • {s}
              </p>
            ))}

            {/* Keywords */}
            <h4 style={{ color: '#00cfff', marginBottom: '10px', marginTop: '20px' }}>🔑 Keywords Found</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
              {result.keywords.map(k => (
                <span key={k} style={{
                  background: 'rgba(0,204,255,0.15)',
                  padding: '5px 12px',
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  color: '#00cfff',
                }}>{k}</span>
              ))}
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
              <button
                onClick={resetScanner}
                style={{
                  flex: 1,
                  padding: '12px',
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(0,204,255,0.3)',
                  borderRadius: '12px',
                  color: 'white',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
              >
                Scan Another Resume
              </button>
              <button
                onClick={onClose}
                style={{
                  flex: 1,
                  padding: '12px',
                  background: 'linear-gradient(135deg, #00cfff, #8b5cf6)',
                  border: 'none',
                  borderRadius: '12px',
                  color: 'white',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                }}
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </motion.div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </motion.div>
  );
}