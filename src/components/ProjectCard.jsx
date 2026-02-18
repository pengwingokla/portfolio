export default function ProjectCard({ title, description, tags, link, image, date }) {
    const Wrapper = link ? 'a' : 'div';
  
    return (
      <Wrapper
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-decoration-none"
        style={{
          color: '#000000',
          textDecoration: 'none',
          display: 'block',
          transition: 'transform 0.3s ease',
        }}
      >
        <div
          className="p-4 h-100 rounded-4 project-card"
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
            fontFamily: "'Work Sans', sans-serif",
            color: '#000000',
          }}
        >
          {/* Thumbnail */}
          {image && (
            <div
              style={{
                width: '100%',
                height: '140px',
                borderRadius: '0.75rem',
                overflow: 'hidden',
                marginBottom: '1rem',
              }}
            >
              <img
                src={image}
                alt={`${title} thumbnail`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>
          )}
  
          {/* Date */}
          {date && (
            <p className="small mb-2 text-start" style={{ fontSize: '0.75rem', color: '#000000', fontWeight: 400 }}>
              {date}
            </p>
          )}

          {/* Title */}
          <h5 className="fw-bold mb-1 text-start" style={{ fontSize: '1rem', color: '#000000' }}>
            {title}
          </h5>

          {/* Description */}
          <p className="small mb-3 text-start" style={{ fontSize: '0.85rem', color: '#000000', fontWeight: 400 }}>
            {description}
          </p>
  
          {/* Tags */}
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex gap-2 flex-wrap">
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.05)',
                    color: '#000000',
                    border: '1px solid rgba(0, 0, 0, 0.1)',
                    fontSize: '0.75rem',
                    fontWeight: 400,
                    borderRadius: '0.5rem',
                    padding: '0.3rem 0.6rem',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
  
            {/* Optional: Arrow on the right still */}
            {link && (
              <i className="bi bi-chevron-right" style={{ transition: 'transform 0.2s ease', color: '#000000' }}></i>
            )}
          </div>
        </div>
      </Wrapper>
    );
  }
  