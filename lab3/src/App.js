import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import inventory from './inventory.ES6';

import ComposeSalad from './ComposeSalad.js';
import ViewOrder from './ViewOrder.js';
import Error from './Error.js';
import ViewIngredient from './ViewIngredient.js';


class App extends Component {
    constructor() {
        super();
        this.state = {orders: [],
                    id : 1,
                    getUniqueId : function(){
                        return this.id++;}
        };
    }

  addSalad = salad =>{
       salad.id = this.state.getUniqueId();
       const order = [...this.state.orders, salad];
        this.setState({
            orders: order
            });

  };
  render(){
      const composeSaladElem = (params) => <ComposeSalad {...params} inventory={inventory}
                        addSalad={this.addSalad} />;
      const viewOrderElem = (params) => <ViewOrder {...params} orders={this.state.orders} />;
      const errorElem = (params) => <Error {...params} />;
      const viewIngredientElem = (params) => <ViewIngredient {...params}  inventory={inventory}/>;

      return (


        <div>
           <div className="jumbotron text-center">
             <h1>My Own Salad Bar</h1>
             <p>Here you can order custom made salads!</p>
            <Router>
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link className="nav-link" to='/compose-salad'>Komponera din egen sallad</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/view-order'>Kolla din beställning</Link>
                    </li>
                </ul>
                <Switch>
                    <Route exact path='/'/>
                    <Route path='/compose-salad' render={composeSaladElem}/>
                    <Route path='/view-order' render={viewOrderElem}/>
                    <Route path='/view-ingredient/:name' render={viewIngredientElem}/>
                    <Route render={errorElem}/>
                </Switch>
            </Router>
        </div>

       </div>



      );
  }
}

export default App;
