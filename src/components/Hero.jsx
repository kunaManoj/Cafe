import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const sentence = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: { delay: 0.5, staggerChildren: 0.08 }
    }
};

const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
};

export default function Hero() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const moveX = clientX - window.innerWidth / 2;
        const moveY = clientY - window.innerHeight / 2;
        x.set(moveX / 20); // Sensitivity
        y.set(moveY / 20);
    };

    return (
        <section
            onMouseMove={handleMouseMove}
            className="relative min-h-screen md:min-h-[110vh] flex items-center justify-center overflow-hidden pt-28 md:pt-20"
        >
            {/* Dynamic Background Glow */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{
                    background: [
                        "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                        "radial-gradient(circle at 60% 40%, rgba(255,255,255,0.15) 0%, transparent 50%)",
                        "radial-gradient(circle at 40% 60%, rgba(255,255,255,0.1) 0%, transparent 50%)"
                    ]
                }}
                transition={{ duration: 5, repeat: Infinity, repeatType: "mirror" }}
            />

            <div className="container mx-auto px-6 sm:px-8 md:px-20 relative z-10 grid md:grid-cols-2 gap-10 md:gap-8 items-center max-w-6xl">

                {/* Text Content */}
                <motion.div style={{ y: y1 }} className="text-center md:text-left space-y-6 md:space-y-8 relative z-20">
                    <motion.h1
                        variants={sentence}
                        initial="hidden"
                        animate="visible"
                        className="text-4xl sm:text-6xl md:text-8xl font-serif font-bold text-coffee-900 leading-[1.1]"
                    >
                        {"Sip the Extraordinary".split("").map((char, index) => (
                            <motion.span key={index} variants={letter}>{char}</motion.span>
                        ))}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="text-base sm:text-lg md:text-xl text-coffee-800/80 max-w-lg mx-auto md:mx-0 font-medium leading-relaxed"
                    >
                        Experience coffee crafted with passion, served in liquid glass elegance.
                        Warmth in every cup.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2 sm:pt-4"
                    >
                        <motion.button
                            onClick={() => document.getElementById('top-selling')?.scrollIntoView({ behavior: 'smooth' })}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3.5 sm:py-4 bg-coffee-900 text-white rounded-full font-bold text-sm sm:text-base hover:bg-black hover:shadow-2xl transition-all"
                        >
                            Order Now
                        </motion.button>

                        <Link to="/menu">
                            <motion.button
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.3)" }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3.5 sm:py-4 glass text-coffee-900 rounded-full font-bold text-sm sm:text-base border border-coffee-900/10 hover:border-coffee-900/20 w-full sm:w-auto"
                            >
                                View Full Menu
                            </motion.button>
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Visual Content - Deep Glass Layers */}
                <motion.div
                    style={{ x, y: y2 }}
                    className="relative h-[350px] sm:h-[450px] md:h-[600px] flex items-center justify-center mt-6 md:mt-0"
                >
                    {/* Back Layer - Hidden on small mobile to reduce clutter */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        className="absolute w-[280px] sm:w-[400px] md:w-[500px] h-[280px] sm:h-[400px] md:h-[500px] border border-white/10 rounded-full hidden sm:block"
                    />

                    {/* Floating Glass Cards */}
                    <motion.div
                        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="glass absolute w-[240px] sm:w-[320px] md:w-[380px] h-[300px] sm:h-[400px] md:h-[480px] rounded-[32px] sm:rounded-[40px] md:rounded-[50px] z-0 -rotate-6 border-t border-l border-white/40 shadow-2xl backdrop-blur-lg"
                    />

                    <motion.div
                        animate={{ y: [0, 30, 0], rotate: [0, -5, 0] }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="glass absolute w-[220px] sm:w-[300px] md:w-[350px] h-[280px] sm:h-[380px] md:h-[450px] rounded-[32px] sm:rounded-[40px] md:rounded-[50px] z-0 rotate-12 border-b border-r border-white/40 shadow-xl backdrop-blur-md bg-white/5"
                    />

                    {/* Main Cup Image */}
                    <div className="relative z-10">
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="relative"
                        >
                            {/* Steam Animation */}
                            <div className="absolute -top-12 sm:-top-16 md:-top-20 left-1/2 transform -translate-x-1/2 flex gap-1.5 sm:gap-2 opacity-60">
                                <span className="w-1 md:w-2 h-10 sm:h-12 md:h-16 bg-white/20 rounded-full blur-sm animate-steam"></span>
                                <span className="w-1 md:w-2 h-16 sm:h-20 md:h-24 bg-white/30 rounded-full blur-sm animate-steam" style={{ animationDelay: '0.4s' }}></span>
                                <span className="w-1 md:w-2 h-8 sm:h-10 md:h-12 bg-white/20 rounded-full blur-sm animate-steam" style={{ animationDelay: '0.8s' }}></span>
                            </div>

                            <div className="w-[180px] sm:w-[260px] md:w-[320px] h-[180px] sm:h-[260px] md:h-[320px] relative rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800&auto=format&fit=crop"
                                    alt="Glassy Coffee Cup"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Floating Badge */}
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="absolute top-4 sm:top-10 md:top-20 -right-2 sm:-right-4 glass px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-xl sm:rounded-2xl flex items-center gap-2 md:gap-3 shadow-lg z-20 cursor-pointer"
                    >
                        <span className="text-lg sm:text-xl md:text-2xl">🔥</span>
                        <div>
                            <p className="text-[8px] sm:text-[10px] md:text-xs font-bold text-coffee-800 uppercase tracking-wider">Top Pick</p>
                            <p className="font-bold text-xs sm:text-sm md:text-base text-coffee-900">Hazelnut Latte</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-coffee-800/50 hidden md:block"
            >
                <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center p-1">
                    <div className="w-1 h-3 bg-current rounded-full" />
                </div>
            </motion.div>
        </section>
    );
}
