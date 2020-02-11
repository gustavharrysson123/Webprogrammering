import React, { Component } from 'react';

class SaladViewer extends Component {
    render() {
        return (
            <>
                <ul className="list-group order-list">
                    {this.props.orders?.map((salad, index) => (
                        <li className="list-group-item" key={salad.id}>
                            {salad.id +
                                ": " +
                                salad.foundation + ', ' +
                                salad.proteins.map(name => name) + ', ' +
                                salad.extras.map(name => name) + ', ' +
                                salad.dressing}
                        </li>
                    ))}
                </ul>

            </>
        );
    }
}
export default SaladViewer;
