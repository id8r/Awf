/* FlexDrawer | Sree | 01 mar 2024 */

import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM for creating portals
import './FlexDrawer.css';

const FlexDrawer = ({
  trayWidth = '50%', // '600px',
  maskFade = 0.15,
  openSpeed = '0.15s',
  closeOnEsc = true,
  bgColor = 'var(--White)',
  isOpen,
  onClose,
  anchor = 'right',
  children,
}) => {
  const drawerRef = useRef();

  useEffect(() => {
    const handleEscapeKeyPress = (event) => {
      if (closeOnEsc && isOpen && event.key === 'Escape') {
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
      document.removeEventListener('keydown', handleEscapeKeyPress);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKeyPress);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose, closeOnEsc]);

  const handleOverlayClick = () => {
    onClose();
  };

  // Determine the transform value based on the anchor
  const transformValue = isOpen ? '0' : anchor === 'left' ? '-100%' : '100%';

  // Determine the box-shadow based on the anchor
  const boxShadow = isOpen ? (anchor === 'left' ? '4px' : '-4px') + ' 0 8px rgba(0, 0, 0, 0.25)' : 'none';

  // Adjust left and right for the anchor
  const leftValue = anchor === 'left' ? 0 : 'auto';
  const rightValue = anchor === 'right' ? 0 : 'auto';

  // Create a portal for rendering the fx-drawer directly to the document body
  return ReactDOM.createPortal(
    <div className={`fx-drawer ${isOpen ? 'open' : 'closed'}`} ref={drawerRef}>
      <div
        className="fxdOverlay"
        style={{
          backgroundColor: `rgba(0, 0, 0, ${isOpen ? maskFade : 0})`,
          transition: `opacity ${openSpeed} ease`,
        }}
        onClick={closeOnEsc ? handleOverlayClick : undefined}
      />

      <div
        className="drawerContent"
        style={{
          width: trayWidth,
          backgroundColor: bgColor,
          transform: `translateX(${transformValue})`, // Use transformValue here
          boxShadow: boxShadow, // Use boxShadow here
          transition: `transform ${openSpeed} ease, box-shadow ${openSpeed} ease`,
          left: leftValue,
          right: rightValue,
        }}
      >
        {React.Children.map(children, (child) =>
          React.isValidElement(child) ? (
            React.cloneElement(child, { onClose })
          ) : (
            child
          )
        )}
      </div>
    </div>,
    document.body // Render the portal to the document body
  );
};

export default FlexDrawer;