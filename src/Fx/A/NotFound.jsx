import React from 'react';

import FxNavbar from  '../Nav/FxNavbar';
import FxSidebar from '../Nav/FxSidebar';

function NotFound() {
  return (
    <>
      <FxNavbar />
      <div className="divShell">
        <FxSidebar />
        <div className="divContent" >
          <div>
            <h2>404 - Page Not Found</h2>
            <p>The page you are looking for does not exist.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;