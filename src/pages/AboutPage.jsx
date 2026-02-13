
import { motion } from 'framer-motion';

export default function AboutPage() {
    return (
        <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 relative min-h-screen">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 sm:mb-24"
                >
                    <span className="text-terracotta font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[10px] sm:text-xs mb-3 sm:mb-4 block">Our Heritage</span>
                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-coffee-900 mb-6 sm:mb-8 font-serif italic">
                        The <span className="not-italic">Story</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-coffee-800/70 max-w-2xl mx-auto font-medium leading-relaxed">
                        From a solitary bean to a shared sanctuary. We've been crafting moments of comfort and connection since our first pour.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center mb-20 sm:mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="relative group"
                    >
                        <div className="absolute -inset-4 bg-coffee-200/30 blur-2xl rounded-[32px] sm:rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <div className="relative h-[300px] sm:h-[500px] rounded-[32px] sm:rounded-[40px] overflow-hidden shadow-2xl border-4 sm:border-8 border-white group-hover:border-white/50 transition-colors duration-500">
                            <img
                                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800"
                                alt="Cafe Interior"
                                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-1000"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6 sm:space-y-8"
                    >
                        <div className="inline-flex items-center gap-3 px-3 sm:px-4 py-1.5 sm:py-2 bg-terracotta text-white rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest w-fit">
                            Established 2026
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-coffee-900 font-serif leading-tight">
                            Crafted with <span className="text-terracotta italic font-normal">Passion</span> & Precision
                        </h2>
                        <div className="space-y-4 sm:space-y-6 text-coffee-800/80 text-base sm:text-lg leading-relaxed font-medium">
                            <p>
                                Coffee'station began with a simple yet ambitious mission: to redefine the daily coffee ritual. We saw an opportunity to blend the warmth of traditional café culture with a modern, premium aesthetic.
                            </p>
                            <p>
                                Our beans are curated from sustainable micro-lots across the globe, each roasted to highlight its unique terroir. But more than the beans, we value the community we've built, one cup at a time.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Team Section */}
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-coffee-900 font-serif mb-4 italic">The <span className="not-italic">Artisans</span></h2>
                    <p className="text-coffee-800/60 font-medium text-sm sm:text-base">Meet the passionate minds behind your perfect cup.</p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
                    {[
                        { name: 'Manoj', role: 'Master Barista', img: 'https://images.unsplash.com/photo-1544168190-79c17527004f?auto=format&fit=crop&q=80&w=400' },
                        { name: 'Krish', role: 'Head Roaster', img: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=400' },
                        { name: 'Lisa', role: 'Pastry Architect', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400' }
                    ].map((member, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2, duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-center group"
                        >
                            <div className="relative mb-6 sm:mb-8 inline-block">
                                <div className="absolute -inset-3 bg-gradient-to-tr from-terracotta to-coffee-400 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
                                <div className="w-48 h-48 sm:w-56 sm:h-56 mx-auto rounded-full overflow-hidden border-4 sm:border-8 border-white shadow-xl relative z-10">
                                    <img src={member.img} alt={member.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                                </div>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-coffee-900 mb-1">{member.name}</h3>
                            <p className="text-terracotta font-bold uppercase tracking-widest text-[10px] sm:text-xs">{member.role}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
