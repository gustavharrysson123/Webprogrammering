import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import inventory from './inventory.ES6';

import ComposeSalad from './ComposeSalad.js';
import SaladViewer from './SaladViewer.js';



class App extends Component {
    constructor() {
        super();
        this.state = {orders: []};
        this.counter = 0;
    }

   getUniqueId(){
        this.counter++;
        return this.counter;
   }

  addSalad = salad =>{
       salad.id = this.getUniqueId();
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
            <SaladViewer orders={this.state.orders}/>
            <ComposeSalad inventory={inventory}
                          addSalad={this.addSalad}/>


           <div>

         </div>
       </div>
      );
  }
}

export default App;
