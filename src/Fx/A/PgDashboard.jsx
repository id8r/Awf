/* PgDashboard | Sree | 12 Mar 2024 */

import React, { useState } from 'react';
import FlexDrawer from '../Utils/FlexDrawer';
import FxHeaderbar from '../Nav/FxHeaderbar'; // Import the appropriate header component

const PgDashboard = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // Initially closed

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <>
      <div className='p24'>
        <button onClick={toggleDrawer}>Show Drawer</button>
        <FlexDrawer
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
        >
          <FxHeaderbar
            title="FxHeaderbar's Title"
            height='var(--hX)'
            textColor='var(--White)'
            bgColor='var(--bgDark)'
            showBackIcon={false}
            onClose={toggleDrawer}
          />
          {/* Page Content here */}
          <div className='p24 f14'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, aperiam neque laborum magnam labore quasi commodi dolores amet unde temporibus inventore exercitationem. Fugit tempora et tempore voluptate! Tempora, dolorum iure.
          </div>
        </FlexDrawer>
      </div>
    </>
  );
};

export default PgDashboard;
