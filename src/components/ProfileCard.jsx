export default function ProfileCard() {
    return (
        <div className="glass-card text-center px-4 pt-4 pb-4">
            {/* Circular Glass Avatar Border */}
            <div
                style={{
                    width: '140px',
                    height: '140px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '0 auto',
                }}
            >
                <img
                    // src="src/img/propic.jpg"
                    alt="Profile"
                    style={{
                        width: '100px',
                        height: '100px',
                        objectFit: 'cover',
                        borderRadius: '50%',
                        border: '4px solid white',
                    }}
                />
            </div>


            {/* Name and Title */}
            <h5 className="fw-bold mt-3 mb-1">Uyen Nguyen</h5>
            <p className="text-secondary mb-1">Data Science Graduate Researcher</p>

            {/* Social Icons */}
            <div className="d-flex justify-content-center gap-3 mb-3">
                <a href="https://github.com/pengwingokla" className="text-secondary fs-5"><i className="bi bi-github"></i></a>
                <a href="https://www.linkedin.com/in/uyennguyen2001/" className="text-secondary fs-5"><i className="bi bi-linkedin"></i></a>
                <a href="mailto:chloenguyencodes@gmail.com" className="text-secondary fs-5"><i className="bi bi-envelope-at-fill"></i></a>
            </div>

            {/* Location & School */}
            <div className="text-start">
                {/* Location */}
                <p className="mb-1 d-flex align-items-start">
                    <i className="bi bi-geo-alt-fill me-2 text-light"></i>
                    <span className="text-light">Bloomfield, NJ</span>
                </p>

                {/* Education */}
                <p className="mb-1 mt-2 d-flex align-items-start">
                    <i className="bi bi-mortarboard-fill me-2 text-light"></i>
                    <span className="text-light">
                        M.S. in Data Science<br />
                        New Jersey Institute of Technology
                    </span>
                </p>
            </div>
        </div>
    );
}
