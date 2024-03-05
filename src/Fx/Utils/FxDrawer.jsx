/* FxDrawer | Sree | 01 mar 2024 */

// import React, { useEffect, useRef } from 'react';
// import './FxDrawer.css';

// const FxDrawer = ({
//   Width = '600px',
//   maskFade = 0.15,
//   closeOnEsc = true,
//   bgColor = 'var(--White)',
//   isOpen,
//   onClose,
//   children,
// }) => {
//   const drawerRef = useRef();

//   useEffect(() => {
//     const handleEscapeKeyPress = (event) => {
//       if (event.key === 'Escape' && closeOnEsc && isOpen) {
//         onClose();
//       }
//     };

//     const handleClickOutside = (event) => {
//       if (closeOnEsc && isOpen && drawerRef.current && !drawerRef.current.contains(event.target)) {
//         onClose();
//       }
//     };

//     if (isOpen) {
//       document.addEventListener('keydown', handleEscapeKeyPress);
//       document.addEventListener('mousedown', handleClickOutside);
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'auto';
//     }

//     return () => {
//       document.removeEventListener('keydown', handleEscapeKeyPress);
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [isOpen, onClose, closeOnEsc]);

//   useEffect(() => {
//     document.body.style.overflow = isOpen ? 'hidden' : 'auto';
//   }, [isOpen]);

//   return (
//     <div className={`fx-drawer ${isOpen ? 'open' : 'closed'}`} ref={drawerRef}>
//       <div className="fxdOverlay"
//         style={{ backgroundColor: `rgba(0, 0, 0, ${isOpen ? maskFade : 0})` }}
//         onClick={closeOnEsc && onClose}
//       />

//       <div
//         className="divContent"
//         style={{ width: Width, backgroundColor: bgColor, transform: `translateX(${isOpen ? '0' : '100%'})` }}
//       >
//         <button onClick={onClose}>Close Drawer</button>
//         {children}
//       </div>
//     </div>
//   );
// };

// export default FxDrawer;


import React, { useEffect, useRef } from 'react';
import './FxDrawer.css';

const FxDrawer = ({
  Width = '600px',
  maskFade = 0.15,
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
      <div className="fxdOverlay"
        style={{ backgroundColor: `rgba(0, 0, 0, ${isOpen ? maskFade : 0})` }}
        onClick={closeOnEsc && onClose}
      />

      <div
        className="divContent"
        style={{ width: Width, backgroundColor: bgColor, transform: `translateX(${isOpen ? '0' : '100%'})` }}
      >
        <button onClick={onClose}>Close Drawer</button>
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
