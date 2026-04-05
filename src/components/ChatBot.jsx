import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, Sparkles, Zap, Briefcase, Code2, Mail, ThumbsUp } from 'lucide-react';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      id: 1,
      text: "👋 Hi there! I'm Komil's AI assistant. I can help you with:\n\n• 💻 Technical Skills\n• 🚀 Projects & Portfolio\n• 📅 Experience & Background\n• 📧 Contact Information\n• 💼 Hiring & Collaboration\n\nWhat would you like to know?", 
      isUser: false,
      timestamp: new Date().toLocaleTimeString()
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [suggestions, setSuggestions] = useState([
    "Show me your skills",
    "Tell me about your projects",
    "How much experience do you have?",
    "How can I hire you?"
  ]);
  const messagesEndRef = useRef(null);
  const chatWindowRef = useRef(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Prevent body scroll when chat is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Intelligent responses database
  const knowledgeBase = {
    skills: {
      keywords: ['skill', 'tech', 'technology', 'technologies', 'what can you do', 'expertise', 'competencies', 'programming', 'languages', 'framework', 'tools'],
      response: "💻 **My Technical Skills**\n\n• **Frontend:** React.js, Next.js, Tailwind CSS, Bootstrap, Three.js\n• **Backend:** Laravel, PHP, Node.js, Express\n• **Database:** MySQL, PostgreSQL, MongoDB\n• **Tools:** Git, GitHub, Docker, VS Code\n• **Other:** REST APIs, GraphQL, Firebase\n\nMy strongest expertise is in React and Laravel! 🚀"
    },
    experience: {
      keywords: ['experience', 'years', 'background', 'journey', 'worked', 'career', 'professional', 'how long', 'when did you start'],
      response: "📅 **My Experience**\n\n• **3+ years** of full-stack development experience\n• **20+ projects** completed successfully\n• Worked with startups and individual clients\n• Experience in E-commerce, CMS, Admin Panels, 3D Websites\n• Continuous learning and staying updated with latest tech trends\n\nI started my journey in 2022 and have been growing ever since! 🌱"
    },
    projects: {
      keywords: ['project', 'portfolio', 'built', 'create', 'work', 'showcase', 'applications', 'websites', 'developed', 'made'],
      response: "🚀 **Featured Projects**\n\n• **SERP Portal** - Employee management system\n• **Echo World** - React + Tailwind animated website\n• **FlexiPDF** - PDF manipulation tool\n• **Full Stack React App** - MERN authentication app\n• **Smart Service Booking** - Online booking system\n• **E-Market** - Complete marketplace solution\n\nCheck out the Projects section for live demos! ✨"
    },
    education: {
      keywords: ['education', 'study', 'learn', 'degree', 'university', 'college', 'course', 'certificate', 'certification'],
      response: "🎓 **Education & Certifications**\n\n• **Bachelor's in Information Technology**\n• **React Certified Developer**\n• **Laravel Certified Developer**\n• **PHP & JavaScript Awards**\n• **TryHackMe Cybersecurity Badges**\n\nAlways learning and upgrading skills! 📚"
    },
    contact: {
      keywords: ['contact', 'email', 'reach', 'message', 'get in touch', 'connect', 'call', 'phone', 'whatsapp'],
      response: "📧 **Contact Information**\n\n• **Email:** amilokz1@gmail.com\n• **GitHub:** github.com/amilokz\n• **LinkedIn:** linkedin.com/in/komil-hassan\n• **Location:** Pakistan\n\nFill out the contact form below and I'll get back to you within 24 hours! 💬"
    },
    hiring: {
      keywords: ['hire', 'job', 'work', 'collaboration', 'freelance', 'contract', 'position', 'opportunity', 'available', 'looking for', 'open to work'],
      response: "💼 **Hiring & Collaboration**\n\n✅ Yes, I'm available for:\n• Freelance projects\n• Full-time positions\n• Contract work\n• Collaboration\n\n**How to proceed:**\n1. Click the 'Hire Me' button in navbar\n2. Fill out the contact form\n3. Or email me directly\n\nLet's build something amazing together! 🤝"
    },
    pricing: {
      keywords: ['price', 'cost', 'rate', 'charge', 'budget', 'affordable', 'expensive', 'money', 'payment'],
      response: "💰 **Pricing Information**\n\nPricing depends on project scope and requirements:\n• **Small projects:** $500 - $1500\n• **Medium projects:** $1500 - $5000\n• **Large projects:** Custom quote\n\nContact me for a free consultation and detailed quote! 📊"
    },
    availability: {
      keywords: ['available', 'busy', 'free', 'timeline', 'when', 'schedule', 'deadline'],
      response: "⏰ **Availability**\n\n• Currently available for new projects\n• Response time: Within 24 hours\n• Project delivery: Depends on scope\n• Working hours: Mon-Fri, 9AM-6PM PKT\n\nLet's discuss your timeline! 📅"
    },
    react: {
      keywords: ['react', 'reactjs', 'react.js', 'redux', 'hooks', 'component'],
      response: "⚛️ **React Expertise**\n\n• React Hooks (useState, useEffect, useContext)\n• State Management (Redux, Context API)\n• React Router for navigation\n• Performance optimization\n• Custom hooks development\n• Component lifecycle management\n\nI build fast, responsive, and scalable React applications!"
    },
    laravel: {
      keywords: ['laravel', 'laravel php', 'eloquent', 'artisan', 'mvc'],
      response: "🔧 **Laravel Expertise**\n\n• RESTful API development\n• Eloquent ORM & Relationships\n• Authentication & Authorization\n• Middleware & Service Providers\n• Artisan commands\n• Queue & Job management\n• Blade templating\n\nI create secure and scalable backend solutions!"
    },
    greeting: {
      keywords: ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening', 'namaste', 'assalamualaikum', 'salam'],
      response: "👋 Hello! Welcome to Komil's portfolio!\n\nI'm here to help you learn about:\n• Technical Skills 💻\n• Projects & Portfolio 🚀\n• Experience & Background 📅\n• Hiring & Collaboration 💼\n\nWhat would you like to know? Type your question or click a suggestion below! ✨"
    },
    thanks: {
      keywords: ['thank', 'thanks', 'appreciate', 'grateful', 'good job', 'nice', 'awesome', 'great work'],
      response: "🙏 You're very welcome! I'm glad I could help.\n\nIs there anything else you'd like to know about Komil's skills, projects, or experience? Feel free to ask! 🌟"
    },
    about: {
      keywords: ['who are you', 'about you', 'yourself', 'introduce', 'what are you', 'assistant'],
      response: "🤖 **About Me**\n\nI'm Komil's AI-powered assistant! I'm here to help you learn about Komil's:\n• Technical skills and expertise\n• Professional experience\n• Completed projects\n• Contact information\n• Hiring process\n\nJust ask me anything, and I'll do my best to help! 😊"
    },
    default: {
      response: "🤔 I'm not sure I understood that. Could you please rephrase?\n\nYou can ask me about:\n• Skills / Technologies\n• Experience / Background\n• Projects / Portfolio\n• Contact / Hiring\n• Education / Certifications\n\nOr click one of the suggestions above! 💡"
    }
  };

  const getResponse = (userInput) => {
    const lowerInput = userInput.toLowerCase();
    
    for (const [category, data] of Object.entries(knowledgeBase)) {
      if (data.keywords && data.keywords.some(keyword => lowerInput.includes(keyword))) {
        return data.response;
      }
    }
    
    if (lowerInput.includes('skill') || lowerInput.includes('tech')) return knowledgeBase.skills.response;
    if (lowerInput.includes('project') || lowerInput.includes('portfolio')) return knowledgeBase.projects.response;
    if (lowerInput.includes('experience') || lowerInput.includes('year')) return knowledgeBase.experience.response;
    if (lowerInput.includes('contact') || lowerInput.includes('email')) return knowledgeBase.contact.response;
    if (lowerInput.includes('hire') || lowerInput.includes('job')) return knowledgeBase.hiring.response;
    if (lowerInput.includes('hello') || lowerInput.includes('hi')) return knowledgeBase.greeting.response;
    if (lowerInput.includes('thank')) return knowledgeBase.thanks.response;
    
    return knowledgeBase.default.response;
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMessage = {
      id: Date.now(),
      text: input,
      isUser: true,
      timestamp: new Date().toLocaleTimeString()
    };
    setMessages(prev => [...prev, userMessage]);
    
    setInput("");
    setIsTyping(true);
    
    setTimeout(() => {
      const response = getResponse(userMessage.text);
      const botMessage = {
        id: Date.now() + 1,
        text: response,
        isUser: false,
        timestamp: new Date().toLocaleTimeString()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
      
      if (userMessage.text.toLowerCase().includes('skill')) {
        setSuggestions(["Show me projects", "Tell me about experience", "How to hire you?"]);
      } else if (userMessage.text.toLowerCase().includes('project')) {
        setSuggestions(["What are your skills?", "Contact information", "Your experience"]);
      } else {
        setSuggestions(["Show me your skills", "Tell me about your projects", "How can I hire you?"]);
      }
    }, 800);
  };

  const handleSuggestionClick = (suggestion) => {
    setInput(suggestion);
    setTimeout(() => handleSend(), 100);
  };

  return (
    <>
      {/* Chat Button - Fixed position */}
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.1 }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
        style={{
          position: 'fixed',
          bottom: '100px',
          right: '30px',
          zIndex: 1000,
          width: '55px',
          height: '55px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #00cfff, #8b5cf6)',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 0 30px rgba(0,204,255,0.6)',
        }}
      >
        <MessageCircle size={28} color="white" />
      </motion.button>

      {/* Chat Window - Fixed position with no page shift */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={chatWindowRef}
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            style={{
              position: 'fixed',
              bottom: '170px',
              right: '30px',
              width: '380px',
              height: '550px',
              background: 'rgba(10, 20, 35, 0.98)',
              backdropFilter: 'blur(20px)',
              borderRadius: '24px',
              border: '1px solid rgba(0,204,255,0.3)',
              zIndex: 1001,
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
            }}
          >
            {/* Header */}
            <div style={{
              padding: '16px 20px',
              background: 'linear-gradient(135deg, #00cfff, #8b5cf6)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              cursor: 'move',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Bot size={22} color="white" />
                <div>
                  <span style={{ color: 'white', fontWeight: 'bold' }}>AI Assistant</span>
                  <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.8)' }}>Online • Ready to help</div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                style={{ background: 'rgba(255,255,255,0.2)', border: 'none', borderRadius: '8px', width: '28px', height: '28px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <X size={16} color="white" />
              </button>
            </div>

            {/* Messages */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {messages.map((msg) => (
                <div key={msg.id} style={{ display: 'flex', justifyContent: msg.isUser ? 'flex-end' : 'flex-start' }}>
                  <div style={{
                    maxWidth: '85%',
                    padding: '12px 14px',
                    borderRadius: msg.isUser ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                    background: msg.isUser ? 'linear-gradient(135deg, #00cfff, #8b5cf6)' : 'rgba(255,255,255,0.08)',
                    color: 'white',
                    fontSize: '0.85rem',
                    lineHeight: '1.5',
                    whiteSpace: 'pre-wrap',
                  }}>
                    {msg.text}
                    <div style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.5)', marginTop: '5px' }}>
                      {msg.timestamp}
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Typing Indicator */}
              {isTyping && (
                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                  <div style={{
                    padding: '12px 16px',
                    borderRadius: '18px',
                    background: 'rgba(255,255,255,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}>
                    <div className="typing-dot" style={{ width: '6px', height: '6px', background: '#00cfff', borderRadius: '50%', animation: 'typing 1.4s infinite' }} />
                    <div className="typing-dot" style={{ width: '6px', height: '6px', background: '#00cfff', borderRadius: '50%', animation: 'typing 1.4s infinite 0.2s' }} />
                    <div className="typing-dot" style={{ width: '6px', height: '6px', background: '#00cfff', borderRadius: '50%', animation: 'typing 1.4s infinite 0.4s' }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions */}
            <div style={{
              padding: '12px 15px',
              borderTop: '1px solid rgba(255,255,255,0.05)',
              borderBottom: '1px solid rgba(255,255,255,0.05)',
              display: 'flex',
              gap: '8px',
              flexWrap: 'wrap',
            }}>
              {suggestions.map((suggestion, i) => (
                <button
                  key={i}
                  onClick={() => handleSuggestionClick(suggestion)}
                  style={{
                    background: 'rgba(0,204,255,0.1)',
                    border: '1px solid rgba(0,204,255,0.3)',
                    borderRadius: '20px',
                    padding: '6px 12px',
                    fontSize: '0.7rem',
                    color: '#00cfff',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,204,255,0.2)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0,204,255,0.1)'}
                >
                  {suggestion}
                </button>
              ))}
            </div>

            {/* Input Area */}
            <div style={{ padding: '15px', display: 'flex', gap: '10px', background: 'rgba(0,0,0,0.2)' }}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me anything..."
                style={{
                  flex: 1,
                  padding: '12px 15px',
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(0,204,255,0.3)',
                  borderRadius: '25px',
                  color: 'white',
                  fontSize: '0.85rem',
                  outline: 'none',
                }}
              />
              <button 
                onClick={handleSend} 
                style={{
                  background: 'linear-gradient(135deg, #00cfff, #8b5cf6)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '42px',
                  height: '42px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Send size={18} color="white" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes typing {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
          30% { transform: translateY(-10px); opacity: 1; }
        }
      `}</style>
    </>
  );
}