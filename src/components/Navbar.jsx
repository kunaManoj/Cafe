import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Coffee, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
];


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const { setIsCartOpen, cartCount } = useCart();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100, x: "-50%", opacity: 0 }}
                animate={{ y: 0, x: "-50%", opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`fixed top-4 z-50 left-1/2 w-[94%] sm:w-[90%] max-w-5xl py-2 px-4 md:px-10 rounded-[28px] border border-white/20 shadow-2xl backdrop-blur-xl transition-all duration-500 ease-in-out flex items-center justify-between ${isScrolled ? "bg-white/40 border-white/40 py-1.5" : "bg-white/10"
                    }`}
            >
                {/* 1. Logo (Left) */}
                <Link to="/" className="flex items-center gap-2 text-xl sm:text-2xl font-bold text-coffee-900 tracking-tight shrink-0 z-20 font-serif group">
                    <div className="p-1.5 sm:p-2 bg-coffee-900 rounded-xl sm:rounded-2xl text-white group-hover:rotate-12 transition-transform duration-300">
                        <Coffee className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2.5} />
                    </div>
                    <span>Coffee<span className="text-coffee-600 font-normal italic">'station</span></span>
                </Link>

                {/* 2. Nav Links (Centered) */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`text-sm font-bold tracking-widest transition-all duration-300 relative group uppercase ${location.pathname === link.path ? 'text-coffee-900' : 'text-coffee-900/50 hover:text-coffee-900'
                                }`}
                        >
                            {link.name}
                            <motion.span
                                layoutId="navUnderline"
                                className={`absolute -bottom-1.5 left-0 h-0.5 bg-coffee-900 rounded-full transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                                    }`}
                            />
                        </Link>
                    ))}
                </div>

                {/* 3. Right Actions (Cart + Book) */}
                <div className="hidden md:flex items-center gap-8 z-20">
                    {/* Cart Trigger */}
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsCartOpen(true)}
                        className="relative p-2.5 text-coffee-900 hover:bg-white/20 rounded-2xl transition-all duration-300 group"
                        aria-label="Cart"
                    >
                        <ShoppingBag className="w-5 h-5" strokeWidth={2} />
                        <AnimatePresence>
                            {cartCount > 0 && (
                                <motion.span
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    exit={{ scale: 0 }}
                                    className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-terracotta text-white text-[10px] font-bold rounded-lg flex items-center justify-center shadow-lg border-2 border-white/50"
                                >
                                    {cartCount}
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </motion.button>

                    <Link
                        to="/booking"
                        className="px-8 py-3 bg-coffee-900 text-white text-sm font-bold rounded-2xl hover:bg-black transition-all shadow-xl hover:-translate-y-0.5 active:translate-y-0"
                    >
                        Reserve
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="flex items-center gap-2 sm:gap-4 md:hidden z-20">
                    <button
                        onClick={() => setIsCartOpen(true)}
                        className="relative p-2.5 bg-white/20 rounded-xl"
                    >
                        <ShoppingBag className="w-5 h-5 text-coffee-900" />
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 w-4 h-4 bg-terracotta text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-md">
                                {cartCount}
                            </span>
                        )}
                    </button>
                    <button
                        className="p-2.5 bg-coffee-900 text-white rounded-xl focus:outline-none transition-transform active:scale-90"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-coffee-950/20 backdrop-blur-md z-40 md:hidden"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            className="fixed top-24 left-1/2 -translate-x-1/2 w-[94%] glass-premium rounded-[32px] sm:rounded-[40px] z-50 p-8 sm:p-10 shadow-2xl md:hidden flex flex-col items-center gap-6 sm:gap-8 border border-white/40"
                        >
                            <div className="flex flex-col gap-4 sm:gap-6 w-full text-center">
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <Link
                                            to={link.path}
                                            onClick={() => setIsOpen(false)}
                                            className={`text-xl sm:text-2xl font-serif font-bold transition-all ${location.pathname === link.path ? 'text-terracotta italic' : 'text-coffee-900'
                                                }`}
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="w-full pt-6 border-t border-coffee-900/10"
                            >
                                <Link
                                    to="/booking"
                                    onClick={() => setIsOpen(false)}
                                    className="w-full block py-4 bg-coffee-900 text-white rounded-[20px] sm:rounded-[24px] font-bold text-center text-base sm:text-lg shadow-2xl"
                                >
                                    Book a Table
                                </Link>
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
