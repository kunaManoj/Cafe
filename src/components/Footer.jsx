import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="bg-coffee-950 text-coffee-100 pt-16 sm:pt-20 pb-8 sm:pb-10 relative overflow-hidden"
        >
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 sm:w-96 sm:h-96 bg-coffee-800/20 blur-[100px] sm:blur-[120px] rounded-full" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-8 mb-12 sm:mb-16">
                    <div className="space-y-4 sm:space-y-6">
                        <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white flex items-center gap-2">
                            Coffee<span className="text-coffee-400">'station</span>
                        </h3>
                        <p className="text-coffee-200/60 text-sm sm:text-base leading-relaxed font-medium max-w-xs">
                            Elevating your daily ritual with handcrafted excellence.
                        </p>
                        <div className="flex gap-3 sm:gap-4">
                            {[Instagram, Facebook, Twitter].map((Icon, i) => (
                                <motion.a
                                    key={i}
                                    href="#"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    className="p-2.5 sm:p-3 bg-white/5 rounded-xl sm:rounded-2xl hover:bg-white/10 transition-colors border border-white/10 group"
                                >
                                    <Icon size={18} className="sm:w-5 sm:h-5 group-hover:text-terracotta transition-colors" />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] mb-6 sm:mb-8 text-coffee-400">Navigation</h4>
                        <ul className="space-y-3 sm:space-y-4">
                            {['Home', 'About Us', 'Our Menu', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link
                                        to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`}
                                        className="text-sm sm:text-base text-coffee-100/70 hover:text-white transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="w-0 h-px bg-terracotta group-hover:w-4 transition-all" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] mb-6 sm:mb-8 text-coffee-400">Our Space</h4>
                        <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-coffee-100/70 font-medium">
                            <li className="flex items-start gap-3">
                                <span className="text-terracotta mt-1">•</span>
                                <span>PDPM IIITDM JABALPUR<br />M.P, India</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-terracotta mt-1">•</span>
                                <span>hello@coffeestation.com<br />+91 9999999999</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] mb-6 sm:mb-8 text-coffee-400">Join the Club</h4>
                        <p className="text-coffee-100/60 text-[11px] sm:text-sm mb-4 sm:mb-6 font-medium">
                            Subscribe for secret menu previews and brewing tips.
                        </p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="bg-white/5 border border-white/10 rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-terracotta w-full"
                            />
                            <button className="bg-white/10 hover:bg-white/20 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-colors">
                                Host
                            </button>
                        </div>
                    </div>
                </div>

                <div className="pt-6 sm:pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] sm:text-sm text-coffee-100/40">
                    <p>&copy; {new Date().getFullYear()} Coffee'station. All rights reserved.</p>
                    <div className="flex gap-6 sm:gap-8">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
}
