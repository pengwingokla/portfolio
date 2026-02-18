import profilePic from '/img/propic.jpeg'

export default function NameCard() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '1.5rem',
      marginBottom: '3 rem',
      marginLeft: 'auto',
      marginRight: 'auto',
      fontFamily: "'Work Sans', sans-serif",
      maxWidth: '1200px',
      width: '100%'
    }}>
      {/* Welcome Text */}
      <p style={{
        color: '#000000',
        fontSize: '1.2rem',
        fontWeight: 400,
        margin: 0,
        textAlign: 'left',
        textTransform: 'uppercase',
        letterSpacing: '0.05em'
      }}>
        Hi, welcome to my corner of the internet
      </p>

      {/* Main Content Container */}
      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: '3rem',
        width: '100%'
      }}>
      {/* Text Content - Left Side */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        textAlign: 'left'
      }}>
        <h1 style={{
          color: '#000000',
          fontSize: '4rem',
          fontWeight: 400,
          margin: 0,
          lineHeight: '1.2',
          fontFamily: "'Work Sans', sans-serif"
        }}>
          I'm{' '}
          <span
            className="typewriter"
            style={{
              color: '#35c8b4',
              '--chars': 11
            }}
          >
            Uyen Nguyen
          </span>
        </h1>
        <p style={{
          color: '#000000',
          fontSize: '1.5rem',
          fontWeight: 400,
          margin: 0,
          opacity: 0.9
        }}>
          AI/ML/SWE
        </p>
        <p style={{
          color: '#000000',
          fontSize: '1.2rem',
          fontWeight: 400,
          margin: 0,
          opacity: 0.8,
          lineHeight: '1.6',
          marginTop: '0.5rem'
        }}>
            Building production AI systems that actually work; fueled by curiosity, matcha 🍵, and an unreasonable number of browser tabs. Expertise in RAG, Machine Learning pipelines, agentic workflows, and cloud ML infrastructure at scale.
        </p>
        
        {/* Social Links */}
        <div style={{
          display: 'flex',
          gap: '1.5rem',
          marginTop: '1rem',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          <a 
            href="https://github.com/pengwingokla" 
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#000000',
              textDecoration: 'none',
              fontSize: '1.1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'opacity 0.2s ease'
            }}
            onMouseEnter={(e) => e.target.style.opacity = '0.7'}
            onMouseLeave={(e) => e.target.style.opacity = '1'}
          >
            <i className="bi bi-github" style={{ fontSize: '1.4rem' }}></i>
            <span>Github</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/uyennguyen2001/" 
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#000000',
              textDecoration: 'none',
              fontSize: '1.1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'opacity 0.2s ease'
            }}
            onMouseEnter={(e) => e.target.style.opacity = '0.7'}
            onMouseLeave={(e) => e.target.style.opacity = '1'}
          >
            <i className="bi bi-linkedin" style={{ fontSize: '1.4rem' }}></i>
            <span>LinkedIn</span>
          </a>
          <a 
            href="mailto:chloenguyencodes@gmail.com"
            style={{
              color: '#000000',
              textDecoration: 'none',
              fontSize: '1.1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'opacity 0.2s ease'
            }}
            onMouseEnter={(e) => e.target.style.opacity = '0.7'}
            onMouseLeave={(e) => e.target.style.opacity = '1'}
          >
            <i className="bi bi-envelope-at-fill" style={{ fontSize: '1.4rem' }}></i>
            <span>Email</span>
          </a>
        </div>
      </div>
      
      {/* Profile Picture - Right Side */}
      <div style={{
        flexShrink: 0
      }}>
        <img
          src={profilePic}
          alt="Profile"
          style={{
            width: '150px',
            height: '150px',
            objectFit: 'cover',
            borderRadius: '50%',
          }}
        />
      </div>
      </div>
    </div>
  );
}

