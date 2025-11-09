import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext";
import { logout } from "../lib/auth";
import ProfileIcon from './ProfileIcon';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const location = useLocation();
  const { user } = useAuth();
  const navigate = useNavigate();
  const profileDropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/booking', label: 'Book Appointment' },
    { path: '/reports', label: 'Reports' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact' },
  ];

  // Profile is now only available in the dropdown, not in main navigation
  const allNavItems = navItems;

  const isActive = (path: string) => location.pathname === path;

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleProfileClick = () => {
    navigate('/profile');
    setIsProfileDropdownOpen(false);
  };

  const handleLogoutClick = () => {
    logout();
    setIsProfileDropdownOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target as Node)) {
        setIsProfileDropdownOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 text-gray-700 p-3 fixed w-full top-0 z-50">
      <div className="max-w-50xl ml-4 px-4 sm:px-6 lg:px10">
        <div className="flex justify-between items-center h-12">
          {/* Website Name - Extreme Left */}
          <Link 
            to="/" 
            className="text-xl md:text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors mr-auto"
          >
            A Plus Ultra Sound Centre
          </Link>

          {/* Desktop Navigation - Center */}
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              {allNavItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      isActive(item.path) 
                        ? 'text-blue-600 border-b-2 border-blue-500' 
                        : 'text-gray-600 hover:text-blue-500'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* User Authentication - Right */}
          <div className="hidden md:flex items-center ml-4">
            {user ? (
              <div className="relative" ref={profileDropdownRef}>
                {/* Profile Icon with Dropdown */}
                <ProfileIcon
                  email={user.email}
                  size="md"
                  onClick={toggleProfileDropdown}
                  showTooltip={false}
                />
                
                {/* Dropdown Menu */}
                {isProfileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50 dropdown-enter">
                    <button
                      onClick={handleProfileClick}
                      className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors flex items-center gap-3"
                    >
                      <i className="fas fa-user text-blue-500"></i>
                      Profile
                    </button>
                    <div className="border-t border-gray-100 my-1"></div>
                    <button
                      onClick={handleLogoutClick}
                      className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors flex items-center gap-3"
                    >
                      <i className="fas fa-sign-out-alt text-red-500"></i>
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link 
                to="/login"
                className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-blue-500 transition-colors"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile menu button - Right Side */}
          <div className="md:hidden flex items-center ml-auto">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-500 hover:bg-gray-100 focus:outline-none transition duration-150 ease-in-out"
              aria-label="Main menu"
            >
              <svg
                className={`h-6 w-6 ${isMobileMenuOpen ? 'hidden' : 'block'}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`h-6 w-6 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`} ref={mobileMenuRef}>
        <div className="px-2 pt-2 pb-3 sm:px-3 bg-white rounded-lg mt-2 shadow-lg border border-gray-200">
          {allNavItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block px-3 py-2 rounded-md text-base font-medium mb-1 ${
                isActive(item.path)
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          
          {/* Mobile Authentication */}
          <div className="border-t border-gray-200 pt-2 mt-2">
            {user ? (
              <>
                {/* Mobile Profile Section */}
                <div className="px-3 py-3 border-b border-gray-200 mb-2">
                  <button
                    onClick={() => {
                      navigate('/profile');
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center gap-3 w-full text-left"
                  >
                    <ProfileIcon
                      email={user.email}
                      size="md"
                    />
                    <div>
                      <p className="font-medium text-gray-900">{user.email?.split('@')[0] || 'User'}</p>
                      <p className="text-sm text-gray-600">View Profile</p>
                    </div>
                  </button>
                </div>
                
                <button 
                  onClick={() => {
                    logout();
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-100"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;