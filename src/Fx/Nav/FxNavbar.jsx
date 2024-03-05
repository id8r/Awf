/* FxNavbar | Sree | 01 Mar 2024 */
import './FxNavbar.css'
import { Link } from "react-router-dom";

const FxNavbar = () => {
    return (
        <div className='divRxNavbar'>
            <div className='divNBLeft'>
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }} >
                    <span className='f14M' style={{ fontWeight: '600', marginRight: '4px', userSelect: 'none' }}>Auto Workflow</span>
                    <span className="f12" style={{ userSelect: 'none' }}>v1.0</span>
                </Link>
            </div>
            <div className='divNBCenter'>
            </div>

            <div className='divNBRight w32'>
                <div className="material-icons f24">account_circle</div>
            </div>
        </div>
    );
}

export default FxNavbar;