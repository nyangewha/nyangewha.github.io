import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { FaShieldAlt, FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';

const Header: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Biography', href: '#biography' },
        { name: 'Service', href: '#service' },
        { name: 'Research', href: '#research' },
        { name: 'Publications', href: '#publications' },
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                    ? 'glass dark:glass-dark py-2'
                    : 'bg-transparent py-4'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <span className="text-xl font-bold text-primary flex items-center gap-2">
                            <FaShieldAlt className="text-2xl" />
                            <span>ISRL</span>
                            <span className="text-muted-foreground text-sm font-normal hidden sm:inline border-l border-border pl-2 ml-2">
                                Info. Security Research Lab
                            </span>
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="px-5 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition font-medium shadow-lg shadow-primary/25"
                        >
                            Contact
                        </a>
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full text-muted-foreground hover:bg-accent hover:text-accent-foreground transition"
                            aria-label="Toggle Dark Mode"
                        >
                            {theme === 'dark' ? <FaSun /> : <FaMoon />}
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center lg:hidden space-x-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full text-muted-foreground hover:bg-accent hover:text-accent-foreground transition"
                        >
                            {theme === 'dark' ? <FaSun /> : <FaMoon />}
                        </button>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-muted-foreground hover:text-primary focus:outline-none"
                        >
                            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full glass dark:glass-dark border-t border-border">
                    <div className="px-4 py-6 space-y-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block px-4 py-3 rounded-lg text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="block px-4 py-3 rounded-lg text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90 text-center mt-4"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Header;
