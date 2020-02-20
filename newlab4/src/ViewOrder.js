import React, { Component } from 'react';

class ViewOrder extends Component {
    constructor(props) {
        super(props);
        this.handleOrder = this.handleOrder.bind(this);
        this.handleClear = this.handleClear.bind(this);
    }


    handleOrder = event => {
        this.props.placeOrder();
    }

    handleClear = event => {
        this.props.clearOrder();
    }

    render() {
        return (
            <>
                <div class="text-center">
                    <div class="d-inline-block">
                        <div class="btn-toolbar mx-auto" role="toolbar">

                            <div class="btn-group mr-2">

                                <button type="button" class="btn btn-primary btn-lg" onClick={this.handleOrder}>
                                  Order
                                </button>
                            </div>

                            <div class="btn-group mr-2">

                                <button type="button" class="btn btn-warning btn-lg " onClick={this.handleClear}>
                                  Clear
                                </button>
                            </div>

                         </div>
                     </div>
                </div>
                <ul className="list-group order-list">
                    {this.props.orders?.map((salad, index) => (
                        <li className="list-group-item" key={salad.id}>
                            {salad.id +
                                ": " +
                                salad.foundation + ', ' +
                                salad.proteins.map(name => name) + ', ' +
                                salad.extras.map(name => name) + ', ' +
                                salad.dressing}
                                &nbsp;
                                &nbsp;
                                &nbsp;
                            <button type="button" class="btn btn-primary">
                              {salad.price + " kr"}
                            </button>
                        </li>
                    ))}
                </ul>

            </>
        );
    }
}
export default ViewOrder;
