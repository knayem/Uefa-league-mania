import React from 'react';
import logo from '../../images/uefa.jpg';
import './Header.css';
const Header = () => {
    return (
        <div className="header">
             <h1> <span style={{color: 'red', Size: '5px'}} > UEFA</span> League Mania</h1>
           <img src={logo} alt=""/>
        
            
        </div>
    );
};

export default Header;