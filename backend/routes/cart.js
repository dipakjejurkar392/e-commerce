const express = require('express');
const Cart = require('../model/cart.js');
const router = express.Router();

const userId = '68371d2e354ee32345b528bd'; 

// Add or update cart item
router.post('/', async (req, res) => {
    const { productId, title, price, quantity, description, image } = req.body;

    let cart = await Cart.findOne({ userId });

    if (!cart) {
        cart = new Cart({ userId, items: [] });
    }

    let itemIndex = cart.items.findIndex(i => i.productId.toString()=== productId);
    if (itemIndex > -1) {
        cart.items[itemIndex].quantity += 1;
        cart.items[itemIndex].price += price;
    } else {
        cart.items.push({ productId, title, price, quantity, description, image });
    }

    await cart.save();
    res.json({ message: "Item Added", success: true });
});

// Get all cart items
router.get('/allcart', async (req, res) => {
    let cart = await Cart.findOne({ userId });
    if (!cart) return res.json({ message: "Cart not found", data: [] });
    res.json({ message: "All products", data: cart.items });
});

// Increment quantity
router.put('/increment/:id', async (req, res) => {
    const productId = req.params.id;
    let cart = await Cart.findOne({ userId });
    if (!cart) return res.json({ message: "Cart not found", success: false });

    let itemIndex = cart.items.findIndex(i => i.productId.toString() === productId);
    if (itemIndex > -1) {
        cart.items[itemIndex].quantity += 1;
        cart.items[itemIndex].price += cart.items[itemIndex].price / (cart.items[itemIndex].quantity - 1);
    } else {
        return res.json({ message: "Item not found", success: false });
    }

    await cart.save();
    res.json({ message: "Item incremented", success: true });
});

// Decrement quantity
router.put('/decrement/:id', async (req, res) => {
    const productId = req.params.id;
    let cart = await Cart.findOne({ userId });
    if (!cart) return res.json({ message: "Cart not found", success: false });

    let itemIndex = cart.items.findIndex(i => i.productId.toString() === productId);
    if (itemIndex > -1) {
        if (cart.items[itemIndex].quantity > 1) {
            cart.items[itemIndex].quantity -= 1;
            cart.items[itemIndex].price -= cart.items[itemIndex].price / (cart.items[itemIndex].quantity + 1);
        } else {
            cart.items.splice(itemIndex, 1);
        }
    } else {
        return res.json({ message: "Item not found", success: false });
    }

    await cart.save();
    res.json({ message: "Item quantity decremented", success: true });
});

// Delete item from cart
router.delete('/:id', async (req, res) => {
    const productId = req.params.id;
    let cart = await Cart.findOne({ userId });
    if (!cart) return res.json({ message: "Cart not found", success: false });

    cart.items = cart.items.filter(i => i.productId.toString() !== productId);
    await cart.save();

    res.json({ message: "Item removed from cart", success: true });
});

// Clear all items
router.delete('/', async (req, res) => {
    let cart = await Cart.findOne({ userId });
    if (!cart) return res.json({ message: "Cart not found", success: false });

    cart.items = [];
    await cart.save();

    res.json({ message: "All items removed", success: true });
});

module.exports = router;
