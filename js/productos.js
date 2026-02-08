// Product Database
const products = [
    { id: 1, name: 'Product 1', price: 29.99, description: 'Description of Product 1', imgUrl: 'url-to-image-1.jpg' },
    { id: 2, name: 'Product 2', price: 39.99, description: 'Description of Product 2', imgUrl: 'url-to-image-2.jpg' },
    { id: 3, name: 'Product 3', price: 49.99, description: 'Description of Product 3', imgUrl: 'url-to-image-3.jpg' },
];

// Function to display products in the catalog
function displayProducts() {
    const catalog = document.getElementById('product-catalog');
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <h2>${product.name}</h2>
            <img src='${product.imgUrl}' alt='${product.name}' />
            <p>${product.description}</p>
            <p>Price: $${product.price.toFixed(2)}</p>
        `;
        catalog.appendChild(productElement);
    });
}

// Call displayProducts to render the catalog
// Uncomment the following line to call the function when the script loads
// displayProducts();