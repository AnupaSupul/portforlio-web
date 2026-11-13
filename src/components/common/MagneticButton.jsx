import React, { useRef, useState } from 'react';

const checkIsTouch = () => {
  if (typeof window === 'undefined') return false;
  return (
    window.matchMedia('(pointer: coarse)').matches ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
};

const MagneticButton = ({ children, className = '', strength = 0.3, onClick, ...props }) => {
  const btnRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isTouch] = useState(checkIsTouch);

  const handleMouseMove = (e) => {
    if (isTouch || !btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = (e.clientX - centerX) * strength;
    const distanceY = (e.clientY - centerY) * strength;

    setPosition({ x: distanceX, y: distanceY });
  };

  const handleMouseLeave = () => {
    if (isTouch) return;
    setPosition({ x: 0, y: 0 });
  };

  return (
    <button
      ref={btnRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-200 ease-out will-change-transform ${className}`}
      style={{
        transform: !isTouch ? `translate3d(${position.x.toFixed(1)}px, ${position.y.toFixed(1)}px, 0)` : 'none',
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default MagneticButton;
