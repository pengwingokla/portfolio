import { useEffect } from 'react';

export default function CursorSparkle() {
  useEffect(() => {
    const sparkles = [];
    const maxSparkles = 20;

    const createSparkle = (x, y) => {
      const sparkle = document.createElement('div');
      sparkle.className = 'cursor-sparkle';
      
      const size = Math.random() * 3 + 1.5;
      const colors = ['#c2f2e4', '#35c8b4', '#edf7be', '#a4cf4a'];
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      sparkle.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        opacity: 0.7;
        box-shadow: 0 0 ${size * 3}px ${color};
        transform: translate(-50%, -50%);
        animation: sparkleFade 0.8s ease-out forwards;
      `;
      
      document.body.appendChild(sparkle);
      
      sparkles.push(sparkle);
      
      if (sparkles.length > maxSparkles) {
        const oldSparkle = sparkles.shift();
        if (oldSparkle && oldSparkle.parentNode) {
          oldSparkle.parentNode.removeChild(oldSparkle);
        }
      }
      
      setTimeout(() => {
        if (sparkle && sparkle.parentNode) {
          sparkle.parentNode.removeChild(sparkle);
          const index = sparkles.indexOf(sparkle);
          if (index > -1) {
            sparkles.splice(index, 1);
          }
        }
      }, 800);
    };

    const handleMouseMove = (e) => {
      // Only create sparkles occasionally for subtlety (30% chance)
      if (Math.random() > 0.7) {
        createSparkle(e.clientX + (Math.random() - 0.5) * 20, e.clientY + (Math.random() - 0.5) * 20);
      }
    };

    // Add sparkle animation style
    const style = document.createElement('style');
    style.textContent = `
      @keyframes sparkleFade {
        0% {
          opacity: 0.7;
          transform: translate(-50%, -50%) scale(1);
        }
        100% {
          opacity: 0;
          transform: translate(-50%, -50%) scale(0.3) rotate(180deg);
        }
      }
    `;
    document.head.appendChild(style);

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      
      // Clean up sparkles
      sparkles.forEach(sparkle => {
        if (sparkle && sparkle.parentNode) {
          sparkle.parentNode.removeChild(sparkle);
        }
      });
      
      if (style && style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, []);

  return null;
}

