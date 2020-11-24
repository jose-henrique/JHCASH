import React, { useState } from 'react';

import '../styles/pages/dashboardPage.css';

import { useHistory, Link } from 'react-router-dom';

import { MdSettings, MdControlPoint } from 'react-icons/md';
import { SiCashapp } from 'react-icons/si';
import {  BiLogOut, BiWifi } from 'react-icons/bi';
import { GiTap } from 'react-icons/gi';
import { BsLightningFill, BsX } from 'react-icons/bs';
import { GiHamburgerMenu } from "react-icons/gi";



function DashboardPage(){
    const {goBack} = useHistory()

    const [sidebar, setSidebar] = useState(false)

    function toggleStatus(){
        setSidebar(!sidebar)
    }

    console.log(sidebar)

    return(
        <div className="container-dashboard">
             <aside>
                 <p>JHCASH</p>
                 <div className="main-buttons">
                    <button>
                        <MdSettings size={33} color="#fefefe"/>
                    </button>
                    <button>
                        <MdControlPoint size={33} color="#fefefe"/>
                    </button>
                    <button>
                        <SiCashapp size={33} color="#fefefe"/>
                    </button>
                 </div>

                 <button onClick={goBack}>
                    <BiLogOut size={33} color="#fefefe"/>
                 </button>
             </aside>
             <div className="other-side">
                <header className="main-header">
                    <p>My finances</p>
                </header>
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
                                        <MdSettings size={33} color="#fefefe"/>
                                        <p className="text">Settings</p>
                                    </Link>
                                </li>
                                <li className="nav-toggle">
                                    <Link to="#" className="menu-bars">
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
                                    <button><BiLogOut size={43} color="#fefefe"/></button>
                                </li>
                            </ul>
                        </nav>

                    </div>
                </header>
                <div className="content-area">
                    <div className="status-side">
                        <div className="top">
                            <div className="earns">
                                <p>earnings</p>
                                <span>+U$ 1.000,00</span>
                            </div>
                            <div className="costs">
                                <p>costs</p>
                                <span>-U$ 500,00</span>
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="final">
                                <p>net earnings</p>
                                <span>U$ 500,00</span>
                            </div>
                        </div>
                    </div>
                    <div className="debts-side">
                        <p>bills to pay</p>
                        <div className="debt-card1">
                            <div className="ilustration-part">
                                <GiTap size={70} color="#fefefe"/>
                            </div>
                            <div className="information">
                                <header>water</header>
                                <p>value:<strong>U$ 290,00</strong></p>
                            </div>
                        </div>
                        <div className="debt-card2">
                            <div className="ilustration-part">
                                <BsLightningFill size={70} color="#fefefe"/>
                            </div>
                            <div className="information">
                                <header>Energy</header>
                                <p>value: <strong>U$ 210,00</strong></p>
                            </div>
                        </div>
                        <div className="debt-card3">
                            <div className="ilustration-part">
                                <BiWifi size={70} color="#fefefe"/>
                            </div>
                            <div className="information">
                                <header>internet</header>
                                <p>value: <strong>U$ 110,00</strong></p>
                            </div>
                        </div>
                        <div className="debt-card3">
                            <div className="ilustration-part">
                                <BiWifi size={70} color="#fefefe"/>
                            </div>
                            <div className="information">
                                <header>internet</header>
                                <p>value: <strong>U$ 110,00</strong></p>
                            </div>
                        </div>
                        <div className="debt-card3">
                            <div className="ilustration-part">
                                <BiWifi size={70} color="#fefefe"/>
                            </div>
                            <div className="information">
                                <header>internet</header>
                                <p>value: <strong>U$ 110,00</strong></p>
                            </div>
                        </div>
                        <div className="debt-card3">
                            <div className="ilustration-part">
                                <BiWifi size={70} color="#fefefe"/>
                            </div>
                            <div className="information">
                                <header>internet</header>
                                <p>value: <strong>U$ 110,00</strong></p>
                            </div>
                        </div>
                         
                    </div>
                </div>
             </div>
        </div>
    )
}

export default DashboardPage;