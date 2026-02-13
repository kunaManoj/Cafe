import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const categories = ["All", "Coffee", "Tea", "Breakfast", "Desserts", "Combos"];

export default function MenuPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredProducts = selectedCategory === "All"
        ? products
        : products.filter(p => p.category === selectedCategory);

    return (
        <div className="pt-24 min-h-screen pb-20 overflow-x-hidden relative">
            {/* Background enhancement */}
            <div className="absolute inset-0 bg-gradient-to-b from-coffee-100/20 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-8 sm:mb-12 mt-4 sm:mt-8">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-coffee-900 mb-4"
                    >
                        Our Menu
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-base sm:text-lg text-coffee-800/80 max-w-2xl mx-auto"
                    >
                        Explore our full range of handcrafted beverages and delicious treats.
                    </motion.p>
                </div>

                {/* Sticky Glass Filter Bar */}
                <div className="sticky top-24 sm:top-28 z-30 mb-8 sm:mb-12 flex justify-center">
                    <div className="glass-premium px-1.5 py-1.5 rounded-full flex gap-1 sm:gap-2 overflow-x-auto shadow-lg max-w-[95vw] sm:max-w-full no-scrollbar">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 relative overflow-hidden group whitespace-nowrap ${selectedCategory === cat
                                    ? "bg-coffee-900 text-white shadow-md scale-105"
                                    : "bg-transparent text-coffee-800 hover:bg-white/40 hover:text-coffee-900"
                                    }`}
                            >
                                <span className="relative z-10">{cat}</span>
                                {selectedCategory === cat && (
                                    <motion.div
                                        layoutId="activeFilter"
                                        className="absolute inset-0 bg-coffee-900 z-0 rounded-full"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Product Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 min-h-[50vh]"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredProducts.map((product) => (
                            <motion.div
                                key={product.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                                transition={{ duration: 0.3 }}
                            >
                                <ProductCard product={product} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredProducts.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-center py-20 text-coffee-800/50"
                    >
                        <p className="text-xl">No items found in this category.</p>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
