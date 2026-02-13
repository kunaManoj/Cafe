import { motion } from 'framer-motion';
import { Plus, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';
import React from 'react';

const ProductCard = React.memo(({ product }) => {
    const { addToCart } = useCart();

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass-premium rounded-[32px] overflow-hidden group relative hover:shadow-2xl transition-all duration-500 border border-white/20"
        >
            <div className="relative h-56 overflow-hidden">
                <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute top-4 right-4 bg-coffee-900/60 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold text-white shadow-2xl border border-white/20 flex items-center justify-center">
                    {product.price}
                </div>

                {product.rating > 4.8 && (
                    <div className="absolute top-4 left-4 bg-terracotta text-white px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest shadow-lg">
                        Best Seller
                    </div>
                )}
            </div>

            <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-serif font-bold text-coffee-900 group-hover:text-primary transition-colors">{product.name}</h3>
                    <div className="flex items-center gap-1.5 text-terracotta text-sm font-bold bg-terracotta/10 px-2 py-0.5 rounded-lg">
                        <Star size={14} fill="currentColor" /> {product.rating}
                    </div>
                </div>

                <p className="text-coffee-800/60 text-sm leading-relaxed line-clamp-2 mb-6 font-medium">
                    {product.description}
                </p>

                <button
                    onClick={() => addToCart(product)}
                    className="w-full py-3.5 bg-coffee-900/5 hover:bg-coffee-900 text-coffee-900 hover:text-white rounded-2xl font-bold flex items-center justify-center gap-2 transition-all duration-300 active:scale-95 group/btn"
                >
                    <Plus size={20} className="group-hover/btn:rotate-90 transition-transform duration-300" />
                    <span>Add to Order</span>
                </button>
            </div>
        </motion.div>
    );
});

export default ProductCard;
