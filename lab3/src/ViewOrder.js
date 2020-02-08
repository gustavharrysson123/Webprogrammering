import React, { Component } from 'react';

class ViewOrder extends Component {
    render() {
        return (
            <>
                <ul className="list-group order-list">
                    {this.props.orders?.map((salad, index) => (
                        <li className="list-group-item" key={salad.id}>
                            {salad.id +
                                ": " +
                                salad.foundation + ', ' +
                                salad.proteins +
                                salad.extras + ', ' +
                                salad.dressing}
                        </li>
                    ))}
                </ul>

            </>
        );
    }
}
export default ViewOrder;
