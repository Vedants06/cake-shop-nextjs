import React from 'react';
import Link from "next/link"

const About = () => {
    return (
      <div className="bg-gray-100 text-gray-800">
            {/* Navbar */}
            <nav className="bg-white shadow-md">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex-shrink-0 text-3xl font-bold text-gray-900">
                                Bakiezza
                            </div>
                        </div>
                        <div className="hidden sm:flex sm:ml-auto">
                            <a href="/" className="text-gray-900 px-3 py-1 rounded-md text-base font-medium hover:bg-gray-200">Home</a>
                            <a href="/contact" className="text-gray-900 px-3 py-1 rounded-md text-base font-medium hover:bg-gray-200">Contact</a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="bg-red-900 text-white py-12">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl  font-extrabold">About Us</h1>
                    <p className="mt-4 text-orange-200 text-lg">Discover the story behind Bakiezza Cake Shop</p>
                </div>
            </header>

            {/* About Section */}
            <main className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
                            <p className="mt-4 text-lg text-gray-600">At Bakiezza, our passion is baking the finest cakes with the freshest ingredients. Established in 2010, our cake shop has been a staple in the community, known for our delicious flavors and beautiful designs.</p>
                        </div>
                        <div className="mt-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <img src="/image/cakeabout.webp" alt="Cake Shop Interior" className="w-full max-h-60 object-none overflow-hidden rounded-lg shadow-md" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-semibold text-gray-900">Our Mission</h3>
                                    <p className="mt-4 text-gray-600">Our mission is to create unforgettable experiences through our cakes. Whether it’s for a wedding, birthday, or any special occasion, we aim to bring joy to every celebration with our meticulously crafted treats.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-red-900 text-white py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-sm"> 2024 Bakiezza Cake Shop. All rights reserved.</p>
                        </div>
                        <div>
                            <a href="/privacy" className="text-sm">Privacy Policy</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default About;
