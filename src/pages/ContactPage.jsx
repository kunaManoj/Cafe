
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
    return (
        <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 relative min-h-screen">
            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 sm:mb-24"
                >
                    <span className="text-terracotta font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[10px] sm:text-xs mb-3 sm:mb-4 block">Reach Out</span>
                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-coffee-900 mb-6 sm:mb-8 font-serif italic">
                        Get in <span className="not-italic">Touch</span>
                    </h1>
                    <p className="text-coffee-800/70 max-w-2xl mx-auto font-medium text-lg sm:text-xl leading-relaxed">
                        Whether you have a question about our beans or just want to share your coffee experience, we're here to listen.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10 mb-16 sm:mb-20">
                    {[
                        { icon: MapPin, title: 'Visit Us', content: 'PDPM IIITDM JABALPUR, Chandeli' },
                        { icon: Phone, title: 'Call Us', content: '+91 9999999999\nMon-Sun: 7am - 8pm' },
                        { icon: Mail, title: 'Email Us', content: 'hello@coffeestation.com\nSupport 24/7' }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 + 0.2 }}
                            className={`glass-premium p-8 sm:p-10 rounded-[32px] sm:rounded-[40px] text-center flex flex-col items-center hover:bg-white/40 transition-all duration-500 group border border-white/20 shadow-xl ${i === 2 ? 'sm:col-span-2 md:col-span-1' : ''}`}
                        >
                            <div className="p-4 sm:p-5 bg-coffee-900 text-white rounded-2xl sm:rounded-3xl mb-6 sm:mb-8 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                                <item.icon size={24} className="sm:w-7 sm:h-7" />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-serif font-bold text-coffee-900 mb-2 sm:mb-3">{item.title}</h3>
                            <p className="text-sm sm:text-base text-coffee-800/60 font-medium leading-relaxed whitespace-pre-line">
                                {item.content}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="relative group p-3 sm:p-4 glass-premium rounded-[32px] sm:rounded-[48px] shadow-2xl border border-white/40 overflow-hidden"
                >
                    <div className="h-[300px] sm:h-[500px] w-full rounded-[20px] sm:rounded-[36px] overflow-hidden relative">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153167!3d-37.81720997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d2a32f623668!2sState%20Library%20Victoria!5e0!3m2!1sen!2sus!4v1625902345678!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            className="grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                        ></iframe>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
