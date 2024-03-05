/* Sidebar's Navigation Menus */

import React from 'react';
import '../../App.css';
import './FxNavMenu.css';

const FxNavMenu = ({ items, onSelect, selectedItemId }) => {
    const handleItemClick = (itemId) => {
        onSelect(itemId);
    };

    return (
        <>
        {/* <div className="divNavMenu"> */}
            {items.map((item) => (
                <div
                    key={item.id}
                    className={`divNavMenu-item ${selectedItemId === item.id ? 'selected' : ''}`}
                    onClick={() => handleItemClick(item.id)}
                    title={item.tooltip}
                >
                    {item.label}
                </div>
            ))}
        {/* </div> */}
        </>
    );
};

export default FxNavMenu;