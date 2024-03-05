/* PgDesign | Sree | 01 Mar 2024 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import FxNavbar from '../../Fx/Nav/FxNavbar';
// import FxDrawer from '../../Fx/Utils/FxDrawer';
// import FxSidebar from '../../Fx//Nav/FxSidebar';
import { loremIpsum } from '../../Fx/Feed/FxProps';

function PgDesign() {
  const useFxDrawer = ({ initialIsOpen = false, ...drawerProps }) => {
    const [isOpen, setIsOpen] = useState(initialIsOpen);
    const toggleDrawer = () => setIsOpen(!isOpen);
    return [isOpen, toggleDrawer, drawerProps];
  };
  const [drawerIsOpen, toggleDrawer, drawerProps] = useFxDrawer({ initialIsOpen: false });

  return (
    <>
      {/* <FxNavbar /> */}
      {/* <div className="divShell"> */}
        {/* <FxSidebar />
        <div>
          <button onClick={toggleDrawer}>Open Drawer</button>
          <FxDrawer
            Width='40%'
            maskFade={0}
            isOpen={drawerIsOpen}
            onClose={toggleDrawer}
          >
            <FxNavbar />
            <div className='p24'>
              {loremIpsum}
              {loremIpsum}
              {loremIpsum}
              {loremIpsum}
              {loremIpsum}
              {loremIpsum}
              {loremIpsum}
            </div>
          </FxDrawer>
        </div> */}
        <div>
          <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
            Go to Login
          </Link>
        </div>
      {/* </div> */}
    </>
  );
}

export default PgDesign;
