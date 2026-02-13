import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, User, Check, Sparkles } from 'lucide-react';
import { useState } from 'react';

export default function BookingPage() {
    const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success
    const [formData, setFormData] = useState({ name: '', date: '', guests: '2 People', time: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus('submitting');
        // Simulate API call
        setTimeout(() => {
            setFormStatus('success');
        }, 1500);
    };

    const handleReset = () => {
        setFormStatus('idle');
        setFormData({ name: '', date: '', guests: '2 People', time: '' });
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen py-24 sm:py-32 px-4 sm:px-6 relative overflow-hidden flex items-center justify-center mt-8 sm:mt-12"
        >
            {/* Background enhancement */}
            <div className="absolute inset-0 bg-gradient-to-br from-coffee-100/20 via-transparent to-coffee-50/20 pointer-events-none" />

            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="glass-premium rounded-[32px] sm:rounded-[40px] overflow-hidden shadow-2xl grid lg:grid-cols-2 min-h-0 sm:min-h-[600px] border border-white/20 relative">

                    {/* Visual Side */}
                    <div className="relative p-8 sm:p-12 flex flex-col justify-between overflow-hidden bg-coffee-900/5">
                        {/* Texture Background */}
                        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/coffee.png')] bg-repeat mix-blend-multiply" />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-coffee-900/20" />

                        <div className="relative z-10">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 backdrop-blur-md rounded-full text-coffee-900 font-bold text-[10px] sm:text-sm mb-4 sm:mb-6 border border-white/10"
                            >
                                <Sparkles size={14} className="sm:w-4 sm:h-4" /> Premium Experience
                            </motion.div>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-coffee-900 leading-tight mb-3 sm:mb-4"
                            >
                                Reserve Your <br />
                                <span className="text-primary italic">Moment</span>
                            </motion.h1>
                            <p className="text-base sm:text-lg text-coffee-800/80 max-w-sm sm:max-w-md">
                                Secure the best spot in the house. Whether for a quiet coffee or a lively brunch, we're ready for you.
                            </p>
                        </div>

                        <div className="relative z-10 space-y-4 mt-8 lg:mt-0">
                            <div className="flex items-center gap-3 sm:gap-4 text-coffee-900 font-medium bg-white/30 p-3 sm:p-4 rounded-xl sm:rounded-2xl backdrop-blur-sm border border-white/10">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/50 rounded-full flex items-center justify-center text-coffee-900">
                                    <Clock size={18} className="sm:w-5 sm:h-5" />
                                </div>
                                <div>
                                    <p className="text-[10px] sm:text-xs text-coffee-600 uppercase font-bold tracking-wider">Opening Hours</p>
                                    <p className="text-sm sm:text-base">Mon - Sun: 7am - 9pm</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="p-6 sm:p-8 md:p-12 bg-white/5 lg:bg-transparent relative border-t lg:border-t-0 border-white/10">
                        <AnimatePresence mode='wait'>
                            {formStatus === 'success' ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="h-full flex flex-col items-center justify-center text-center space-y-4 sm:space-y-6 py-10 sm:py-0"
                                >
                                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-green-500/30">
                                        <Check size={40} className="sm:w-12 sm:h-12" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-coffee-900 mb-2">Table Reserved!</h2>
                                        <p className="text-coffee-800/70 text-sm sm:text-base">Confirmation sent to your email.</p>
                                    </div>
                                    <button
                                        onClick={handleReset}
                                        className="px-6 sm:px-8 py-2.5 sm:py-3 bg-coffee-900 text-terracotta rounded-full font-bold hover:bg-black transition-all shadow-lg hover:shadow-xl"
                                    >
                                        Book Another Table
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.form
                                    key="form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onSubmit={handleSubmit}
                                    className="space-y-4 sm:space-y-6 h-full flex flex-col justify-center"
                                >
                                    <div className="space-y-1.5 sm:space-y-2">
                                        <label className="text-[10px] sm:text-sm font-bold text-coffee-900 uppercase tracking-wide ml-2">Name</label>
                                        <div className="relative group">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-coffee-500 group-focus-within:text-primary transition-colors w-4 h-4 sm:w-5 sm:h-5" />
                                            <input
                                                type="text"
                                                placeholder="Example Name"
                                                required
                                                value={formData.name}
                                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full bg-white/40 border border-white/30 rounded-xl py-3.5 sm:py-4 pl-10 sm:pl-12 pr-4 text-sm sm:text-base text-coffee-900 placeholder:text-coffee-400/70 focus:bg-white/70 focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-1.5 sm:space-y-2">
                                            <label className="text-[10px] sm:text-sm font-bold text-coffee-900 uppercase tracking-wide ml-2">Date</label>
                                            <div className="relative group">
                                                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-coffee-500 group-focus-within:text-primary transition-colors w-4 h-4 sm:w-5 sm:h-5" />
                                                <input
                                                    type="date"
                                                    required
                                                    value={formData.date}
                                                    onChange={e => setFormData({ ...formData, date: e.target.value })}
                                                    className="w-full bg-white/40 border border-white/30 rounded-xl py-3.5 sm:py-4 pl-10 sm:pl-12 pr-4 text-sm sm:text-base text-coffee-900 focus:bg-white/70 focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-1.5 sm:space-y-2">
                                            <label className="text-[10px] sm:text-sm font-bold text-coffee-900 uppercase tracking-wide ml-2">Guests</label>
                                            <select
                                                value={formData.guests}
                                                onChange={e => setFormData({ ...formData, guests: e.target.value })}
                                                className="w-full bg-white/40 border border-white/30 rounded-xl py-3.5 sm:py-4 px-4 text-sm sm:text-base text-coffee-900 focus:bg-white/70 focus:ring-2 focus:ring-primary focus:outline-none transition-all cursor-pointer"
                                            >
                                                <option>1 Person</option>
                                                <option>2 People</option>
                                                <option>3 People</option>
                                                <option>4 People</option>
                                                <option>5+ People</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] sm:text-sm font-bold text-coffee-900 uppercase tracking-wide ml-2">Preferred Time</label>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3">
                                            {['09:00 AM', '01:00 PM', '06:00 PM'].map((timeStr) => (
                                                <button
                                                    type="button"
                                                    key={timeStr}
                                                    onClick={() => setFormData({ ...formData, time: timeStr })}
                                                    className={`py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-medium transition-all border ${formData.time === timeStr
                                                        ? 'bg-coffee-900 text-white border-coffee-900 shadow-lg scale-105'
                                                        : 'bg-white/30 text-coffee-900 border-white/20 hover:bg-white/50'}`}
                                                >
                                                    {timeStr}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={formStatus === 'submitting'}
                                        className="w-full py-3.5 sm:py-4 bg-coffee-900 text-terracotta rounded-xl font-bold text-base sm:text-lg hover:bg-black hover:shadow-xl transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                                    >
                                        {formStatus === 'submitting' ? (
                                            <span className="flex items-center justify-center gap-2">
                                                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                Confirming...
                                            </span>
                                        ) : 'Confirm Reservation'}
                                    </button>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
