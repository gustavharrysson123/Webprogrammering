import React, { Component } from 'react';

class ViewIngredient extends Component {
    render() {
        const inventory = this.props.inventory;
        const item = this.props.match.params.name;
        let info = Object.keys(inventory[item]).filter(
            name => name === "vegan" || name === "lactose" || name === "gluten"
        );
        return (

            <div>
                <label> {item} information </label>
                {info.map(name => <li> {name} </li>)}
            </div>
        );
    }
}
export default ViewIngredient;
