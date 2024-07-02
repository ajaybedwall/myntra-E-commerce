import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './Component/Navbar';
import Home from "./Component/Home";
import Search from './Component/Search';
import Wishlist from './Component/Wishlist';

function App() {
    const [name, setName] = useState('');
    const [wishlist, setWishlist] = useState([]);
    const [cart, setCart] = useState([]);
    const [isWishlistVisible, setIsWishlistVisible] = useState(false);
    const [wishlistCount, setWishlistCount] = useState(0);

    const addToWishlist = (product) => {
        setWishlist((prevWishlist) => {
            if (!prevWishlist.find(item => item.id === product.id)) {
                console.log(`Adding product to wishlist: ${product.title}`);
                setWishlistCount(prevCount => prevCount + 1); 
                return [...prevWishlist, product];
                // eslint-disable-next-line no-unreachable
                console.log(prevWishlist);
            }
            return prevWishlist;
        });
    };

    const removeFromWishlist = (productId) => {
        console.log(`Removing product with id: ${productId}`);
        setWishlist((prevWishlist) => {
            const updatedWishlist = prevWishlist.filter(item => item.id !== productId);
            console.log('Updated Wishlist:', updatedWishlist);
            if (updatedWishlist.length !== prevWishlist.length) {
                setWishlistCount(prevCount => prevCount - 1);
                console.log(updatedWishlist);
            }
            return updatedWishlist;
        });
    };
    
    const toggleWishlistVisibility = () => {
        console.log('Toggling wishlist visibility');
        setIsWishlistVisible(!isWishlistVisible);
    };

    return (
        <>
            <Navbar 
                name={name} 
                setName={setName} 
                toggleWishlistVisibility={toggleWishlistVisibility} 
                wishlistCount={wishlistCount} // Pass the counter to Navbar
            />
            {isWishlistVisible ? (
                <Wishlist wishlist={wishlist} removeFromWishlist={removeFromWishlist} />
            ) : (
                name === '' ? (
                    <Home addToWishlist={addToWishlist} />
                ) : (
                    <Search 
                        name={name} 
                        addToWishlist={addToWishlist} 
                    />
                )
            )}
        </>
    );
}

export default App;
