import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { products } from '../data/products';

export default function TopSelling() {
    // Get top 4 items focusing on variety and high rating
    const topProducts = [...products]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 4);

    return (
        <section id="top-selling" className="py-16 sm:py-24 relative overflow-hidden">
            {/* Background enhancement */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-coffee-100/30 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-10 sm:mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-coffee-900 mb-4 font-serif"
                    >
                        Our Best Sellers
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-coffee-800/80 max-w-2xl mx-auto text-base sm:text-lg font-medium"
                    >
                        Handpicked favorites that defining our passion for coffee and comfort.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {topProducts.map((product, index) => (
                        <ProductCard key={product.id} product={product} index={index} />
                    ))}
                </div>

                <div className="text-center mt-12 sm:mt-16">
                    <Link to="/menu">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative px-8 sm:px-10 py-3.5 sm:py-4 bg-coffee-900 text-white rounded-full font-bold text-base sm:text-lg shadow-xl overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                View Full Menu
                                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                            </span>
                            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 backdrop-blur-sm" />
                        </motion.button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
