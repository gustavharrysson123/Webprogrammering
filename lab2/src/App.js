import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import inventory from './inventory.ES6';

import ComposeSalad from './ComposeSalad.js';
import SaladViewer from './SaladViewer.js';



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
      return (
      <div>
           <div className="jumbotron text-center">
             <h1>My Own Salad Bar</h1>
             <p>Here you can order custom made salads!</p>
           </div>
           <div class="container">
            <SaladViewer orders={this.state.orders}/>
            <ComposeSalad inventory={inventory} addSalad={this.addSalad}/>
            </div>
       </div>
      );
  }
}

export default App;
