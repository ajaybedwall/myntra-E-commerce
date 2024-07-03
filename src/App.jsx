import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar';
import Home from "./Component/Home";
import Search from './Component/Search';
import Wishlist from './Component/Wishlist';

function App() {
    const [name, setName] = useState('');
    const [wishlist, setWishlist] = useState([]);

    // Add product to wishlist
    const addToWishlist = (product) => {
        if (!wishlist.find(item => item.id === product.id)) {
            console.log(`Adding product to wishlist: ${product.title}`);
            setWishlist([...wishlist, { ...product, quantity: 1 }]);
        }
    };

    // Remove product from wishlist
    const removeFromWishlist = (productId) => {
        console.log(`Removing product with id: ${productId}`);
        const updatedWishlist = wishlist.filter(item => item.id !== productId);
        setWishlist(updatedWishlist);
    };

    // Update quantity of product in wishlist
    const updateQuantity = (productId, newQuantity) => {
        const updatedWishlist = wishlist.map(item => {
            if (item.id === productId) {
                return { ...item, quantity: newQuantity };
            }
            return item;
        });
        setWishlist(updatedWishlist);
    };

    return (
        <Router>
            <Navbar name={name} setName={setName} wishlistCount={wishlist.length} />
            <Routes>
                <Route 
                    path="/" 
                    element={name === '' ? <Home addToWishlist={addToWishlist} /> : <Search name={name} addToWishlist={addToWishlist} />} 
                />
                <Route 
                    path="/wishlist" 
                    element={<Wishlist wishlist={wishlist} removeFromWishlist={removeFromWishlist} updateQuantity={updateQuantity} />} 
                />
            </Routes>
        </Router>
    );
}

export default App;
