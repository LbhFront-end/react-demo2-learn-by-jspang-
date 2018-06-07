import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import App from './components/Main';

import lbh from './components/Lbh';
import lbh1 from './components/Lbh.1';
import lbh2 from './components/Lbh.2';
import Nav from './components/nav';
import Error from './components/404';

// Render the main component into the dom
ReactDOM.render(
    <Router>
        <div>
            <Nav/>
            <Switch>
                <Route exact path='/' component={lbh}/>
                <Route path='/bh1' component={lbh1}/>
                <Route path='/bh2' component={lbh2}/>
                <Redirect from="/redirect" to="/bh1" />
                <Route component={Error}/>
            </Switch>
        </div>
    </Router>
, document.getElementById('app'));
