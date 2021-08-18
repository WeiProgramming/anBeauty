import React from 'react' 
import companyLogo from '../../assets/images/panwei-banner.png'
import './navigation.css'

const Navigation = () => {
    return (
        <div className="nav">
            <div className="nav__brand-container">
                <img src={companyLogo}/>
            </div>
            <div className="nav__items-container">
                <div className="nav__item">Home</div>
                <div className="nav__item">Account</div>
            </div>
        </div>
    )
}

export default Navigation;