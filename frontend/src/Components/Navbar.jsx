import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from 'flowbite-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="bg-black border-b-2 border-gray-700 flex justify-between items-center px-4 py-2">
            <div>
                <Link to="/" className='mx-3 font-bold'>
                    <span style={{ color: '#28A745' }}>Think</span>
                    <span className='text-white'>Chess</span>
                </Link>
            </div>
            <div className="hidden md:flex space-x-3">
                <Link to="/community" className='font-bold text-gray-400'>
                    Community
                </Link>
                <Link to="/" className='font-bold text-gray-400'>
                    Recommendation
                </Link>
                <Link to="/" className='font-bold text-gray-400'>
                    Profile
                </Link>
            </div>
            {/* Hamburger Button */}
            <div className="md:hidden">
                <Button onClick={handleToggle} className="text-gray-400 dark:text-white">
                    {isOpen ? <FaTimes /> : <FaBars />}
                </Button>
            </div>
            {/* Dropdown Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-16 left-0 right-0 bg-black dark:bg-gray-800 z-10 border-b-2 border-gray-200 dark:border-gray-700 font-bold">
                    <div className="flex flex-col space-y-4 py-4 px-8">
                        <Link exact to="/" className="text-white">
                        Community
                        </Link>
                        <Link to="/about" className="text-white">
                        Recommendation
                        </Link>
                        <Link to="/projects" className="text-white">
                        Profile
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;
