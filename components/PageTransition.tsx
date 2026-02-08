import React, { useEffect, useState } from 'react';

const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // small delay to allow mount before fade-in
    const t = setTimeout(() => setVisible(true), 40);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`
        transition-all duration-500 ease-out
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}
      `}
    >
      {children}
    </div>
  );
};

export default PageTransition;
