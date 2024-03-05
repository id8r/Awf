
import React, { useState } from 'react';
import './App.css';
import FxNavbar from './Fx/Nav/FxNavbar';
import FxDrawer from './Fx/Utils/FxDrawer';
import {loremIpsum} from './Fx/Feed/FxProps';

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
      <div>
                <button onClick={toggleDrawer}>Open Drawer</button>
                <FxDrawer
                  Width='40%'
                  maskFade={0}
                  isOpen={drawerIsOpen}
                  onClose={toggleDrawer}
                >
                  <FxNavbar />
                  <button>Some Button</button>
                  <button closeDrawer="true">Close Drawer</button>
  <button>Another Button</button>
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
              </div>
      </div>
    </>
  );
}

export default App;