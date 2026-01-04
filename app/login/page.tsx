import Link from 'next/link';

/*const About = () => {
  return (
    <div className='p-4'>
      <h2 className="text-2xl my-2">About Us</h2>
      <Link className='underline' href="/">Go to Home</Link>
    </div>
  );
};*/

import React from 'react';

function LoginPage() {
    return (
        <div className="bg-gray-200 flex items-center justify-center h-screen">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700 text-sm font-semibold mb-2">Username</label>
                        <input 
                            type="text" 
                            id="username" 
                            name="username" 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" 
                            required 
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" 
                            required 
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
