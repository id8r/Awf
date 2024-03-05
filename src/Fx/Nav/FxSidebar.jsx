/* Sidebar component - Sree 22 Feb 2024 */

import React, { useEffect, useState } from 'react';
import '../../App.css';
import './FxSidebar.css';
import nslhub_logo from '../../assets/header-logo.svg';
import FF_Logo from '../../assets/FF_Logo.svg';
import FxNavMenu from './FxNavMenu.jsx';
import { sidebarMenus } from '../Feed/FxProps.js';
import { Link } from 'react-router-dom';

const FxSidebar = ({ onSelect }) => {
    const [selectedItemId, setSelectedItemId] = useState(sidebarMenus[1].id); // Select the second item initially

    useEffect(() => {
        const sidebar = document.querySelector('.divSidebar');
        let startX, startWidth;
        const resizeBorderWidth = 3;

        const resizeSidebar = (e) => {
            const newWidth = startWidth + (e.clientX - startX);
            sidebar.style.width = newWidth + 'px';
        };

        const stopResize = () => {
            document.removeEventListener('mousemove', resizeSidebar);
            document.removeEventListener('mouseup', stopResize);
        };

        sidebar.addEventListener('mousemove', (event) => {
            const sidebarRect = sidebar.getBoundingClientRect();
            const mouseXRelativeToSidebar = event.clientX - sidebarRect.left;

            sidebar.style.cursor =
                mouseXRelativeToSidebar >= sidebarRect.width - resizeBorderWidth
                    ? 'col-resize'
                    : 'default';
        });

        sidebar.addEventListener('mousedown', (e) => {
            const sidebarRect = sidebar.getBoundingClientRect();
            const mouseXRelativeToSidebar = e.clientX - sidebarRect.left;

            if (mouseXRelativeToSidebar >= sidebarRect.width - resizeBorderWidth) {
                startX = e.clientX;
                startWidth = parseInt(window.getComputedStyle(sidebar).width);
                document.addEventListener('mousemove', resizeSidebar);
                document.addEventListener('mouseup', stopResize);
            }
        });

        return () => {
            document.removeEventListener('mousedown', resizeSidebar);
            document.removeEventListener('mouseup', stopResize);
        };
    }, []);

    const handleSelect = (itemId) => {
        setSelectedItemId(itemId);
        onSelect(itemId); // Pass selected item ID to the parent component
        // console.log(sidebarMenus.find(menu => menu.id === itemId).label, 'Clicked');
    };

    return (
        <div className='divSidebar'>
            <div className='divAtTop'>
                <img src={nslhub_logo} alt="nslhub_logo" style={{ width: '160px' }} />
                {/* <img src={FF_Logo} alt="nslhub_logo" style={{ width: '32px' }} /> */}
            </div>
            <div className="divNavMenuList">
                {/* <FxNavMenu items={sidebarMenus} onSelect={handleSelect} selectedItemId={selectedItemId} /> */}

                {sidebarMenus && sidebarMenus.map((menuItem) => (
                    <Link key={menuItem.id} to={menuItem.route}>
                        <FxNavMenu items={[menuItem]} onSelect={handleSelect} selectedItemId={selectedItemId} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default FxSidebar;