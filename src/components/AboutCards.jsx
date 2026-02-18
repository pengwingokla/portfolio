export default function AboutCards() {

  const facts = [
    {
      number: "01",
      text: "I used to work as a bartender despite the fact that I cannot drink.",
      emoji: "🥃"
    },
    {
      number: "02",
      text: "I can speak 3 languages fluently.",
      emoji: "🌍"
    },
    {
      number: "03",
      text: "I've traveled to over 20 countries.",
      emoji: "✈️"
    },
    {
      number: "04",
      text: "I'm a certified scuba diver.",
      emoji: "🤿"
    }
  ];

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '2rem 2rem 3rem 2rem',
      fontFamily: "'Work Sans', sans-serif",
      maxWidth: '600px',
      margin: '0 auto',
      marginTop: '3rem',
      marginBottom: '4rem'
    }}>
      {/* Title */}
      <h2 style={{
        fontSize: '2.5rem',
        fontWeight: 700,
        color: '#ffffff',
        margin: 0,
        marginBottom: '0.5 rem', 
        textAlign: 'center',
        lineHeight: '1.2'
      }}>
        5 fun facts about me
      </h2>
      
      {/* Subtitle */}
      <p style={{
        fontSize: '1rem',
        color: '#ffffff',
        opacity: 0.9,
        margin: 0,
        marginBottom: '1 rem',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem'
      }}>
        One of them is a lie. <span style={{ fontSize: '1.2rem' }}>🤡</span>
      </p>

      {/* Card Stack Container */}
      <div style={{
        position: 'relative',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop: '0.5rem'
      }}>
        {/* Card Stack */}
        <div style={{
          position: 'relative',
          width: '100%',
          maxWidth: '400px',
          minHeight: '250px',
          marginBottom: '2rem'
        }}>
          {facts.slice(0, 5).map((fact, index) => {
            const width = 100 - (index * 3) + '%';
            const offsetX = index * 8;
            const offsetY = index * 8;
            const rotation = index * 5;
            const opacity = 1 - (index * 0.15);
            const zIndex = 5 - index;
            const shadowIntensity = 0.4 - (index * 0.05);
            const shadow = `0 ${4 + index * 2}px ${16 + index * 8}px rgba(0, 0, 0, ${shadowIntensity})`;
            
            return (
            <div
              key={index}
              style={{
                position: 'absolute',
                top: offsetY,
                left: '50%',
                transform: `translateX(calc(-50% + ${offsetX}px)) rotate(${rotation}deg)`,
                transformOrigin: 'center center',
                width: width,
                backgroundColor: `rgba(255, 255, 255, ${0.1 * opacity})`,
                backdropFilter: 'blur(20px) saturate(180%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                borderRadius: '16px',
                padding: '2rem',
                boxShadow: shadow,
                zIndex: zIndex,
                transition: 'all 0.3s ease',
                border: `1px solid rgba(255, 255, 255, ${0.2 * opacity})`,
                opacity: opacity
              }}
            >
              {/* Number */}
              <div style={{
                fontSize: '0.875rem',
                fontWeight: 600,
                color: 'rgba(255, 255, 255, 0.7)',
                marginBottom: '1rem'
              }}>
                {fact.number}
              </div>
              
              {/* Text */}
              <p style={{
                fontSize: '1.125rem',
                color: '#ffffff',
                margin: 0,
                marginBottom: '1rem',
                lineHeight: '1.6'
              }}>
                {fact.text}
              </p>
              
              {/* Emoji */}
              <div style={{
                fontSize: '2rem',
                textAlign: 'left'
              }}>
                {fact.emoji}
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

