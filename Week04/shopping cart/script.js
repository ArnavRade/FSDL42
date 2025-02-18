// Sample products data
const products = [
    { name: 'Sunfeast Dark Fantasy', price: 2.99, image: 'https://m.media-amazon.com/images/I/61Xph7Wux9L.jpg'},
    { name: 'Paperboat Drinks (5 in 1)', price: 3.05, image: 'https://thehardcopy.co/wp-content/uploads/paperboat-.jpg' },
    { name: 'Doritos- Spicy Sweet chilli', price: 2.55, image: 'https://www.kroger.com/product/images/large/front/0002840059586' }
];

let cart = [];

// Render products on the homepage (index.html)
function renderProducts() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';
    
    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
        `;
        
        cartItemsContainer.appendChild(productItem);
    });
}

// Add product to cart
function addToCart(name, price) {
    cart.push({ name, price });
    updateCartTotal();
}

// Update cart total on cart.html
function updateCartTotal() {
    let total = cart.reduce((sum, item) => sum + item.price, 0);
    document.getElementById('total-price').innerText = total.toFixed(2);
}

// Render cart items on cart.html
function renderCartItems() {
    const cartList = document.getElementById('cart-list');
    const emptyMessage = document.getElementById('empty-message');

    if (cart.length === 0) {
        emptyMessage.style.display = 'block';
        cartList.innerHTML = '';
    } else {
        emptyMessage.style.display = 'none';
        cartList.innerHTML = '';
        
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <img src="${products.find(p => p.name === item.name).image}" alt="${item.name}">
                <h2>${item.name}</h2>
                <p>$${item.price.toFixed(2)}</p>
            `;
            cartList.appendChild(cartItem);
        });
    }
}

// Render pages based on current path
if (window.location.pathname.endsWith('index.html')) {
    renderProducts();
} else if (window.location.pathname.endsWith('cart.html')) {
    renderCartItems();
    updateCartTotal();
}
