import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Quote, ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: "Rajesh",
        role: "Freelance Designer",
        comment: "The atmosphere is unmatched. I get my best work done here with a latte in hand. The new design is stunning.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
    },
    {
        id: 2,
        name: "Shubham",
        role: "Coffee Enthusiast",
        comment: "Best espresso in the city. You can taste the quality of the beans in every sip. Highly recommended!",
        avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=150"
    },
    {
        id: 3,
        name: "Likhi",
        role: "Marketing Manager",
        comment: "A hidden gem! The staff is friendly and the pastries are to die for. Love the new booking system.",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150"
    },
    {
        id: 4,
        name: "Ajay",
        role: "Software Engineer",
        comment: "Fast wifi, great coffee, and the most relaxing vibe in town. My go-to spot for remote work.",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150"
    },
    {
        id: 5,
        name: "Lisa",
        role: "Food Blogger",
        comment: "The aesthetics are just perfect for my feed. And the coffee tastes as good as it looks!",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150"
    }
];

export default function Testimonials() {
    const [width, setWidth] = useState(0);
    const carouselRef = useRef();
    const innerRef = useRef();

    useEffect(() => {
        if (carouselRef.current && innerRef.current) {
            setWidth(innerRef.current.scrollWidth - carouselRef.current.offsetWidth);
        }
    }, []);

    return (
        <section className="py-16 sm:py-20 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-10 sm:mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-coffee-900 mb-4 font-serif"
                    >
                        Community Love
                    </motion.h2>
                    <p className="text-coffee-800/60 flex items-center justify-center gap-2 text-sm sm:text-base">
                        <ArrowLeft size={16} /> Drag to explore <ArrowRight size={16} />
                    </p>
                </div>

                <div ref={carouselRef} className="overflow-hidden cursor-grab active:cursor-grabbing">
                    <motion.div
                        ref={innerRef}
                        drag="x"
                        dragConstraints={{ right: 0, left: -width }}
                        className="flex gap-6 sm:gap-8 w-fit pt-10 sm:pt-12 pb-4 px-4"
                    >
                        {testimonials.map((item) => (
                            <motion.div
                                key={item.id}
                                className="min-w-[280px] sm:min-w-[350px] md:min-w-[400px] glass-premium p-6 sm:p-8 rounded-[24px] sm:rounded-3xl relative border border-white/30 hover:bg-white/10 transition-colors pointer-events-none md:pointer-events-auto select-none"
                            >
                                <div className="absolute -top-5 sm:-top-6 left-6 sm:left-8 bg-coffee-800 rounded-full p-2.5 sm:p-3 shadow-lg">
                                    <Quote size={18} className="text-white fill-current" />
                                </div>
                                <p className="text-coffee-900/90 italic mb-5 sm:mb-6 mt-3 sm:mt-4 leading-relaxed font-medium text-base sm:text-lg">"{item.comment}"</p>
                                <div className="flex items-center gap-3 sm:gap-4">
                                    <img
                                        src={item.avatar}
                                        alt={item.name}
                                        loading="lazy"
                                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-white/50"
                                        draggable="false"
                                    />
                                    <div>
                                        <h4 className="font-bold text-coffee-900 text-sm sm:text-base">{item.name}</h4>
                                        <span className="text-[10px] sm:text-xs text-coffee-700 uppercase tracking-wide font-semibold">{item.role}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
