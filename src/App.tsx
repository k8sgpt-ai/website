import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState, useEffect, useRef } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop';
import MailchimpPopup from './components/MailchimpPopup';
import Home from './pages/Home';

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showMailchimpPopup, setShowMailchimpPopup] = useState(false);
  const iconRef = useRef<HTMLImageElement>(null);

  // Show Mailchimp popup after 5 seconds on homepage
  useEffect(() => {
    if (isHomePage) {
      const timer = setTimeout(() => {
        setShowMailchimpPopup(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isHomePage]);

  // Preload the K8sGPT icon to prevent flickering
  useEffect(() => {
    const preloadIcon = () => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = '/images/k8sgpt-icon.svg';
      document.head.appendChild(link);
    };
    
    preloadIcon();
  }, []);

  // Cache the icon in memory
  useEffect(() => {
    if (iconRef.current) {
      const img = new Image();
      img.src = '/images/k8sgpt-icon.svg';
    }
  }, []);

  if (isHomePage) {
    return (
      <>
        <ScrollToTop />
        {showMailchimpPopup && <MailchimpPopup onClose={() => setShowMailchimpPopup(false)} />}
        <Home />
      </>
    );
  }

  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        {/* Navigation */}
        <nav className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16 min-w-0">
              {/* Logo Section */}
              <div className="flex items-center flex-shrink-0">
                <Link to="/" className="flex items-center">
                  <img 
                    ref={iconRef}
                    src="/images/k8sgpt-icon.svg" 
                    alt="K8sGPT Icon" 
                    className="h-8 w-auto" 
                    width="32"
                    height="32"
                  />
                  <span className="ml-2 text-lg font-bold hidden sm:inline">K8sGPT</span>
                </Link>
              </div>

              {/* Desktop Links - Hidden on Mobile */}
              <div className="hidden md:flex md:items-center md:space-x-2 lg:space-x-3 min-w-0 flex-1 justify-center">
                <a href="/#modes" className="text-gray-600 hover:text-gray-900 px-2 lg:px-3 py-2 rounded-md text-xs lg:text-sm font-medium whitespace-nowrap">Product</a>
                <a href="/#operator" className="text-gray-600 hover:text-gray-900 px-2 lg:px-3 py-2 rounded-md text-xs lg:text-sm font-medium whitespace-nowrap">Operator</a>
                <a href="/#analyzers" className="text-gray-600 hover:text-gray-900 px-2 lg:px-3 py-2 rounded-md text-xs lg:text-sm font-medium whitespace-nowrap">Analyzers</a>
                <a href="/#guardrails" className="text-gray-600 hover:text-gray-900 px-2 lg:px-3 py-2 rounded-md text-xs lg:text-sm font-medium whitespace-nowrap">Guardrails</a>
                <a href="/#community" className="text-gray-600 hover:text-gray-900 px-2 lg:px-3 py-2 rounded-md text-xs lg:text-sm font-medium whitespace-nowrap">Community</a>
                <Link to="/docs" className="text-gray-600 hover:text-gray-900 px-2 lg:px-3 py-2 rounded-md text-xs lg:text-sm font-medium whitespace-nowrap">Docs</Link>
              </div>

              {/* Right side buttons */}
              <div className="flex items-center space-x-2 flex-shrink-0">
                <Link to="/docs/getting-started/installation" className="bg-primary text-white px-3 lg:px-4 py-2 rounded-md text-xs lg:text-sm font-medium hover:bg-secondary whitespace-nowrap">
                  Get Started
                </Link>
              </div>

              {/* Mobile Menu Button - Hidden on Desktop */}
              <div className="md:hidden flex items-center ml-2">
                <button 
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  type="button" 
                  className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                  aria-controls="mobile-menu" 
                  aria-expanded={isMobileMenuOpen}
                >
                  <span className="sr-only">Open main menu</span>
                  {isMobileMenuOpen ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu - Shown when isMobileMenuOpen is true */}
          <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="/#modes" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 block px-3 py-2 rounded-md text-sm font-medium">Product</a>
              <a href="/#operator" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 block px-3 py-2 rounded-md text-sm font-medium">Operator</a>
              <a href="/#analyzers" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 block px-3 py-2 rounded-md text-sm font-medium">Analyzers</a>
              <a href="/#guardrails" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 block px-3 py-2 rounded-md text-sm font-medium">Guardrails</a>
              <a href="/#community" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 block px-3 py-2 rounded-md text-sm font-medium">Community</a>
              <Link to="/docs" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 block px-3 py-2 rounded-md text-sm font-medium">Docs</Link>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="px-2">
                <Link to="/docs/getting-started/installation" className="block w-full text-center bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-secondary">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content Area */}
        <main className="relative">
          <Outlet />
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-300 py-8 mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm">
                Copyright K8sGPT a Series of LF Projects, LLC.
              </p>
              <p className="text-sm mt-2">
                For website terms of use, trademark policy and other project policies please see{' '}
                <a 
                  href="https://lfprojects.org/policies/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:text-indigo-300 underline"
                >
                  lfprojects.org/policies
                </a>
                .
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
