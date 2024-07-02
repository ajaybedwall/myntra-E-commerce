import { useState } from 'react';
import { FaUser, FaHeart, FaShoppingBag, FaBars } from 'react-icons/fa';
import Profile from './Profile';
import image from "../asset/WhatsApp Image 2024-06-28 at 19.38.30_6f56e78e.jpg";

// eslint-disable-next-line react/prop-types, no-unused-vars
function Navbar({ name, setName, toggleWishlistVisibility, wishlistCount }) { // Add wishlistCount prop
    const [isOpen, setIsOpen] = useState(false);
    const [showProfile, setShowProfile] = useState(false);

    const toggleProfileVisibility = () => {
        setShowProfile(!showProfile);
    };

    return (
        <nav className="flex justify-between items-center text-black py-4 px-4 sm:px-6 lg:px-8 h-19 bg-white sticky top-0 z-50 shadow-lg shadow-black-500/50">
            <div className="flex items-center">
                <img src={image} className='w-15 h-10' />
            </div>
            <div className="flex items-center lg:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="text-xl focus:outline-none">
                    <FaBars />
                </button>
            </div>
            <ul className={`flex-col space-y-2 mt-4 lg:mt-0 lg:flex lg:flex-row lg:space-y-0 lg:space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
                <li><a href="#women" className="text-black">Men</a></li>
                <li><a href="#women" className="text-black">Women</a></li>
                <li><a href="#kids" className="text-black">Kids</a></li>
                <li><a href="#home" className="text-black">Home & Living</a></li>
                <li><a href="#beauty" className="text-black">Beauty</a></li>
            </ul>
            <div className="border-gray-100 flex items-center w-80 ">
                <input
                    className="mt-6 bg-slate-600 text-black outline-none text-sm rounded-sm block w-full h-11 p-2.5"
                    placeholder="search"
                />
            </div>
            <ul className="flex items-center space-x-4 mt-4 lg:mt-0">
                <li className="flex items-center">
                    <FaUser className="mr-1" />
                    <p className="text-sm cursor-pointer" onClick={toggleProfileVisibility}>Login</p>
                </li>
                <li className="flex items-center cursor-pointer" onClick={toggleWishlistVisibility}>
                    <FaHeart className="mr-1" />
                    <p className="text-sm">Wishlist</p>
                    <span className="ml-2 text-sm text-red-600">{wishlistCount}</span> {/* Display the counter */}
                </li>
                
            </ul>
            {showProfile && <Profile />}
        </nav>
    );
}

export default Navbar;
