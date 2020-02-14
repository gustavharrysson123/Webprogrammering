import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import ComposeSalad from './ComposeSalad.js';
import ViewOrder from './ViewOrder.js';
import Error from './Error.js';
import ViewIngredient from './ViewIngredient.js';


class App extends Component {
    constructor() {
        super();
        this.id = 1;
        this.state = {orders: [],
                    inventory: {}
        };
    }

  getUniqueId(){
    return this.id++;
  }
  addSalad = salad =>{
       salad.id = this.getUniqueId();
       salad.price = this.calculatePrice(salad);
       const order = [...this.state.orders, salad];

        this.setState({
            orders: order
            });


        fetch("http://localhost:8080/orders/", {
            method: 'POST',
            headers: new Headers(),
            mode: "cors",
            cache: "default",
            body: "APAPAPAPAPAPAPSAPA"
        }).then((response) => response.json())
            .then((result) => {
              alert('Success:', result);
            });



  };
  calculatePrice = salad =>{

        let reducer = (accumulator, currentValue) =>  accumulator + this.state.inventory[currentValue].price;

        const ingredientsCost = this.state.inventory[salad.foundation].price +
        salad.proteins.concat(salad.extras).reduce(reducer, 0) +
        this.state.inventory[salad.dressing].price;
        alert(ingredientsCost)

        return ingredientsCost;


  };


  placeOrder = salad =>{
       salad.id = this.getUniqueId();
       const order = [...this.state.orders, salad];
        this.setState({
            orders: order
            });

  };
  componentDidMount() {
    const BASE = "http://localhost:8080/"
    let categories = ["foundations", "proteins", "extras", "dressings"];
    let store = {};
    Promise.all(
        categories.map(category => {
            const url = new URL(category, BASE);
            return fetch(url).then(response => response.json()).then(items => {
            Promise.all(
                items.map(item => {
                    const itemURL = new URL(item, url.toString() + "/")
                    return fetch(itemURL).then(response => response.json()).then(info => {
                        store[item] = info;
                    });
                })
            ).then(() => {
                 this.setState({ inventory: store })
            });
        });
        })
    );
  }
  render(){

      const composeSaladElem = (params) => <ComposeSalad {...params} inventory={this.state.inventory}
                        addSalad={this.addSalad} />;
      const viewOrderElem = (params) => <ViewOrder {...params} orders={this.state.orders} />;
      const errorElem = (params) => <Error {...params} />;
      const viewIngredientElem = (params) => <ViewIngredient {...params}  inventory={this.state.inventory}/>;

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
