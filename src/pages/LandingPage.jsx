import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import TopSelling from '../components/TopSelling';
import Testimonials from '../components/Testimonials';
import Ambience from '../components/Ambience';
import CTASection from '../components/CTASection';

export default function LandingPage() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="pb-20"
        >
            <Hero />
            <TopSelling />
            <Ambience />
            <Testimonials />
            <CTASection />
        </motion.div>
    );
}
