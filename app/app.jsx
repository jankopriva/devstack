require('./styles/app');
require('./css/base.css');

import ShoppingCart from './components/ShoppingCart';

var cart = [{
        name: 'Ball',
        quantity: 1,
        price: 100
    }, {
        name: 'Umbrella',
        quantity: 2,
        price: 200
    }];


React.render(
    <ShoppingCart cart={cart} />, document.getElementById('app')
);

if (DEBUG) {
    console.log('dev');
} else {
    console.log('production');
}
