import React from 'react';
import './FakeMapFooter.css';

const FakeMapFooterElement: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div>&copy; jperlmaps {currentYear}</div>
      </div>
    </div>
  );
};

export const FakeMapFooter = React.memo(FakeMapFooterElement);
