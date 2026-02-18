import { useState } from 'react';

export default function WorkTimeline({ experiences = [] }) {
  const [selectedIndex, setSelectedIndex] = useState(0); // First company selected by default

  const selectedExp = experiences[selectedIndex];

  return (
    <div id="work-timeline" style={{
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto',
      marginTop: '8rem',
      fontFamily: "'Work Sans', sans-serif"
    }}>
      {/* Title and Years of Experience Card */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '3rem',
        flexWrap: 'wrap',
        gap: '2rem'
      }}>
        <h1 style={{
          color: '#000000',
          fontSize: '3.5rem',
          fontWeight: 400,
          margin: 0,
          lineHeight: '1.2',
          fontFamily: "'Work Sans', sans-serif",
          textAlign: 'left'
        }}>
          where i've worked
          <span style={{ color: '#35c8b4', fontWeight: 400 }}>.</span>
        </h1>

        {/* Years of Experience Card */}
        {/* <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '20px',
          padding: '1.5rem 2rem',
          border: '1px solid #e5e7eb',
          display: 'inline-block'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '0.25rem'
          }}>
            <span style={{
              fontSize: '3rem',
              fontWeight: 400,
              color: '#35c8b4',
              lineHeight: '1'
            }}>
              1.5
            </span>
            <span style={{
              fontSize: '1.2rem',
              fontWeight: 400,
              color: '#000000',
              opacity: 0.8
            }}>
              years in AI/ML
            </span>
          </div>
        </div> */}
      </div>

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
              {selectedExp.roles ? (
                // Multiple roles
                selectedExp.roles.map((roleItem, roleIndex) => (
                  <div key={roleIndex} style={{ marginBottom: roleIndex < selectedExp.roles.length - 1 ? '2rem' : '0', textAlign: 'left' }}>
                    <h2 style={{
                      color: '#000000',
                      fontSize: '1.5rem',
                      fontWeight: 400,
                      margin: 0,
                      marginBottom: '0.5rem',
                      lineHeight: '1.4'
                    }}>
                      {roleItem.role}
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
                      <span>{roleItem.date}</span>
                      {roleItem.company && roleItem.link && (
                        <a
                          href={roleItem.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="company-link"
                          style={{
                            color: '#35c8b4',
                            textDecoration: 'none',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.25rem',
                            transition: 'color 0.2s ease',
                            position: 'relative',
                            paddingBottom: '2px'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = '#000000';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = '#35c8b4';
                          }}
                        >
                          <span>@ {roleItem.company}</span>
                        </a>
                      )}
                    </p>
                    {roleItem.description && (
                      <ul style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: 0,
                        textAlign: 'left'
                      }}>
                        {roleItem.description.map((desc, descIndex) => (
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
                ))
              ) : (
                // Single role
                <>
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
                    {selectedExp.company && selectedExp.link && (
                      <a
                        href={selectedExp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="company-link"
                        style={{
                          color: '#35c8b4',
                          textDecoration: 'none',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.25rem',
                          transition: 'color 0.2s ease',
                          position: 'relative',
                          paddingBottom: '2px'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = '#000000';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = '#35c8b4';
                        }}
                      >
                        <span>@ {selectedExp.company}</span>
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
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

