import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import DashboardPage from './pages/dashboardPage';
import DashboardAddPage from './pages/dashboardAddPage';

function Router(){
    return(
        <BrowserRouter>
            <Switch>
                <Route  path="/" exact component={LandingPage}/>
                <Route  path="/login"  component={LoginPage}/>
                <Route  path="/signup"  component={SignUpPage}/>
                <Route  path="/dashboard"  exact component={DashboardPage}/>
                <Route  path="/dashboard/add"  component={DashboardAddPage}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;