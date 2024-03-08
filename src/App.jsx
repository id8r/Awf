/* App | Sree | 01 Mar 2024 */

import React, { useState } from 'react';
import { Link, Outlet } from "react-router-dom";
import './App.css';
import FxNavbar from './Fx/Nav/FxNavbar';
import FxDrawer from './Fx/Utils/FxDrawer';
import FxSidebar from './Fx/Nav/FxSidebar';
import { loremIpsum } from './Fx/Feed/FxProps';


function App() {
  const useFxDrawer = ({ initialIsOpen = false, ...drawerProps }) => {
    const [isOpen, setIsOpen] = useState(initialIsOpen);
    const toggleDrawer = () => setIsOpen(!isOpen);
    return [isOpen, toggleDrawer, drawerProps];
  };
  const [drawerIsOpen, toggleDrawer, drawerProps] = useFxDrawer({ initialIsOpen: false });

  return (
    <>
      <FxNavbar />
      <div className="divShell">
        <FxSidebar />
        <div className="divContent" >
          {/* <Outlet /> /* Render child routes here */}
          {<Outlet /> || <div>No Page Found!</div>}
          <div>
            {/* <Link to="/login" >
              Go to Login (app)
            </Link> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;