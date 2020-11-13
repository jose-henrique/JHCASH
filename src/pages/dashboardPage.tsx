import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import '../styles/pages/dashboardPage.css';

import { useHistory } from 'react-router-dom';



function DashboardPage(){
    const {goBack} = useHistory()

    return(
        <div className="container-dashboard">
             <button className="btn-goBack" onClick={goBack}>
                <FiArrowLeft size={35} color="#25DE00"/>
            </button>
            <div className="content">
                <h1>That's all folks</h1>
                <p>(will be updeted soon)</p>
            </div>
        </div>
    )
}

export default DashboardPage;