export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top py-3 ${scrolled ? 'navbar-scrolled' : ''}`} 
         style={{
           background: scrolled ? 'rgba(15, 23, 42, 0.95)' : 'transparent',
           backdropFilter: scrolled ? 'blur(20px)' : 'none',
           borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
           transition: 'all 0.3s ease',
           zIndex: 1000
         }}>
      <div className="container">
        <a className="navbar-brand fw-bold" href="#hero" 
           style={{
             fontSize: '1.8rem',
             background: 'linear-gradient(135deg, #ffffff 0%, #00cfff 50%, #8b5cf6 100%)',
             WebkitBackgroundClip: 'text',
             WebkitTextFillColor: 'transparent',
             backgroundClip: 'text'
           }}>
          Komil<span className="text-blue-600">Dev</span>
        </a>

        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={() => setOpen(!open)}
          aria-controls="navbarNav"
          aria-expanded={open}
          aria-label="Toggle navigation"
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            padding: '0.5rem',
            borderRadius: '8px'
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${open ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-2">
            <li className="nav-item">
              <a className="nav-link" href="#hero" 
                 style={{
                   color: 'rgba(255, 255, 255, 0.9)',
                   fontWeight: '500',
                   padding: '0.5rem 1rem',
                   borderRadius: '8px',
                   transition: 'all 0.3s'
                 }}
                 onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
                 onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about" 
                 style={{
                   color: 'rgba(255, 255, 255, 0.9)',
                   fontWeight: '500',
                   padding: '0.5rem 1rem',
                   borderRadius: '8px',
                   transition: 'all 0.3s'
                 }}
                 onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
                 onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills" 
                 style={{
                   color: 'rgba(255, 255, 255, 0.9)',
                   fontWeight: '500',
                   padding: '0.5rem 1rem',
                   borderRadius: '8px',
                   transition: 'all 0.3s'
                 }}
                 onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
                 onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects" 
                 style={{
                   color: 'rgba(255, 255, 255, 0.9)',
                   fontWeight: '500',
                   padding: '0.5rem 1rem',
                   borderRadius: '8px',
                   transition: 'all 0.3s'
                 }}
                 onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
                 onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" 
                 style={{
                   color: 'rgba(255, 255, 255, 0.9)',
                   fontWeight: '500',
                   padding: '0.5rem 1rem',
                   borderRadius: '8px',
                   transition: 'all 0.3s'
                 }}
                 onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
                 onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
                Contact
              </a>
            </li>
            <li className="nav-item ms-lg-3">
              <a
                href="/my-portfolio/jobcv.pdf"
                download="Komil_Hassan_CV.pdf"
                className="btn px-4 py-2"
                style={{
                  background: 'linear-gradient(135deg, #00cfff, #8b5cf6)',
                  color: 'white',
                  fontWeight: '600',
                  borderRadius: '10px',
                  border: 'none',
                  boxShadow: '0 0 30px rgba(0, 204, 255, 0.3)',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 0 50px rgba(0, 204, 255, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 204, 255, 0.3)';
                }}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}