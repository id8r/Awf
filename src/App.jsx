/* App | Sree | 01 Mar 2024 */

import React, { useState } from 'react';
import { Outlet } from "react-router-dom";
import './App.css';
import FxNavbar from './Fx/Nav/FxNavbar';
import FxSidebar from './Fx/Nav/FxSidebar';
// import FxDrawer from './Fx/Utils/FxDrawer';
import { loremIpsum } from './Fx/Feed/FxProps';

function App() {
  return (
    <>
      <FxNavbar />
      <div className="divShell">
        <FxSidebar
          selectOnLoad={2}
        />
        <div className="divContent" >
          <Outlet /> {/* Render child routes here */}
        </div>
      </div>
    </>
  );
}

export default App;
