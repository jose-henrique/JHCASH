import React from 'react';

import { MdHome, MdControlPoint } from 'react-icons/md';
import { SiCashapp } from 'react-icons/si';
import {  BiLogOut } from 'react-icons/bi';

import { useHistory, Link } from 'react-router-dom';

import '../styles/components/Sidebar.css';

function Sidebar(){
    const history = useHistory()
    
    return(
        <aside>
            <p>JHCASH</p>
            <div className="main-buttons">
                <Link to="/dashboard" className="button">
                    <MdHome size={33} color="#fefefe"/>
                </Link>
                <Link to="/dashboard/add" className="button">
                    <MdControlPoint size={33} color="#fefefe"/>
                </Link>
                <Link to="#" className="button">
                    <SiCashapp size={33} color="#fefefe"/>
                </Link>
            </div>

            <button onClick={history.goBack}>
                <BiLogOut size={33} color="#fefefe"/>
            </button>
        </aside>
    )
}

export default Sidebar;