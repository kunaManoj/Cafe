import { motion } from 'framer-motion';

const images = [
    "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=800"
];

export default function Ambience() {
    // Duplicate images for seamless looping
    const displayImages = [...images, ...images, ...images];

    return (
        <section className="py-20 sm:py-32 relative overflow-hidden bg-white/5">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-coffee-200/20 blur-[80px] sm:blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-coffee-300/20 blur-[80px] sm:blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-6 mb-12 sm:mb-20 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <span className="text-coffee-600 font-bold uppercase tracking-[0.3em] text-[10px] sm:text-xs mb-3 sm:mb-4 block">The Experience</span>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-coffee-900 mb-4 sm:mb-6 italic">
                        Our <span className="not-italic">Ambience</span>
                    </h2>
                    <p className="text-coffee-800/70 max-w-xl mx-auto font-medium text-base sm:text-lg">
                        A sanctuary crafted for focus, connection, and the perfect brew.
                        Every corner tells a story of warmth.
                    </p>
                </motion.div>
            </div>

            {/* Infinite Horizontal Slider */}
            <div className="relative flex overflow-hidden py-6 sm:py-10">
                <motion.div
                    animate={{ x: [0, "-33.333%"] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 60,
                            ease: "linear",
                        },
                    }}
                    className="flex gap-4 sm:gap-6 whitespace-nowrap px-4"
                >
                    {displayImages.map((img, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="w-[180px] sm:w-[280px] md:w-[350px] h-[220px] sm:h-[320px] md:h-[400px] shrink-0 glass border border-white/20 p-3 sm:p-4 rounded-[24px] sm:rounded-[32px] shadow-xl relative group overflow-hidden"
                        >
                            <img
                                src={img}
                                alt="Cafe Ambience"
                                className="w-full h-full object-cover rounded-[18px] sm:rounded-[24px]"
                            />
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[24px] sm:rounded-[32px]" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Stats or subtle text below */}
            <div className="container mx-auto px-6 mt-8 sm:mt-16 flex flex-wrap justify-center gap-6 sm:gap-12 md:gap-24 text-coffee-900/40 font-serif italic text-base sm:text-xl">
                <span>"Cozy corners"</span>
                <span>"Natural light"</span>
                <span>"Artisan details"</span>
                <span>"Warm spirits"</span>
            </div>
        </section>
    );
}
