import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cart from './Cart';
import Catalog from './Catalog';
import About from './About';
import ShippingMethods from './ShippingMethods';
import { Switch, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1 className="App-title">The Catelog App</h1>
        <nav>
            <ul>
                <li><Link to='/'>Catalog</Link></li><span> &nbsp;&nbsp;&nbsp;&nbsp; </span>
                <li><Link to='/shippingMethods'>Shipping Methods</Link></li><span> &nbsp;&nbsp;&nbsp;&nbsp; </span>
                <li><Link to='/about'>About</Link></li>
            </ul>
        </nav>
      </header>
      <Switch>
        <Route exact path='/' component={Catalog} />
        <Route path='/about' component={About} />
        <Route path='/shippingMethods' component={ShippingMethods}/>
      </Switch>
      </div>

    );
  }
}

export default App;
