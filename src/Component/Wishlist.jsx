import React from 'react';

function Wishlist({ wishlist, removeFromWishlist, updateQuantity }) {
    const calculateTotal = () => {
        let total = 0;
        wishlist.forEach(item => {
            total += item.price * item.quantity;
        });
        return total.toFixed(2); // Ensure total is formatted to 2 decimal places
    };

    return (
        <div className="wishlist-container">
            <h2 className="text-2xl font-bold mb-4">My Wishlist</h2>
            {wishlist.length === 0 ? (
                <p className="text-gray-500">Your wishlist is empty.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {wishlist.map(item => (
                        <div key={item.id} className="border rounded-lg overflow-hidden shadow-md">
                            <img src={item.images[0]} alt={item.title} className="w-full h-64 object-cover" />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                {/* <p className="text-gray-600 mt- mb-2">${item.price.toFixed(2)}</p> */}
                                <div className="flex items-center mb-2">
                                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="text-gray-600 bg-gray-200 py-1 px-2 rounded-md">-</button>
                                    <input type="number" value={item.quantity} readOnly className="w-12 text-center text-black border rounded-md top-0.5 mx-2" />
                                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="text-gray-600 bg-gray-200 py-1 px-2 rounded-md">+</button>
                                    <button onClick={() => removeFromWishlist(item.id)} className="ml-auto text-red-500 hover:text-red-700 focus:outline-none">Remove</button>
                                </div>
                                <p className="text-gray-600 mb-2">Total: ${(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {wishlist.length > 0 && (
                <div className="mt-4">
                    <p className="text-lg  font-semibold">Total Amount: ${calculateTotal()}</p>
                </div>
            )}
        </div>
    );
}

export default Wishlist;
