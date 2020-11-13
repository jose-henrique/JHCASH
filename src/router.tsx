import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import DashboardPage from './pages/dashboardPage';

function Router(){
    return(
        <BrowserRouter>
            <Switch>
                <Route  path="/" exact component={LandingPage}/>
                <Route  path="/login" exact component={LoginPage}/>
                <Route  path="/signup" exact component={SignUpPage}/>
                <Route  path="/dashboard" exact component={DashboardPage}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;