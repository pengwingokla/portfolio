import { useState } from 'react';

export default function LeadershipSection({ experiences = [] }) {
  const [selectedIndex, setSelectedIndex] = useState(0); // First company selected by default

  const selectedExp = experiences[selectedIndex];

  return (
    <div id="leadership-section" style={{
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto',
      marginTop: '8rem',
      fontFamily: "'Work Sans', sans-serif"
    }}>
      {/* Title */}
      <h1 style={{
        color: '#000000',
        fontSize: '3.5rem',
        fontWeight: 400,
        margin: 0,
        marginBottom: '3rem',
        lineHeight: '1.2',
        fontFamily: "'Work Sans', sans-serif",
        textAlign: 'left'
      }}>
        leadership<span style={{ color: '#35c8b4', fontWeight: 400 }}>.</span>
      </h1>

      {/* Two Column Layout */}
      <div style={{
        display: 'flex',
        gap: '3rem',
        alignItems: 'flex-start'
      }}>
        {/* Left Column - Company List */}
        <div style={{
          minWidth: '200px',
          flexShrink: 0
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
          }}>
            {experiences.map((exp, index) => {
              const isSelected = selectedIndex === index;
              return (
                <button
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    padding: '0.75rem 1rem',
                    textAlign: 'left',
                    cursor: 'pointer',
                    position: 'relative',
                    borderRadius: '8px',
                    transition: 'all 0.2s ease',
                    backgroundColor: isSelected ? 'rgba(194, 242, 228, 0.1)' : 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.03)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  {/* Selected indicator bar */}
                  {isSelected && (
                    <div style={{
                      position: 'absolute',
                      left: 0,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '3px',
                      height: '60%',
                      background: 'linear-gradient(180deg, #c2f2e4 0%, #35c8b4 50%, #a4cf4a 100%)',
                      borderRadius: '0 2px 2px 0'
                    }}></div>
                  )}
                  <span style={{
                    color: isSelected 
                      ? '#000000' 
                      : '#6b7280',
                    fontSize: '0.95rem',
                    fontWeight: isSelected ? 500 : 400,
                    paddingLeft: isSelected ? '0.5rem' : '0',
                    transition: 'all 0.2s ease'
                  }}>
                    {exp.company}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column - Selected Company Details */}
        {selectedExp && (
          <div style={{
            flex: 1,
            minWidth: 0
          }}>
            {/* Role and Company */}
            <div style={{ marginBottom: '1rem', textAlign: 'left' }}>
              <h2 style={{
                color: '#000000',
                fontSize: '1.5rem',
                fontWeight: 400,
                margin: 0,
                marginBottom: '0.5rem',
                lineHeight: '1.4'
              }}>
                {selectedExp.role}
              </h2>
              <p style={{
                color: '#6b7280',
                fontSize: '1rem',
                fontWeight: 300,
                margin: 0,
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                flexWrap: 'wrap'
              }}>
                <span>{selectedExp.date}</span>
                {selectedExp.company && (
                  <a
                    href={selectedExp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: '#35c8b4',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                      transition: 'color 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#000000';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#35c8b4';
                    }}
                  >
                    <span>@ {selectedExp.company}</span>
                    <i className="bi bi-arrow-up-right" style={{ fontSize: '0.875rem' }}></i>
                  </a>
                )}
              </p>
              {selectedExp.description && (
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  textAlign: 'left'
                }}>
                  {selectedExp.description.map((desc, descIndex) => (
                    <li key={descIndex} style={{
                      color: '#000000',
                      fontSize: '1rem',
                      fontWeight: 300,
                      lineHeight: '1.6',
                      marginBottom: '0.75rem',
                      textAlign: 'left'
                    }}>
                      {desc}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

