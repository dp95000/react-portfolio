import React from 'react';
import { BrowserRouter as Router, Route, Switch }  from 'react-router-dom';
import HomePage from '../homePage/HomePage';
import Contact from '../contact/Contact';
import Portfolio from '../portfolio/Portfolio';


export default function Main() {
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={ HomePage } />
                <Route path="/portfolio" component={ Portfolio } />
                <Route path="/contact" component={ Contact } />
            </Switch>
        </Router>
    )  
}