import React, { Component } from 'react';

class ComposeSalad extends Component {
    constructor(props) {
        super(props);
        this.state = {foundation: "",
                        proteins: [],
                        extras: [],
                        dressing: "",

                        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = event => {

        const category = event.target.name
        const val = event.target.value
        if(category === "proteins"){
            const temp = [...this.state.proteins, val];
            this.setState({[event.target.name]: temp});
        } else if(category === "extras"){
            const temp = [...this.state.extras, val];
            this.setState({[event.target.name]: temp});
        }
        else{
            this.setState({[event.target.name]: val});
        }

    }

    handleSubmit = event => {
        event.preventDefault();
        const salad = this.state;
        this.props.addSalad(salad);

        this.setState({foundation: "",
                        proteins: [],
                        extras: [],
                        dressing: ""});
    }

    render() {
        const inventory = this.props.inventory;
        let foundations = Object.keys(inventory).filter(
            name => inventory[name].foundation
        );
        let dressings = Object.keys(inventory).filter(
            name => inventory[name].dressing
        );
        let extras = Object.keys(inventory).filter(
            name => inventory[name].extra
        );
        let proteins = Object.keys(inventory).filter(
            name => inventory[name].protein
        );


        return (
            <form onSubmit={this.handleSubmit}>
                <h1>
                    <input type="submit" value="Submit" />
                </h1>
                <div class="form-row">
                    <div class="col">
                        <h4>Välj bas</h4>
                        <ul>
                          <select name="foundation" value={this.state.value} onChange={this.handleChange}>
                            {foundations.map(name => <option value={name}>{name}</option>)}
                          </select>
                        </ul>
                    </div>
                    <div class="col">
                        <h4>Välj protein</h4>
                        {proteins.map(name =>
                        (<ul>
                            <input name="proteins" type="checkbox" value={name} checked={this.state.proteins.includes(name) || false}
                            onChange={this.handleChange}></input>
                             <label>{name}</label>
                        </ul>))}
                    </div>
                    <div class="col">
                        <h4>Välj extras</h4>
                        {extras.map(name =>
                        (<ul>
                            <input name="extras" type="checkbox" value={name} checked={
                                this.state.extras.includes(name) || false}
                            onChange={this.handleChange}></input>
                            <label>{name}</label>
                        </ul>))}
                    </div>
                    <div class="col">
                        <h4>Välj dressing</h4>
                        <ul>
                        <select name="dressing" value={this.state.value} onChange={this.handleChange}>
                        {dressings.map(name => <option value={name}>{name}</option>)}
                      </select>
                    </ul>
                    </div>
                </div>

            </form>

        );
    }
}
export default ComposeSalad;
