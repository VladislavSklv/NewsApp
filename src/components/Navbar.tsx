import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <div>
            <nav>
                <div className="nav-wrapper pad1rem">
                    <NavLink to="/" className="brand-logo">NewsApp</NavLink>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><NavLink to="/">Main</NavLink></li>
                        <li><NavLink to="/news">News</NavLink></li>
                        <li><NavLink to="/profile">Profile</NavLink></li>
                    </ul>
                </div>
            </nav>   
            <ul id="slide-out" className="sidenav">
                <li className='sidenav-close'><NavLink to="/">Main</NavLink></li>
                <li className='sidenav-close'><NavLink to="/news">News</NavLink></li>
                <li className='sidenav-close'><NavLink to="/profile">Profile</NavLink></li>
            </ul>
            <a href="#" data-target="slide-out" className="sidenav-trigger slidenav-trigger-m"><i style={{color: 'white', position: 'absolute', top: 17, left: '1rem'}} className="material-icons">menu</i></a>
        </div> 
    );
};

export default Navbar;