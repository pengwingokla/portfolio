export default function TableOfContents({ activeTab, projectCategories }) {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const experienceSections = [
    { id: 'experience-section', name: 'Experience' },
    { id: 'leadership-section', name: 'Leadership' }
  ];

  if (activeTab !== 'projects') {
    return null;
  }

  return (
    <div 
      className="d-none d-lg-block"
      style={{
        position: 'fixed',
        top: '50%',
        right: '100px',
        transform: 'translateY(-50%)',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        paddingTop: '0.5rem',
        paddingBottom: '0.5rem',
        zIndex: 1000,
        maxHeight: '70vh',
        overflowY: 'auto',
        minWidth: '200px',
        maxWidth: '300px'
      }}
    >
      <h6 className="mb-3 fw-bold text-start" style={{ fontSize: '0.75rem', color: '#999999', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
        Contents
      </h6>


      {activeTab === 'projects' && (
        <div>
          {Object.entries(projectCategories).map(([category, projects]) => (
            <div key={category} className="mb-3">
              <button
                onClick={() => scrollToSection(`category-${category.replace(/\s+/g, '-').toLowerCase()}`)}
                className="btn btn-link text-start p-0 w-100 fw-bold"
                style={{
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  border: 'none',
                  background: 'none',
                  textAlign: 'left'
                }}
                onMouseOver={(e) => e.target.style.color = '#3bb8ff'}
                onMouseOut={(e) => e.target.style.color = '#ffffff'}
              >
                {category}
              </button>
              <div className="ms-2 mt-2">
                {projects.map((project, index) => (
                  <div key={index} className="mb-2">
                    <button
                      onClick={() => scrollToSection(`project-${category.replace(/\s+/g, '-').toLowerCase()}-${index}`)}
                      className="btn btn-link text-start p-0 w-100"
                      style={{
                        color: '#b4b4b4',
                        textDecoration: 'none',
                        fontSize: '0.80rem',
                        border: 'none',
                        background: 'none',
                        textAlign: 'left',
                        lineHeight: '1.5',
                        whiteSpace: 'normal',
                        wordWrap: 'break-word',
                        overflowWrap: 'break-word',
                        hyphens: 'auto'
                      }}
                      onMouseOver={(e) => e.target.style.color = '#3bb8ff'}
                      onMouseOut={(e) => e.target.style.color = '#b4b4b4'}
                    >
{project.title}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}