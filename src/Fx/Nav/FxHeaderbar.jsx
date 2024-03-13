/* FxHeaderbar | Sree | 12 Mar 2024 */

import React from 'react';

const FxHeaderbar = ({
    title,
    height = '56px',
    textColor = '#333',
    bgColor = '#f0f0f0',
    onClose,
    showBackIcon,
}) => (
    <div
        style={{
            height,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: bgColor,
            color: textColor,
        }}
    >
        <div style={{ display: 'flex', alignItems: 'center' }}>
            {/* Back icon */}
            {showBackIcon && (
                <div className='Grd h40 aCenter pL8'>
                    <i className="material-icons f20"
                        style={{ cursor: 'pointer' }}
                        onClick={() => console.log('Back clicked')}
                    >arrow_back</i>
                </div>
            )}
            {/* Title */}
            <div style={{ marginLeft: showBackIcon ? '8px' : '16px' }} className='f13'>{title}</div>
        </div>
        {/* Close icon */}
        <div className='Grd aCenter w32 h32' style={{ cursor: 'pointer' }} onClick={onClose}>
            <i className="material-icons f24">close</i>
        </div>
    </div>
);

export default FxHeaderbar;