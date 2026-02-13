import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BookingPage from './pages/BookingPage';
import MenuPage from './pages/MenuPage';
import CartSidebar from './components/CartSidebar';
import { CartProvider } from './context/CartContext';
import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}



function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </AnimatePresence>
  );
}

import { MotionConfig } from 'framer-motion';
import { useIsMobile } from './hooks/useIsMobile';

function App() {
  const isMobile = useIsMobile();

  return (
    <CartProvider>
      <MotionConfig transition={isMobile ? { duration: 0 } : undefined}>
        <Router>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen font-sans">
            <Navbar />
            <CartSidebar />
            <main className="flex-grow">
              <AnimatedRoutes />
            </main>
            <Footer />
          </div>
        </Router>
      </MotionConfig>
    </CartProvider>
  );
}

export default App;
