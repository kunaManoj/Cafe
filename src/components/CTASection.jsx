import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function CTASection() {
    return (
        <section className="py-20 sm:py-32 relative overflow-hidden bg-coffee-950">
            {/* Background enhancement */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80"
                    alt="Coffee background"
                    className="w-full h-full object-cover opacity-10 scale-110"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-950 via-coffee-950/60 to-transparent" />
            </div>

            {/* Decorative Blobs */}
            <div className="absolute top-1/2 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-terracotta/20 blur-[80px] sm:blur-[120px] rounded-full -translate-y-1/2 -translate-x-1/2" />
            <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-coffee-100/10 blur-[70px] sm:blur-[100px] rounded-full translate-y-[-20%] translate-x-[20%]" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <span className="text-terracotta font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[10px] sm:text-xs mb-4 sm:mb-6 block">Join Us Today</span>
                    <h2 className="text-3xl sm:text-5xl md:text-7xl font-serif font-bold mb-6 sm:mb-8 text-white leading-tight">
                        Experience the <br /><span className="text-coffee-200 italic font-normal">Perfect Brew</span>
                    </h2>
                    <p className="text-base sm:text-xl text-coffee-100/70 mb-8 sm:mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
                        Book a table today and immerse yourself in an atmosphere where every detail is crafted for your comfort.
                    </p>

                    <Link to="/booking">
                        <motion.button
                            whileHover={{ scale: 1.05, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 sm:px-12 py-4 sm:py-5 bg-[#E6DCCF] text-coffee-950 rounded-2xl font-bold text-base sm:text-lg hover:bg-white transition-all shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden group"
                        >
                            <span className="relative z-10">Reserve Your Experience</span>
                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
