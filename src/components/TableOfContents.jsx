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
      style={{
        paddingTop: '0.5rem',
        paddingBottom: '0.5rem'
      }}
    >
      <h6 className="mb-3 fw-bold text-start" style={{ fontSize: '0.75rem', color: '#000000', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
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
                  color: '#000000',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  border: 'none',
                  background: 'none',
                  textAlign: 'left'
                }}
                onMouseOver={(e) => e.target.style.color = '#35c8b4'}
                onMouseOut={(e) => e.target.style.color = '#000000'}
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
                        color: '#000000',
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
                      onMouseOver={(e) => e.target.style.color = '#35c8b4'}
                      onMouseOut={(e) => e.target.style.color = '#000000'}
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