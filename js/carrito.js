// shopping cart functionality

class ShoppingCart {
    constructor() {
        this.items = {};
    }

    // Add item to the cart
    addItem(itemId, quantity, price) {
        if (this.items[itemId]) {
            this.items[itemId].quantity += quantity;
        } else {
            this.items[itemId] = { quantity, price };
        }
    }

    // Remove item from the cart
    removeItem(itemId) {
        delete this.items[itemId];
    }

    // Update item quantity
    updateQuantity(itemId, quantity) {
        if (this.items[itemId]) {
            this.items[itemId].quantity = quantity;
        }
    }

    // Calculate total price
    calculateTotal() {
        return Object.values(this.items).reduce((total, item) => {
            return total + item.quantity * item.price;
        }, 0);
    }
}

// Example usage:
const cart = new ShoppingCart();
cart.addItem('apple', 2, 1.5);
cart.addItem('banana', 3, 1.0);
cart.updateQuantity('apple', 5);
cart.removeItem('banana');
console.log('Total:', cart.calculateTotal()); // Output: Total: 7.5
