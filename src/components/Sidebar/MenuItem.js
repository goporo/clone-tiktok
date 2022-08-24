import React from 'react'
import './Sidebar.scss'
import { NavLink } from 'react-router-dom';

const MenuItem = ({ title, to, icon, activeIcon }) => {
    return (
        <NavLink className='menu-item' to={to}>
            <span className='side-icon'>{icon}</span>
            <span className='side-active-icon'>{activeIcon}</span>
            <span className='side-title'>{title}</span>
        </NavLink>
    );
}

export default MenuItem