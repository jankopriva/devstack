import React from 'react';

const CartItem = React.createClass({
    handleDelete: function() {
        this.props.handleDelete(this.props.item.name);
    },

    render() {
        var item = this.props.item;
        var total = item.quantity * item.price;

        return (
            <tr>
                <td>{this.props.item.name}</td>
                <td>{this.props.item.quantity}</td>
                <td>{this.props.item.price}</td>
                <td>{total}</td>
                <td><a href="#" onClick={this.handleDelete.bind(this)}>Delete</a></td>
            </tr>
        )
    }
});

export default React.createClass({
    getInitialState() {
        return {cart: this.props.cart};
    },

    handleDelete: function(name) {
        console.log('will delete: ', name);
        var cart = this.props.cart;

        var newCart = cart.filter(function(cartItem) {
            return cartItem.name != name;
        });

        this.setState({cart: newCart});
    },

    render() {
        var cartRows = [];

        cartRows = this.state.cart.map(function(cartItem) {
            return <CartItem item={cartItem} handleDelete={this.handleDelete}/>
        }.bind(this));

        var cartTotal = this.props.cart.reduce(function(total, cartItem) {
            return total += cartItem.price * cartItem.quantity;
        }, 0);

        return (
            <div className="shopping-cart">
                <h1>Shopping Cart</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Price total</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartRows}
                        <tr><td>Total: </td><td>{cartTotal}</td></tr>
                    </tbody>
                </table>
            </div>
        )
    }
});
