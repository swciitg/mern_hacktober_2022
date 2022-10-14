import React from 'react'
import "./header.css"
const Header = () => {
    return (
        <div className="header">
            <div className="left">
                <span className='header_txt'>Hi, Dongre Arindam Rajiv</span>
            </div>
            <div className="right">
                <span className='header_txt signout'>Signout</span>
            </div>
        </div>
    )
}

export default Header