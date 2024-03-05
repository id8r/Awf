import './FxNavbar.css'

const FxNavbar = () => {
    return (
        <div className='divRxNavbar'>
            <div className='divNBLeft'>
                <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <span className='f14M' style={{ fontWeight: '600', marginRight: '4px', userSelect: 'none' }}>Auto Workflow</span>
                    <span className="f12" style={{ userSelect: 'none' }}>v1.0</span>
                </a>
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