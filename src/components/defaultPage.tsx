import React, { InputHTMLAttributes } from 'react';

import '../styles/components/DefaultPage.css';

import Sidebar from '../components/Sidebar';
import MobileHeader from '../components/MobileHeader';


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    title: string;
    children: any;
}

function DefaultPage(props: InputProps){
    return(
        <div className="container-dashboard">
            <Sidebar/>
             <div className="other-side">
                <header className="main-header">
                    <p>{props.title}</p>
                </header>
                <MobileHeader/>
                <div className="content-area">
                    {props.children}
                </div>
             </div>
        </div>
    )
}

export default DefaultPage;