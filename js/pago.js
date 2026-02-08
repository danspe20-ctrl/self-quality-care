// payment processing system and order confirmation

class PaymentProcessor {
    constructor() {
        this.paymentStatus = 'pending';
    }
    processPayment(amount) {
        // Simulate payment processing logic here
        console.log(`Processing payment of $${amount}`);
        this.paymentStatus = 'completed';
        return this.paymentStatus;
    }
}

class Order {
    constructor(orderId, amount) {
        this.orderId = orderId;
        this.amount = amount;
    }
    confirmOrder() {
        const paymentProcessor = new PaymentProcessor();
        const status = paymentProcessor.processPayment(this.amount);
        if (status === 'completed') {
            console.log(`Order ${this.orderId} confirmed!`);
        }
    }
}

// Usage Example
const myOrder = new Order(12345, 100);
myOrder.confirmOrder();
