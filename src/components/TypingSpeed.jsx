import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trophy, RefreshCw, Clock, Target } from 'lucide-react';

const sentences = [
  "The quick brown fox jumps over the lazy dog.",
  "React is a JavaScript library for building user interfaces.",
  "Full stack development requires both frontend and backend skills.",
  "Coding is fun and creative!",
  "Practice makes perfect when learning to code.",
  "TypeScript adds static typing to JavaScript.",
  "Tailwind CSS makes styling fast and efficient.",
];

export default function TypingSpeed({ onClose }) {
  const [sentence, setSentence] = useState(sentences[0]);
  const [userInput, setUserInput] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [wpm, setWpm] = useState(null);
  const [accuracy, setAccuracy] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);

  const startTest = () => {
    setSentence(sentences[Math.floor(Math.random() * sentences.length)]);
    setUserInput('');
    setStartTime(Date.now());
    setIsActive(true);
    setWpm(null);
    setAccuracy(null);
    setTimeElapsed(0);
  };

  const handleInput = (e) => {
    const value = e.target.value;
    setUserInput(value);
    
    // Calculate time elapsed
    if (startTime) {
      const elapsed = (Date.now() - startTime) / 1000;
      setTimeElapsed(Math.round(elapsed));
    }
    
    if (value === sentence) {
      const endTime = Date.now();
      const timeInMinutes = (endTime - startTime) / 60000;
      const words = sentence.split(' ').length;
      const calculatedWpm = Math.round(words / timeInMinutes);
      setWpm(calculatedWpm);
      
      let correct = 0;
      for (let i = 0; i < value.length; i++) {
        if (value[i] === sentence[i]) correct++;
      }
      setAccuracy(Math.round((correct / sentence.length) * 100));
      setIsActive(false);
    }
  };

  const getCharacterColor = (inputChar, sentenceChar, index) => {
    if (index >= inputChar.length) return 'rgba(255,255,255,0.3)';
    if (inputChar[index] === sentenceChar[index]) return '#10b981';
    return '#ef4444';
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
          maxWidth: '650px',
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
          <Trophy size={24} /> Typing Speed Test
        </h3>
        
        {!startTime ? (
          <motion.button
            onClick={startTest}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{
              background: 'linear-gradient(135deg, #00cfff, #8b5cf6)',
              border: 'none',
              padding: '18px 30px',
              borderRadius: '16px',
              color: 'white',
              cursor: 'pointer',
              width: '100%',
              fontSize: '1.1rem',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
            }}
          >
            <RefreshCw size={20} />
            Start Typing Test
          </motion.button>
        ) : (
          <>
            {/* Stats */}
            <div style={{
              display: 'flex',
              gap: '15px',
              marginBottom: '20px',
              padding: '15px',
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '16px',
            }}>
              <div style={{ flex: 1, textAlign: 'center' }}>
                <Clock size={18} color="#00cfff" style={{ marginBottom: '5px' }} />
                <div style={{ color: 'white', fontSize: '1.2rem', fontWeight: 'bold' }}>{timeElapsed}s</div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.7rem' }}>Time</div>
              </div>
              <div style={{ flex: 1, textAlign: 'center' }}>
                <Target size={18} color="#f59e0b" style={{ marginBottom: '5px' }} />
                <div style={{ color: 'white', fontSize: '1.2rem', fontWeight: 'bold' }}>
                  {Math.round((userInput.length / sentence.length) * 100)}%
                </div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.7rem' }}>Progress</div>
              </div>
            </div>

            {/* Sentence to type */}
            <div style={{
              background: 'rgba(255,255,255,0.08)',
              padding: '20px',
              borderRadius: '16px',
              marginBottom: '20px',
              fontFamily: 'monospace',
              fontSize: '1rem',
              lineHeight: '1.5',
            }}>
              {sentence.split('').map((char, index) => (
                <span
                  key={index}
                  style={{
                    color: getCharacterColor(userInput, sentence, index),
                    transition: 'color 0.1s',
                  }}
                >
                  {char}
                </span>
              ))}
            </div>
            
            {/* Textarea */}
            <textarea
              value={userInput}
              onChange={handleInput}
              disabled={!isActive}
              placeholder="Type the above sentence here..."
              style={{
                width: '100%',
                padding: '15px',
                background: 'rgba(255,255,255,0.05)',
                border: `2px solid ${isActive ? '#00cfff' : 'rgba(0,204,255,0.3)'}`,
                borderRadius: '16px',
                color: 'white',
                fontFamily: 'monospace',
                fontSize: '1rem',
                minHeight: '120px',
                resize: 'vertical',
                outline: 'none',
                transition: 'all 0.3s',
              }}
            />
            
            {/* Results */}
            {wpm && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ marginTop: '20px', textAlign: 'center' }}
              >
                <div style={{
                  background: 'rgba(0,204,255,0.1)',
                  borderRadius: '16px',
                  padding: '20px',
                }}>
                  <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#00cfff' }}>{wpm} WPM</div>
                  <div style={{ color: 'white', marginTop: '5px' }}>Accuracy: {accuracy}%</div>
                  <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                    <button
                      onClick={startTest}
                      style={{
                        flex: 1,
                        padding: '12px',
                        background: 'rgba(255,255,255,0.1)',
                        border: '1px solid rgba(0,204,255,0.3)',
                        borderRadius: '12px',
                        color: 'white',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                      }}
                    >
                      <RefreshCw size={16} />
                      Try Again
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
                      }}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </>
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