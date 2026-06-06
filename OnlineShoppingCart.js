function createCart() {
    let count = 0;  // private variable, not global

    return {
        addItem: function () {
            count++;
            console.log("Item added. Current count:", count);
        },
        removeItem: function () {
            if (count > 0) {
                count--;
                console.log("Item removed. Current count:", count);
            } else {
                console.log("Cart is already empty!");
            }
        },
        getCount: function () {
            console.log("Current number of items in cart:", count);
            return count;
        }
    };
}

// Usage
let cart = createCart();

cart.addItem();   // Item added. Current count: 1
cart.addItem();   // Item added. Current count: 2
cart.getCount();  // Current number of items in cart: 2
cart.removeItem();// Item removed. Current count: 1
cart.removeItem();// Item removed. Current count: 0
cart.removeItem();// Cart is already empty!