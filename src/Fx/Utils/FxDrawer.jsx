/* FxDrawer | Sree | 01 mar 2024 */

import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM for creating portals
import './FxDrawer.css';

const FxDrawer = ({
  trayWidth = '600px',
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
      onClose();
    }
  };

  // Create a portal for rendering the fx-drawer directly to the document body
  return ReactDOM.createPortal(
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
          width: trayWidth,
          backgroundColor: bgColor,
          transform: `translateX(${isOpen ? '0' : '100%'})`,
          boxShadow: isOpen ? '0 0 10px rgba(0, 0, 0, 0.5)' : 'none',
          transition: `transform ${openSpeed} ease, box-shadow ${openSpeed} ease`
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
    </div>,
    document.body // Render the portal to the document body
  );
};

export default FxDrawer;