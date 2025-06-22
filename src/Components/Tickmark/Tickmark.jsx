// TickMark.js
import React, { useEffect, useState } from 'react';
import './TickMark.css';

const TickMark = ({ onAnimationEnd }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onAnimationEnd) onAnimationEnd();
    }, 2000); // Duration of the tick animation

    return () => clearTimeout(timer);
  }, [onAnimationEnd]);

  if (!visible) return null;

  return (
    <div className="tick-container">
      <div className="tick-animation">
        <svg
          width="60"
          height="60"
          viewBox="0 0 52 52"
          className="checkmark"
        >
          <circle
            className="checkmark-circle"
            cx="26"
            cy="26"
            r="25"
            fill="none"
          />
          <path
            className="checkmark-check"
            fill="none"
            d="M14 27l7 7 16-16"
          />
        </svg>
      </div>
    </div>
  );
};

export default TickMark;
