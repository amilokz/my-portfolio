import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, Volume2, HelpCircle } from 'lucide-react';

export default function VoiceAssistant() {
  const [isListening, setIsListening] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [showHelp, setShowHelp] = useState(false);
  const recognitionRef = useRef(null);

  // Easy Commands Mapping
  const commands = {
    // Navigation Commands
    hero: {
      keywords: ['home', 'go home', 'take me home', 'main page', 'start', 'home page', 'top', 'hero', 'start page', 'back to start', 'main', 'landing', 'welcome', 'گھر', 'ہوم', 'شروع', 'پہلا صفحہ'],
      action: () => scrollTo('hero'),
      message: '🏠 Going to Home',
      speak: 'Going to home page'
    },
    about: {
      keywords: ['about', 'about me', 'tell me about yourself', 'who are you', 'introduction', 'my story', 'background', 'bio', 'information', 'know about you', 'yourself', 'میرے بارے میں', 'تعارف', 'کون ہوں میں', 'میرا تعارف'],
      action: () => scrollTo('about'),
      message: '👤 Opening About section',
      speak: 'Here is my about section'
    },
    skills: {
      keywords: ['skills', 'my skills', 'technical skills', 'what can you do', 'technologies', 'tech stack', 'expertise', 'competencies', 'abilities', 'what you know', 'programming', 'مہارتیں', 'سکلز', 'کیا کر سکتا ہوں', 'میری صلاحیتیں'],
      action: () => scrollTo('skills'),
      message: '💻 Showing Skills section',
      speak: 'Check out my technical skills'
    },
    projects: {
      keywords: ['projects', 'my projects', 'portfolio', 'show projects', 'work samples', 'my work', 'showcase', 'creations', 'applications', 'websites', 'what you built', 'پروجیکٹس', 'میرے پروجیکٹس', 'کام', 'نمونے', 'پورٹ فولیو'],
      action: () => scrollTo('projects'),
      message: '📁 Opening Projects section',
      speak: 'Viewing my projects'
    },
    contact: {
      keywords: ['contact', 'contact me', 'reach me', 'get in touch', 'email', 'message', 'call', 'connect', 'find me', 'how to contact', 'hire', 'رابطہ', 'کونٹیکٹ', 'مجھ سے رابطہ کریں', 'ای میل'],
      action: () => scrollTo('contact'),
      message: '📧 Opening Contact section',
      speak: 'Contact section opened'
    },
    services: {
      keywords: ['services', 'what services', 'offerings', 'what do you offer', 'provide', 'help with', 'can you help', 'work with you', 'خدمات', 'کیا خدمات'],
      action: () => scrollTo('services'),
      message: '⚙️ Showing Services',
      speak: 'Here are my services'
    },

    // Download Commands
    resume: {
      keywords: ['resume', 'download resume', 'my resume', 'cv', 'download cv', 'get resume', 'resume download', 'cv download', 'ریزیومے', 'سی وی', 'ڈاؤن لوڈ'],
      action: () => window.open('/my-portfolio/jobcv.pdf', '_blank'),
      message: '📄 Downloading Resume',
      speak: 'Downloading resume'
    },

    // Social Media Commands
    github: {
      keywords: ['github', 'open github', 'my github', 'source code', 'git hub', 'گٹ ہب', 'گیتھب', 'گٹھب'],
      action: () => window.open('https://github.com/amilokz', '_blank'),
      message: '🐙 Opening GitHub',
      speak: 'Opening GitHub profile'
    },
    linkedin: {
      keywords: ['linkedin', 'open linkedin', 'my linkedin', 'linked in', 'لنکڈ ان', 'لنکڈن'],
      action: () => window.open('https://www.linkedin.com/in/komil-hassan-a97b66282', '_blank'),
      message: '🔗 Opening LinkedIn',
      speak: 'Opening LinkedIn profile'
    },
    twitter: {
      keywords: ['twitter', 'open twitter', 'my twitter', 'x', 'x platform', 'ٹویٹر', 'ایکس'],
      action: () => window.open('https://twitter.com/amilokz', '_blank'),
      message: '🐦 Opening Twitter',
      speak: 'Opening Twitter profile'
    },

    // Utility Commands
    scrollTop: {
      keywords: ['top', 'go up', 'scroll up', 'back to top', 'up', 'move up', 'اوپر', 'واپس اوپر', 'اسکرال اپ'],
      action: () => window.scrollTo({ top: 0, behavior: 'smooth' }),
      message: '⬆️ Going to top',
      speak: 'Going back to top'
    },
    scrollDown: {
      keywords: ['down', 'scroll down', 'go down', 'move down', 'bottom', 'نیچے', 'اسکرال ڈاؤن'],
      action: () => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }),
      message: '⬇️ Going to bottom',
      speak: 'Going to bottom of page'
    },

    // Fun Commands
    hello: {
      keywords: ['hello', 'hi', 'hey', 'greetings', 'hola', 'namaste', 'assalamualaikum', 'سلام', 'السلام علیکم'],
      action: () => speak('Hello! Welcome to my portfolio. How can I help you today?'),
      message: '👋 Hello! Welcome!',
      speak: 'Hello! Welcome to my portfolio. How can I help you today?'
    },
    thanks: {
      keywords: ['thank you', 'thanks', 'good job', 'nice', 'awesome', 'great', 'شکریہ', 'بہت خوب'],
      action: () => speak('You are welcome! Glad you liked it.'),
      message: '🙏 You are welcome!',
      speak: 'You are welcome! Glad you liked it.'
    },
    help: {
      keywords: ['help', 'commands', 'what can I say', 'how to use', 'guide', 'مدد', 'کمانڈز'],
      action: () => setShowHelp(true),
      message: '❓ Showing help',
      speak: 'Opening help menu'
    },
    time: {
      keywords: ['time', 'current time', 'what time', 'tell time', 'وقت', 'کیا وقت ہوا'],
      action: () => {
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-PK', { hour: '2-digit', minute: '2-digit' });
        speak(`The current time is ${timeString}`);
        setFeedbackMessage(`🕐 ${timeString}`);
        setShowFeedback(true);
        setTimeout(() => setShowFeedback(false), 2000);
      },
      message: '🕐 Telling time',
      speak: ''
    },
    date: {
      keywords: ['date', 'today', 'current date', 'what date', 'تاریخ', 'آج کی تاریخ'],
      action: () => {
        const now = new Date();
        const dateString = now.toLocaleDateString('en-PK', { day: 'numeric', month: 'long', year: 'numeric' });
        speak(`Today is ${dateString}`);
        setFeedbackMessage(`📅 ${dateString}`);
        setShowFeedback(true);
        setTimeout(() => setShowFeedback(false), 2000);
      },
      message: '📅 Telling date',
      speak: ''
    }
  };

  const scrollTo = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const speak = (text) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    utterance.pitch = 1;
    window.speechSynthesis.speak(utterance);
  };

  const processCommand = (command) => {
    // Find matching command
    for (const [key, cmd] of Object.entries(commands)) {
      if (cmd.keywords.some(keyword => command.includes(keyword))) {
        cmd.action();
        if (cmd.speak && !cmd.message.includes('Telling')) speak(cmd.speak);
        setFeedbackMessage(cmd.message);
        setShowFeedback(true);
        setTimeout(() => setShowFeedback(false), 2000);
        return;
      }
    }
    
    // No match found
    speak('Command not recognized. Say "Help" to see available commands.');
    setFeedbackMessage('❌ Command not recognized');
    setShowFeedback(true);
    setTimeout(() => setShowFeedback(false), 2000);
  };

  // Initialize Speech Recognition
  useEffect(() => {
    const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
    
    if (!SpeechRecognition) {
      console.log('Speech recognition not supported');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = 'en-PK';
    
    recognitionRef.current = recognition;

    recognition.onstart = () => {
      setFeedbackMessage('🎤 Listening... Speak now');
      setShowFeedback(true);
      setTimeout(() => setShowFeedback(false), 2000);
    };

    recognition.onresult = (event) => {
      const result = event.results[0];
      const command = result[0].transcript.toLowerCase().trim();
      
      setFeedbackMessage(`You said: "${command}"`);
      setShowFeedback(true);
      setTimeout(() => setShowFeedback(false), 2000);
      
      processCommand(command);
    };

    recognition.onerror = (event) => {
      if (event.error !== 'no-speech') {
        setFeedbackMessage(`Error: ${event.error}`);
        setShowFeedback(true);
        setTimeout(() => setShowFeedback(false), 2000);
      }
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }
    };
  }, []);

  const startListening = () => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.start();
        setIsListening(true);
      } catch (error) {
        console.error('Error starting recognition:', error);
      }
    }
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  return (
    <>
      {/* Voice Command Button - RIGHT SIDE */}
      <button
        onClick={() => isListening ? stopListening() : startListening()}
        style={{
          position: 'fixed',
          bottom: '160px',
          right: '30px',
          zIndex: 1000,
          width: '55px',
          height: '55px',
          borderRadius: '50%',
          background: isListening ? '#ef4444' : 'linear-gradient(135deg, #00cfff, #8b5cf6)',
          border: 'none',
          cursor: 'pointer',
          boxShadow: `0 0 25px ${isListening ? 'rgba(239,68,68,0.6)' : 'rgba(0,204,255,0.5)'}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease',
          animation: isListening ? 'pulse 1.5s infinite' : 'none',
        }}
        title="Voice Assistant - Click and speak"
      >
        {isListening ? <MicOff size={26} color="white" /> : <Mic size={26} color="white" />}
      </button>

      {/* Help Button - RIGHT SIDE */}
      <button
        onClick={() => setShowHelp(!showHelp)}
        style={{
          position: 'fixed',
          bottom: '160px',
          right: '95px',
          zIndex: 1000,
          width: '35px',
          height: '35px',
          borderRadius: '50%',
          background: 'rgba(0,0,0,0.7)',
          border: '1px solid rgba(0,204,255,0.4)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s',
        }}
        title="Help - View commands"
      >
        <HelpCircle size={18} color="#00cfff" />
      </button>

      {/* Feedback Popup - RIGHT SIDE */}
      {showFeedback && (
        <div
          style={{
            position: 'fixed',
            bottom: '230px',
            right: '30px',
            zIndex: 1001,
            background: 'rgba(0,0,0,0.95)',
            backdropFilter: 'blur(12px)',
            padding: '10px 20px',
            borderRadius: '25px',
            border: '1px solid rgba(0,204,255,0.4)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            animation: 'fadeInOut 2s ease',
            boxShadow: '0 0 20px rgba(0,204,255,0.2)',
          }}
        >
          <Volume2 size={14} color="#00cfff" />
          <span style={{ color: 'white', fontSize: '0.85rem', fontWeight: '500' }}>{feedbackMessage}</span>
        </div>
      )}

      {/* Help Modal - RIGHT SIDE */}
      {showHelp && (
        <div
          style={{
            position: 'fixed',
            bottom: '230px',
            right: '30px',
            zIndex: 1002,
            background: 'rgba(10,20,35,0.98)',
            backdropFilter: 'blur(20px)',
            borderRadius: '20px',
            border: '1px solid rgba(0,204,255,0.3)',
            padding: '20px',
            width: '280px',
            maxHeight: '400px',
            overflow: 'auto',
            boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
            <h4 style={{ color: '#00cfff', margin: 0 }}>🎤 Voice Commands</h4>
            <button onClick={() => setShowHelp(false)} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '18px' }}>✕</button>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div><span style={{ color: '#00cfff' }}>🏠 Navigation:</span> Home, About, Skills, Projects, Contact, Services</div>
            <div><span style={{ color: '#00cfff' }}>📄 Download:</span> Resume, CV</div>
            <div><span style={{ color: '#00cfff' }}>🔗 Social:</span> GitHub, LinkedIn, Twitter</div>
            <div><span style={{ color: '#00cfff' }}>⚡ Utility:</span> Top, Bottom, Time, Date</div>
            <div><span style={{ color: '#00cfff' }}>💬 Other:</span> Hello, Thanks, Help</div>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '5px', paddingTop: '10px' }}>
              <span style={{ color: '#f59e0b' }}>🌟 Tip:</span> Just say the command naturally!
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(239,68,68,0.7); }
          70% { box-shadow: 0 0 0 10px rgba(239,68,68,0); }
          100% { box-shadow: 0 0 0 0 rgba(239,68,68,0); }
        }
        
        @keyframes fadeInOut {
          0% { opacity: 0; transform: translateY(10px); }
          15% { opacity: 1; transform: translateY(0); }
          85% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-10px); }
        }
      `}</style>
    </>
  );
}