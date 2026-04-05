import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Copy, Check, Trash2, Code2, Terminal } from 'lucide-react';

export default function CodePlayground({ onClose }) {
  const [code, setCode] = useState(`// Welcome to Code Playground!
// Write and test your JavaScript code here

// Example: Create a function
function greet(name) {
  return \`Hello, \${name}! Welcome to Code Playground.\`;
}

// Example: Array operations
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);

// Test your code
console.log(greet("Developer"));
console.log("Original numbers:", numbers);
console.log("Doubled numbers:", doubled);
console.log("Code executed successfully!");`);
  
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(null);

  const runCode = () => {
    setIsRunning(true);
    setOutput('');
    setError(null);
    
    setTimeout(() => {
      try {
        // Capture console.log output
        let outputText = '';
        const originalLog = console.log;
        console.log = (...args) => {
          outputText += args.map(arg => 
            typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
          ).join(' ') + '\n';
        };
        
        // Execute the code
        const evalFunc = new Function(code);
        evalFunc();
        
        // Restore console.log
        console.log = originalLog;
        
        setOutput(outputText || '✓ Code executed successfully! (No console output)');
      } catch (err) {
        setError(err.message);
        setOutput('');
      } finally {
        setIsRunning(false);
      }
    }, 100);
  };

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const clearCode = () => {
    setCode('');
    setOutput('');
    setError(null);
  };

  const resetCode = () => {
    setCode(`// Welcome to Code Playground!
// Write and test your JavaScript code here

function greet(name) {
  return \`Hello, \${name}! Welcome to Code Playground.\`;
}

console.log(greet("Developer"));
console.log("Ready to code!");`);
    setOutput('');
    setError(null);
  };

  const examples = [
    {
      name: "Array Methods",
      code: `// Array Methods Examples
const fruits = ['apple', 'banana', 'orange', 'grape'];

// Map - transform array
const upperFruits = fruits.map(f => f.toUpperCase());
console.log('Uppercase fruits:', upperFruits);

// Filter - filter array
const longFruits = fruits.filter(f => f.length > 5);
console.log('Long fruits:', longFruits);

// Reduce - sum example
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log('Sum of numbers:', sum);`
    },
    {
      name: "Async/Await",
      code: `// Async/Await Example
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchData() {
  console.log('Fetching data...');
  await delay(1000);
  console.log('Data fetched successfully!');
  return { id: 1, name: 'Sample Data' };
}

// Execute async function
fetchData().then(data => console.log('Result:', data));`
    },
    {
      name: "Object Manipulation",
      code: `// Object Manipulation
const user = {
  name: 'Komil Hassan',
  role: 'Full Stack Developer',
  skills: ['React', 'Laravel', 'JavaScript']
};

// Destructuring
const { name, role } = user;
console.log(\`\${name} - \${role}\`);

// Spread operator
const updatedUser = { ...user, experience: '3+ years' };
console.log('Updated user:', updatedUser);

// Object methods
console.log('Keys:', Object.keys(user));
console.log('Values:', Object.values(user));`
    }
  ];

  const loadExample = (exampleCode) => {
    setCode(exampleCode);
    setOutput('');
    setError(null);
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
          maxWidth: '1000px',
          width: '90%',
          maxHeight: '90vh',
          background: 'rgba(10, 20, 35, 0.98)',
          backdropFilter: 'blur(20px)',
          borderRadius: '24px',
          border: '1px solid rgba(0, 204, 255, 0.3)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{
          padding: '20px 25px',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'rgba(0,0,0,0.3)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Code2 size={24} color="#00cfff" />
            <h3 style={{ color: '#00cfff', margin: 0 }}>Code Playground</h3>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: 'none',
              borderRadius: '8px',
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
        </div>

        {/* Examples Section */}
        <div style={{
          padding: '15px 25px',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
          display: 'flex',
          gap: '10px',
          flexWrap: 'wrap',
          background: 'rgba(0,0,0,0.2)',
        }}>
          <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.75rem', alignSelf: 'center' }}>Examples:</span>
          {examples.map((ex, i) => (
            <button
              key={i}
              onClick={() => loadExample(ex.code)}
              style={{
                background: 'rgba(0,204,255,0.1)',
                border: '1px solid rgba(0,204,255,0.3)',
                borderRadius: '20px',
                padding: '5px 12px',
                fontSize: '0.7rem',
                color: '#00cfff',
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,204,255,0.2)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0,204,255,0.1)'}
            >
              {ex.name}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div style={{ padding: '25px', overflow: 'auto', flex: 1 }}>
          {/* Code Editor */}
          <div style={{ marginBottom: '20px' }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '10px',
            }}>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  onClick={runCode}
                  disabled={isRunning}
                  style={{
                    padding: '8px 20px',
                    background: 'linear-gradient(135deg, #00cfff, #8b5cf6)',
                    border: 'none',
                    borderRadius: '8px',
                    color: 'white',
                    fontWeight: '600',
                    cursor: isRunning ? 'not-allowed' : 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '0.85rem',
                    opacity: isRunning ? 0.7 : 1,
                  }}
                >
                  {isRunning ? (
                    <div className="spinner" style={{
                      width: '16px',
                      height: '16px',
                      border: '2px solid white',
                      borderTopColor: 'transparent',
                      borderRadius: '50%',
                      animation: 'spin 0.8s linear infinite',
                    }} />
                  ) : (
                    <Play size={16} />
                  )}
                  {isRunning ? 'Running...' : 'Run Code'}
                </button>
                <button
                  onClick={copyCode}
                  style={{
                    padding: '8px 15px',
                    background: 'rgba(255,255,255,0.1)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '8px',
                    color: 'white',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.85rem',
                  }}
                >
                  {copied ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                  {copied ? 'Copied!' : 'Copy'}
                </button>
                <button
                  onClick={clearCode}
                  style={{
                    padding: '8px 15px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    borderRadius: '8px',
                    color: 'rgba(255,255,255,0.7)',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.85rem',
                  }}
                >
                  <Trash2 size={14} />
                  Clear
                </button>
                <button
                  onClick={resetCode}
                  style={{
                    padding: '8px 15px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    borderRadius: '8px',
                    color: 'rgba(255,255,255,0.7)',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.85rem',
                  }}
                >
                  Reset
                </button>
              </div>
              <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.7rem' }}>
                JavaScript ES6+
              </span>
            </div>

            {/* Code Editor Textarea */}
            <div style={{
              background: '#0a0a1a',
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid rgba(0,204,255,0.2)',
            }}>
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                style={{
                  width: '100%',
                  minHeight: '300px',
                  padding: '20px',
                  background: '#0a0a1a',
                  border: 'none',
                  color: '#00cfff',
                  fontFamily: 'Consolas, Monaco, "Courier New", monospace',
                  fontSize: '13px',
                  lineHeight: '1.6',
                  resize: 'vertical',
                  outline: 'none',
                }}
                spellCheck={false}
              />
            </div>
          </div>

          {/* Output Section */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '10px',
            }}>
              <Terminal size={16} color="#00cfff" />
              <h4 style={{ color: 'white', margin: 0, fontSize: '0.9rem' }}>Output</h4>
            </div>
            <div style={{
              background: '#0a0a1a',
              borderRadius: '12px',
              padding: '15px',
              minHeight: '150px',
              maxHeight: '200px',
              overflow: 'auto',
              border: '1px solid rgba(0,204,255,0.2)',
              fontFamily: 'Consolas, Monaco, "Courier New", monospace',
              fontSize: '12px',
            }}>
              {error ? (
                <div style={{ color: '#ef4444' }}>
                  <strong>Error:</strong> {error}
                </div>
              ) : output ? (
                <pre style={{ margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word', color: '#10b981' }}>
                  {output}
                </pre>
              ) : (
                <div style={{ color: 'rgba(255,255,255,0.4)', fontStyle: 'italic' }}>
                  Click "Run Code" to see output
                </div>
              )}
            </div>
          </div>

          {/* Tips */}
          <div style={{
            marginTop: '15px',
            padding: '10px',
            background: 'rgba(0,204,255,0.05)',
            borderRadius: '8px',
            fontSize: '0.7rem',
            color: 'rgba(255,255,255,0.5)',
            textAlign: 'center',
          }}>
            💡 Tip: Use console.log() to see output. Supports modern JavaScript (ES6+)
          </div>
        </div>
      </motion.div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </motion.div>
  );
}