export default function ChatInputNav() {
  return (
    <div style={{
      width: '100%',
      maxWidth: '800px',
      margin: '0 auto',
      marginTop: '4rem',
      fontFamily: "'Work Sans', sans-serif"
    }}>
      {/* Main Card Container with Glassmorphism */}
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        borderRadius: '20px',
        padding: '1.5rem',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        {/* Top Metadata Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingBottom: '0.75rem',
          borderBottom: '1px solid rgba(0, 0, 0, 0.1)'
        }}>
          {/* Left: Sparkle Icon with Label */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <span style={{ fontSize: '0.875rem', color: '#d1d5db' }}>✨</span>
            <span style={{
              fontSize: '0.875rem',
              color: '#4b5563',
              fontWeight: 400,
              letterSpacing: '0.02em'
            }}>Tap a tab, see what I've been up to</span>
          </div>

          {/* Right: Settings Icon with Label */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <span style={{
              fontSize: '0.875rem',
              color: '#4b5563',
              fontWeight: 400,
              letterSpacing: '0.02em'
            }}>Powered by CSS v2.0</span>
            <i className="bi bi-gear" style={{
              fontSize: '0.875rem',
              color: '#6b7280'
            }}></i>
          </div>
        </div>

        {/* White Input Container - includes input and action buttons */}
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          border: '1px solid rgba(0, 0, 0, 0.05)',
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem'
        }}>
          {/* Input Area */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem'
          }}>
            {/* Plus Icon */}
            <div style={{
              width: '24px',
              height: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#6b7280',
              fontSize: '1.1rem',
              flexShrink: 0
            }}>
              <i className="bi bi-plus-lg"></i>
            </div>

            {/* Input Field */}
            <input
              type="text"
              placeholder="Ask me anything..."
              style={{
                flex: 1,
                border: 'none',
                outline: 'none',
                fontSize: '0.95rem',
                color: '#000000',
                backgroundColor: 'transparent',
                fontFamily: "'Work Sans', sans-serif"
              }}
            />

            {/* Right Icons */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              flexShrink: 0
            }}>
              {/* Microphone Icon */}
              <button
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  border: '1px solid rgba(0, 0, 0, 0.1)',
                  backgroundColor: '#ffffff',
                  color: '#9ca3af',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  transition: 'all 0.2s ease',
                  padding: 0
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.1)';
                }}
              >
                <i className="bi bi-mic" style={{ 
                  opacity: 0.6,
                  fontWeight: 300
                }}></i>
              </button>

              {/* Send Icon */}
              <button
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  border: 'none',
                  backgroundColor: '#000000',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  transition: 'all 0.2s ease',
                  padding: 0
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#1a1a1a';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#000000';
                }}
              >
                <i className="bi bi-send" style={{ 
                  color: '#ffffff',
                  opacity: 1
                }}></i>
              </button>
            </div>
          </div>

          {/* Bottom Action Buttons Row */}
          <div style={{
            display: 'flex',
            gap: '0.5rem',
            flexWrap: 'wrap'
          }}>
          {/* Deep Research */}
          <button
            onClick={(e) => {
              e.preventDefault();
              const workTimeline = document.getElementById('work-timeline');
              if (workTimeline) {
                workTimeline.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 0.875rem',
              borderRadius: '20px',
              border: '1px solid rgba(0, 0, 0, 0.1)',
              backgroundColor: '#000000',
              color: '#ffffff',
              fontSize: '0.8rem',
              fontWeight: 400,
              cursor: 'pointer',
              fontFamily: "'Work Sans', sans-serif",
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#1a1a1a';
              e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#000000';
              e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.1)';
            }}
          >
            <i className="bi bi-briefcase" style={{ fontSize: '0.85rem' }}></i>
            <span>Where I've Worked</span>
          </button>

          {/* Make an Image */}
          <button
            onClick={(e) => {
              e.preventDefault();
              const projectCards = document.getElementById('project-cards');
              if (projectCards) {
                projectCards.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 0.875rem',
              borderRadius: '20px',
              border: '1px solid rgba(0, 0, 0, 0.1)',
              backgroundColor: '#000000',
              color: '#ffffff',
              fontSize: '0.8rem',
              fontWeight: 400,
              cursor: 'pointer',
              fontFamily: "'Work Sans', sans-serif",
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#1a1a1a';
              e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#000000';
              e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.1)';
            }}
          >
            <i className="bi bi-lightbulb" style={{ fontSize: '0.85rem' }}></i>
            <span>Things I've Built</span>
          </button>

          {/* Search */}
          <button
            onClick={(e) => {
              e.preventDefault();
              const leadershipSection = document.getElementById('leadership-section');
              if (leadershipSection) {
                leadershipSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 0.875rem',
              borderRadius: '20px',
              border: '1px solid rgba(0, 0, 0, 0.1)',
              backgroundColor: '#000000',
              color: '#ffffff',
              fontSize: '0.8rem',
              fontWeight: 400,
              cursor: 'pointer',
              fontFamily: "'Work Sans', sans-serif",
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#1a1a1a';
              e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#000000';
              e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.1)';
            }}
          >
            <i className="bi bi-people" style={{ fontSize: '0.85rem' }}></i>
            <span>Leadership</span>
          </button>

          {/* Create music */}
          <button
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 0.875rem',
              borderRadius: '20px',
              border: '1px solid rgba(0, 0, 0, 0.1)',
              backgroundColor: '#000000',
              color: '#ffffff',
              fontSize: '0.8rem',
              fontWeight: 400,
              cursor: 'pointer',
              fontFamily: "'Work Sans', sans-serif",
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#1a1a1a';
              e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#000000';
              e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.1)';
            }}
          >
            <i className="bi bi-code-slash" style={{ fontSize: '0.85rem' }}></i>
            <span>Tech Stack</span>
          </button>

          {/* More Options */}
          <button
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              backgroundColor: 'rgba(30, 30, 30, 0.6)',
              color: '#e5e7eb',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontSize: '1rem',
              transition: 'all 0.2s ease',
              padding: 0
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#1a1a1a';
              e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#000000';
              e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.1)';
            }}
          >
            <i className="bi bi-three-dots"></i>
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}

