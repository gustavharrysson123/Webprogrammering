import React, { Component } from 'react';

class SaladCheckbox extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        const inventory = this.props.inventory;
        let extras = Object.keys(inventory).filter(
            name => inventory[name].extra
        );
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <label>
                      Pick your ingredients:
                      <select value={this.state.value}  onChange={this.handleChange}>
                        <option value="Sallad">Sallad</option>
                        <option value="Pasta">Pasta</option>
                        <option value="Sallad + Pasta">Sallad + Pasta</option>
                        <option value="Sallad + Matvete">Sallad + Matvete</option>
                        <option value="Sallad + Glasnudlar">Sallad + Glasnudlar</option>
                        <option value="Sallad + Quinoa">Sallad + Quinoa</option>
                      </select>
                      <select value={this.state.value}  onChange={this.handleChange}>
                        <option value="Sallad">Sallad</option>
                        <option value="Pasta">Pasta</option>
                        <option value="Sallad + Pasta">Sallad + Pasta</option>
                        <option value="Sallad + Matvete">Sallad + Matvete</option>
                        <option value="Sallad + Glasnudlar">Sallad + Glasnudlar</option>
                        <option value="Sallad + Quinoa">Sallad + Quinoa</option>
                      </select>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <ul>
                    {extras.map(name => <option value={name}>{name}</option>)}
                </ul>
            </div>

        );
    }
}
export default ComposeSalad;
