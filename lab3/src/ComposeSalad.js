import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

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
        event.target.parentElement.classList.add("was-validated");
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
        event.target.classList.add("was-validated");

        if(event.target.checkValidity() === true){
            const salad = this.state;
            this.props.addSalad(salad);

            this.setState({foundation: "",
                            proteins: [],
                            extras: [],
                            dressing: ""});
            this.props.history.push('/view-order');
        }


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
            <form onSubmit={this.handleSubmit} noValidate>
                <h1>
                    <input type="submit" value="Submit" />
                </h1>
                <div class="form-row">
                    <div class="col">
                        <label htmlFor="foundationSelect">Select foundation</label>
                          <select required name="foundation" className="form-control" id="foundationSelect" value={this.state.value} onChange={this.handleChange}>
                          <option value=''>make a choice...</option>
                            {foundations.map(name => <option value={name}>{name}</option>)}
                          </select>
                         <div className="invalid-feedback">required, select one</div>

                    </div>
                    <div class="col">
                        <h4>Välj protein</h4>
                        {proteins.map(name =>
                        (<ul>
                            <input name="proteins" type="checkbox" value={name} checked={this.state.proteins.includes(name) || false}
                            onChange={this.handleChange}></input>
                             <label>{ <Link className="nav-link" to={'/view-ingredient/' + name}>{name}</Link>}</label>
                        </ul>))}
                    </div>
                    <div class="col">
                        <h4>Välj extras</h4>
                        {extras.map(name =>
                        (<ul>
                            <input name="extras" type="checkbox" value={name} checked={
                                this.state.extras.includes(name) || false}
                            onChange={this.handleChange}></input>
                             <label>{ <Link className="nav-link" to={'/view-ingredient/' + name}>{name}</Link>}</label>
                        </ul>))}
                    </div>
                    <div class="col">
                        <label htmlFor="dressingSelect">Select dressing</label>
                          <select required name="dressing" className="form-control" id="dressingSelect" value={this.state.value} onChange={this.handleChange}>
                          <option value=''>make a choice...</option>
                            {dressings.map(name => <option value={name}>{name}</option>)}
                          </select>
                         <div className="invalid-feedback">required, select one</div>

                    </div>
                </div>

            </form>

        );
    }
}
export default ComposeSalad;
