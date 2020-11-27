import React, { useState } from 'react';

import { useHistory, Link } from 'react-router-dom';

import { MdHome, MdControlPoint } from 'react-icons/md';
import { SiCashapp } from 'react-icons/si';
import {  BiLogOut } from 'react-icons/bi';
import { BsX } from 'react-icons/bs';
import { GiHamburgerMenu } from "react-icons/gi";

import '../styles/components/MobileHeader.css';


function MobileHeader(){
    const {goBack} = useHistory()
    
    const [sidebar, setSidebar] = useState(false)

    function toggleStatus(){
        setSidebar(!sidebar)
    }

    return(
        <header className="mobile-header">
            <div className="content">
                <div className="navbar">
                    <p className="title">JHCASH</p>
                    <button onClick={toggleStatus}>
                        <GiHamburgerMenu size={56} color="#38D618"  id={sidebar ? "hamburguer" : "hamburguer-active"}/>
                        <BsX size={56} color="#38D618"  id={sidebar ? "x-button-active" : "x-button"}/>
                    </button>
                
                </div>
                <nav className={ sidebar ? "nav-menu-active" : "nav-menu"}>
                    <ul className="nav-menu-items">
                        <li className="nav-toggle">
                            <Link to="#" className="menu-bars">
                                <MdHome size={33} color="#fefefe"/>
                                <p className="text">Home</p>
                            </Link>
                        </li>
                        <li className="nav-toggle">
                            <Link to="/dashboard/add" className="menu-bars">
                                <MdControlPoint size={33} color="#fefefe"/>
                                <p className="text">Add costs or earnings</p>
                            </Link>
                        </li>
                        <li className="nav-toggle">
                            <Link to="#" className="menu-bars">
                                <SiCashapp size={33} color="#fefefe"/>
                                <p className="text">Promotions on your area</p>
                            </Link>
                        </li>
                        <li className="out-item">
                            <button onClick={goBack}><BiLogOut size={43} color="#fefefe"/></button>
                        </li>
                    </ul>
                </nav>

            </div>
        </header>
    )
}

export default MobileHeader;