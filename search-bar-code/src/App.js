import React from 'react';
import './App.css';
import Navbar from './components/NavigationBar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Product from './pages/product';
import Search_Content from "./Components/Search_Content_Definitive/Search_Content";

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/about' component={About} />
                <Route path='/product' component={Product} />
            </Switch>

            <Search_Content/>
        </Router>
    );
}

export default App;
