import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import history from '../common/History/History';


import Dashboard from '../components/Dashboard/Dashboard';


export default () => (
    <Router history={history}>
        <Switch>
            <Route path="/" exact component={Dashboard} />
            
        </Switch>
    </Router>
);