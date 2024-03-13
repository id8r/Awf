// /* PgDashboard | Sree | 12 Mar 2024 */

// import React, { useState } from 'react';
// import FxDrawer from '../Utils/FxDrawer';
// import FxHeaderbar from '../Nav/FxHeaderbar';

// const PgDashboard = () => {
//   const [drawerIsOpen, setDrawerIsOpen] = useState(false);
//   const toggleDrawer = () => setDrawerIsOpen(!drawerIsOpen);

//   return (
//     <>
//       <div className='p24'>
//         <button onClick={toggleDrawer}>Toggle Drawer</button>
//         <FxDrawer
//           bgSpread='50%'
//           maskFade='25%'
//           closeOnEsc={true}
//           isOpen={drawerIsOpen}
//           onClose={toggleDrawer}
//           // bgColor='var(--bgContent_L)'
//         >
//           <FxHeaderbar
//             title="Dashboard Page"
//             height='var(--hX)'
//             textColor='var(--White)'
//             bgColor='var(--bgDark)'
//             showBackIcon={false}
//             onClose={toggleDrawer}
//           />
//           {/* Page Content here */}
//           <div className='p24 f14'>
//             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, aperiam neque laborum magnam labore quasi commodi dolores amet unde temporibus inventore exercitationem. Fugit tempora et tempore voluptate! Tempora, dolorum iure.</div>
//         </FxDrawer>
//       </div>
//     </>
//   );
// }

// export default PgDashboard;

import React, { useState } from 'react';
import FxDrawer from '../Utils/FxDrawer';
import FxHeaderbar from '../Nav/FxHeaderbar';

const PgDashboard = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false); // Initially closed

  const toggleDrawer = () => setDrawerIsOpen(!drawerIsOpen);

  return (
    <>
      <div className='p24'>
        <button onClick={toggleDrawer}>Toggle Drawer</button>
        <FxDrawer
          trayWidth='50%'
          maskFade='25%'
          closeOnEsc={true}
          isOpen={drawerIsOpen} // Controlled by state
          onClose={toggleDrawer}
          // bgColor='var(--bgContent_L)'
        >
          <FxHeaderbar
            title="Dashboard Page"
            height='var(--hX)'
            textColor='var(--White)'
            bgColor='var(--bgDark)'
            showBackIcon={false}
            onClose={toggleDrawer}
          />
          {/* Page Content here */}
          <div className='p24 f14'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, aperiam neque laborum magnam labore quasi commodi dolores amet unde temporibus inventore exercitationem. Fugit tempora et tempore voluptate! Tempora, dolorum iure.</div>
        </FxDrawer>
      </div>
    </>
  );
}

export default PgDashboard;