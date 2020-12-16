import React, { Component } from 'react';
import axios from '../../axios-orders';
import Order from '../../components/Order/Order';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';


class Orders extends Component {

    state = {
        orders: [],
        loading: true
    }

    componentDidMount() {
        axios.get('/orders.json')
            .then(res => {

                const fetchedOrders = [];

                for (let key in res.data) {
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key
                    });
                }

                this.setState({ loading: false, orders: fetchedOrders });

                console.log(res.data)
            })
            .catch(err => {
                this.setState({ loading: false });
                console.log(err)
            });
    }

    render() {
        return (
            <div>
                {this.state.orders.map(order => {
                    return <Order
                        key={order.id}
                        ingredients={order.ingredients}
                        price={order.price}
                    />
                })}
            </div>
        );
    }
}

export default withErrorHandler(Orders, axios);