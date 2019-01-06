import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Header from '../Components/Header/Header';
import Home from '../Pages/Home/Home';
import AboutUs from '../Pages/AboutUs/AboutUs';

class Layout extends Component{
    render(){
        return(
            <Router>
                <div>
                    <Header />
                    <Route exact path="/" component={Home}/>
                    <Route path="/about-us" component={AboutUs}/>
                </div>
            </Router>
        );
    }
}

export default Layout;
