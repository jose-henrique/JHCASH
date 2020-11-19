import React from 'react';

import '../styles/pages/dashboardPage.css';

import { useHistory } from 'react-router-dom';

import { MdSettings, MdControlPoint } from 'react-icons/md';
import { SiCashapp } from 'react-icons/si';
import {  BiLogOut, BiWifi } from 'react-icons/bi';
import { GiTap } from 'react-icons/gi'
import { BsLightningFill } from 'react-icons/bs'



function DashboardPage(){
    const {goBack} = useHistory()

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
                         
                    </div>
                </div>
             </div>
        </div>
    )
}

export default DashboardPage;