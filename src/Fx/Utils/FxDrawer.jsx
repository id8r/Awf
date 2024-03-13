/* FxDrawer | Sree | 01 mar 2024 */

import React, { useEffect, useRef } from 'react';
import './FxDrawer.css';

const FxDrawer = ({
  bgSpread = '600px',
  maskFade = 0.15,
  openSpeed = '0.15s',
  closeOnEsc = true,
  bgColor = 'var(--White)',
  isOpen,
  onClose,
  children,
}) => {

  const drawerRef = useRef();

  useEffect(() => {
    const handleEscapeKeyPress = (event) => {
      if (event.key === 'Escape' && closeOnEsc && isOpen) {
        onClose();
      }
    };

    const handleClickOutside = (event) => {
      if (closeOnEsc && isOpen && drawerRef.current && !drawerRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKeyPress);
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKeyPress);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose, closeOnEsc]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  const handleContentButtonClick = (e) => {
    if (e.target.getAttribute('closeDrawer') === "true") {
      onClose(); // Close the drawer when button inside content is clicked and has closeDrawer="true"
    }
  };

  return (
    <div className={`fx-drawer ${isOpen ? 'open' : 'closed'}`} ref={drawerRef}>
      <div
        className="fxdOverlay"
        style={{
          backgroundColor: `rgba(0, 0, 0, ${isOpen ? maskFade : 0})`,
          transition: `opacity ${openSpeed} ease`
        }}
        onClick={closeOnEsc && onClose}
      />

      <div
        className="drawerContent"
        style={{
          width: bgSpread,
          backgroundColor: bgColor,
          transform: `translateX(${isOpen ? '0' : '100%'})`,
          transition: `transform ${openSpeed} ease`
        }}
      >
        {React.Children.map(children, child => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              onClick: handleContentButtonClick
            });
          }
          return child;
        })}
      </div>
    </div>
  );
};

export default FxDrawer;