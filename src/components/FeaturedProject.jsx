import fraudProjectImage from '/img/fraudproject.jpeg';

export default function FeaturedProject({ projects = [] }) {
  return (
    <div id="project-cards" style={{
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto',
      marginTop: '8rem',
      fontFamily: "'Work Sans', sans-serif"
    }}>
      {/* Title */}
      <h1 style={{
        color: '#000000',
        fontSize: '4rem',
        fontWeight: 400,
        margin: 0,
        marginBottom: '3rem',
        lineHeight: '1.2',
        fontFamily: "'Work Sans', sans-serif",
        textAlign: 'left'
      }}>
        projects<span style={{ color: '#35c8b4', fontWeight: 400 }}>.</span>
      </h1>

      {/* Two Column Layout */}
      <div style={{
        display: 'flex',
        gap: '2rem',
        alignItems: 'flex-start'
      }}>
        {/* Left Panel - Big Thumbnail */}
        <div style={{
          flex: '1'
        }}>
          <div style={{
            width: '100%',
            height: '100%',
            minHeight: '500px',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
            border: '1px solid rgba(0, 0, 0, 0.05)',
            backgroundColor: '#f9fafb'
          }}>
            <img
              src={fraudProjectImage}
              alt="Project thumbnail"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>

        {/* Right Panel - Feature Highlight */}
        <div style={{
          flex: '1',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingLeft: '2rem',
          textAlign: 'left'
        }}>
          {/* Feature Tag */}
          <div style={{
            display: 'inline-block',
            padding: '0.375rem 0.875rem',
            border: '1px solid rgba(0, 0, 0, 0.2)',
            borderRadius: '20px',
            marginBottom: '2rem',
            width: 'fit-content'
          }}>
            <span style={{
              color: '#000000',
              fontSize: '0.875rem',
              fontWeight: 400,
              lineHeight: '1.5'
            }}>Featured</span>
          </div>

          {/* Main Title */}
          <h2 style={{
            color: '#000000',
            fontSize: '2.5rem',
            fontWeight: 400,
            margin: 0,
            marginBottom: '2rem',
            lineHeight: '1.4',
            textAlign: 'left'
          }}>
            <span style={{ 
              fontWeight: 600,
              letterSpacing: '-0.02em',
              lineHeight: '1.4'
            }}>E-ZGuard</span>
            <span style={{ 
              fontStyle: 'italic',
              fontWeight: 300,
              color: '#6b7280',
              marginLeft: '0.5rem',
              lineHeight: '1.4'
            }}>Because fraud doesn't flag itself.</span>
          </h2>

          {/* Description */}
          <p style={{
            color: '#6b7280',
            fontSize: '1.2rem',
            lineHeight: '1.8',
            margin: 0,
            marginBottom: '2.5rem',
            textAlign: 'left'
          }}>
            Automate fraud detection pipeline processing 5K+ E-ZPass transactions monthly — surfacing 150+ fraudulent cases worth $20K in potential losses, cutting manual review time and human error.
          </p>

          {/* Buttons Container */}
          <div style={{
            display: 'flex',
            gap: '1rem',
            alignItems: 'center',
            flexWrap: 'wrap'
          }}>
            {/* View Demo Button */}
            <button 
              onClick={() => window.open('https://ezpass-app-678646354871.us-central1.run.app/', '_blank', 'noopener,noreferrer')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.875rem 1.5rem',
                backgroundColor: '#000000',
                color: '#ffffff',
                border: 'none',
                borderRadius: '9999px',
                fontSize: '0.95rem',
                fontWeight: 400,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                width: 'fit-content'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#1a1a1a';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#000000';
              }}
            >
              <i className="bi bi-play-fill" style={{
                fontSize: '0.875rem'
              }}></i>
              <span>View Demo</span>
            </button>

            {/* GitHub Button */}
            <button 
              onClick={() => window.open('https://github.com/pengwingokla/E-ZPass-Fraud-Detection', '_blank', 'noopener,noreferrer')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.875rem 1.5rem',
                backgroundColor: 'rgba(0, 0, 0, 0.05)',
                color: '#000000',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                borderRadius: '9999px',
                fontSize: '0.95rem',
                fontWeight: 400,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                width: 'fit-content'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.05)';
                e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.1)';
              }}
            >
              <i className="bi bi-github" style={{
                fontSize: '0.875rem'
              }}></i>
              <span>GitHub</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


