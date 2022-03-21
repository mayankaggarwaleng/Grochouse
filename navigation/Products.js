const PRODUCTS = [
    {
        id: 100,
        name: 'Bell Pepper',
        price: 4.99,
        image: require('./images/bell_pepper.png'),
        description: '1kg'
    },
    {
        id: 101,
        name: 'Egg Chicken Red',
        price: 1.99,
        image: require('./images/egg_chicken.png'),
        description: '4pcs'
    },
    {
        id: 102,
        name: 'Organic Banana',
        price: 3,
        image: require('./images/banana.png'),
        description: '12kg'
    },
    {
        id: 103,
        name: 'Ginger',
        price: 2.99,
        image: require('./images/ginger.png'),
        description: '250g'
    },
    {
        id: 104,
        name: 'Bell Pepper',
        price: 4.99,
        image: require('./images/bell_pepper.png'),
        description: '1kg'
    },
    {
        id: 105,
        name: 'Egg Chicken Red',
        price: 1.99,
        image: require('./images/egg_chicken.png'),
        description: '4pcs'
    },
    {
        id: 106,
        name: 'Organic Banana',
        price: 3,
        image: require('./images/banana.png'),
        description: '12kg'
    },
    {
        id: 107,
        name: 'Ginger',
        price: 2.99,
        image: require('./images/ginger.png'),
        description: '250g'
    }
];

export function getProducts() {
    return PRODUCTS;
}

export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}