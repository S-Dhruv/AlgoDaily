import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState(null);

  const googleAuth = () => {
    window.open(`${import.meta.env.VITE_API_URL}/auth/google/callback`, "_self");
  };
  
  return (
    <nav className="fixed top-0 w-full z-50 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                AlgoDaily
              </span>
            </a>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#hero" className="hover:bg-neutral-800 px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#features" className="hover:bg-neutral-800 px-3 py-2 rounded-md text-sm font-medium">Features</a>
              <a href="#howItWorks" className="hover:bg-neutral-800 px-3 py-2 rounded-md text-sm font-medium">How it Works</a>
              <a href="#benefits" className="hover:bg-neutral-800 px-3 py-2 rounded-md text-sm font-medium">Benefits</a>
              <a href="#testimonials" className="hover:bg-neutral-800 px-3 py-2 rounded-md text-sm font-medium">Testimonials</a>
              <button className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md text-sm font-medium ml-4 animate-pulse" onClick={googleAuth}>
                Login with Google
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-neutral-800 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path
                  className="inline-flex"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${isMobileMenuOpen ? '' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-neutral-900">
          <a href="#hero" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-neutral-800">Home</a>
          <a href="#features" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-neutral-800">Features</a>
          <a href="#howItWorks" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-neutral-800">How it Works</a>
          <a href="#benefits" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-neutral-800">Benefits</a>
          <a href="#testimonials" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-neutral-800">Testimonials</a>
          <button className="w-full text-left bg-indigo-600 hover:bg-indigo-700 px-3 py-2 rounded-md text-base font-medium mt-4">
            Login with Google
          </button>
        </div>
      </div>
    </nav>
  );
}