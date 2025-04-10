export default function ExperienceEntry({ role, company, link, date, description, tags = [] }) {
    return (
        <div className="d-flex flex-column flex-md-row mb-5">
            <div className="me-md-4 text-normal small text-md-end" style={{ minWidth: '130px' }}>
                {date}
            </div>

            <div className="flex-grow-1 text-start">
                <h5 className="fw-bold text-light mb-1">
                    {role} ·{" "}
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-link text-decoration-none"
                    >
                        {company} ↗
                    </a>
                </h5>

                {description.map((para, idx) => (
                    <p className="text-normal mb-2" key={idx}>
                        {para}
                    </p>
                ))}

                {tags.length > 0 && (
                    <div className="d-flex gap-2 flex-wrap">
                        {tags.map((tag, idx) => (
                            <span key={idx} className="glass-badge">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
