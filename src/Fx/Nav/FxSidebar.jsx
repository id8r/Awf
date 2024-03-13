/* Sidebar component - Sree 22 Feb 2024 */

import React, { useEffect } from 'react';
import '../../App.css';
import './FxSidebar.css';
import nslhub_logo from '../../assets/header-logo.svg';
import FxNavMenu from './FxNavMenu.jsx';
import { sidebarMenus } from '../Feed/FxProps.js';
import { Link } from 'react-router-dom';

const FxSidebar = ({ onSelect }) => {
  useEffect(() => {
    const sidebar = document.querySelector('.divSidebar');
    const resizeBorderWidth = 3;

    const resizeSidebar = (e) => {
      const newWidth = e.clientX - sidebar.getBoundingClientRect().left;
      sidebar.style.width = newWidth + 'px';
    };

    const stopResize = () => {
      document.removeEventListener('mousemove', resizeSidebar);
      document.removeEventListener('mouseup', stopResize);
    };

    sidebar.addEventListener('mousemove', (event) => {
      const mouseXRelativeToSidebar = event.clientX - sidebar.getBoundingClientRect().left;
      sidebar.style.cursor =
        mouseXRelativeToSidebar >= sidebar.offsetWidth - resizeBorderWidth
          ? 'col-resize'
          : 'default';
    });

    sidebar.addEventListener('mousedown', (e) => {
      const mouseXRelativeToSidebar = e.clientX - sidebar.getBoundingClientRect().left;
      if (mouseXRelativeToSidebar >= sidebar.offsetWidth - resizeBorderWidth) {
        document.addEventListener('mousemove', resizeSidebar);
        document.addEventListener('mouseup', stopResize);
      }
    });

    return () => {
      document.removeEventListener('mousedown', resizeSidebar);
      document.removeEventListener('mouseup', stopResize);
    };
  }, []);

  return (
    <div className='divSidebar'>
      <div className='divAtTop'>
        <img src={nslhub_logo} alt="nslhub_logo" style={{ width: '160px' }} />
      </div>
      <div className="divNavMenuList">
        {sidebarMenus && sidebarMenus.map((menuItem, index) => (
          <Link key={menuItem.id} to={menuItem.route}>
            <FxNavMenu items={[menuItem]} onSelect={onSelect} selectedItemId={index === 0 ? menuItem.id : null} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FxSidebar;

// /* Sidebar component - Sree 22 Feb 2024 */

// import React, { useEffect, useState } from 'react';
// import '../../App.css';
// import './FxSidebar.css';
// import nslhub_logo from '../../assets/header-logo.svg';
// import FxNavMenu from './FxNavMenu.jsx';
// import { sidebarMenus } from '../Feed/FxProps.js';
// import { Link } from 'react-router-dom';

// const FxSidebar = ({ onSelect, selectOnLoad }) => {

//   const [selectedItemId, setSelectedItemId] = useState(() =>
//     selectOnLoad !== undefined && selectOnLoad >= 0 && selectOnLoad < sidebarMenus.length
//       ? sidebarMenus[selectOnLoad].id
//       : sidebarMenus[1].id
//   );

//   useEffect(() => {
//     const sidebar = document.querySelector('.divSidebar');
//     let startX, startWidth;
//     const resizeBorderWidth = 3;

//     const resizeSidebar = (e) => {
//       const newWidth = startWidth + (e.clientX - startX);
//       sidebar.style.width = newWidth + 'px';
//     };

//     const stopResize = () => {
//       document.removeEventListener('mousemove', resizeSidebar);
//       document.removeEventListener('mouseup', stopResize);
//     };

//     sidebar.addEventListener('mousemove', (event) => {
//       const sidebarRect = sidebar.getBoundingClientRect();
//       const mouseXRelativeToSidebar = event.clientX - sidebarRect.left;

//       sidebar.style.cursor =
//         mouseXRelativeToSidebar >= sidebarRect.width - resizeBorderWidth
//           ? 'col-resize'
//           : 'default';
//     });

//     sidebar.addEventListener('mousedown', (e) => {
//       const sidebarRect = sidebar.getBoundingClientRect();
//       const mouseXRelativeToSidebar = e.clientX - sidebarRect.left;

//       if (mouseXRelativeToSidebar >= sidebarRect.width - resizeBorderWidth) {
//         startX = e.clientX;
//         startWidth = parseInt(window.getComputedStyle(sidebar).width);
//         document.addEventListener('mousemove', resizeSidebar);
//         document.addEventListener('mouseup', stopResize);
//       }
//     });

//     return () => {
//       document.removeEventListener('mousedown', resizeSidebar);
//       document.removeEventListener('mouseup', stopResize);
//     };
//   }, []);

//   const handleSelect = (itemId) => {
//     setSelectedItemId(itemId);
//     onSelect(itemId);
//   };

//   return (
//     <div className='divSidebar'>
//       <div className='divAtTop'>
//         <img src={nslhub_logo} alt="nslhub_logo" style={{ width: '160px' }} />
//       </div>
//       <div className="divNavMenuList">
//         {sidebarMenus && sidebarMenus.map((menuItem) => (
//           <Link key={menuItem.id} to={menuItem.route}>
//             <FxNavMenu items={[menuItem]} onSelect={handleSelect} selectedItemId={selectedItemId} />
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FxSidebar;