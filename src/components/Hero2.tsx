import React from 'react';
import { CheckCircle, ChevronRight, MessageCircleMore } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero2 = () => {
    const checkmarks = [
        'No Credit Card Required',
        '14-Day Free Trial',
        'Cancel Anytime'
    ];

    return (
        <section className="relative pt-20 lg:pt-32 pb-16 lg:pb-32 overflow-hidden bg-white">
            {/* Wavy Background from hero.jpeg */}
            <div
                className="absolute inset-0 z-0 bg-no-repeat bg-cover lg:bg-[length:100%_auto] bg-center bg-left sm:bg-center"
                style={{ backgroundImage: `url('/assets/modern.png')` }}
            ></div>

            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left Content */}
                    <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-6"
                        >
                            <h1 className="text-3xl md:text-4xl lg:text-5xl mt-10 font-extrabold text-primary-navy leading-[1.1] tracking-tight">
                                Run Your Food Business <br />
                                <span className="text-primary-navy">Faster & Without Mistakes</span>
                            </h1>

                            <p className="text-lg md:text-xl text-brand-textSecondary leading-relaxed max-w-xl mx-auto lg:mx-0">
                                All-in-one POS system for restaurants, cafés, takeaways, bakeries, and delivery — simple, fast, and reliable
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
                        >
                            <button className="btn-primary mt-8 inline-flex items-center gap-2">
                                <span>Get Your Free POS Setup</span>
                            </button>
                            <button className="btn-secondary mt-8 inline-flex items-center gap-2">
                                <span>See GPOS in Action</span>
                                <ChevronRight size={18} />
                            </button>

                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="space-y-3 pt-4"
                        >
                            {checkmarks.map((item) => (
                                <div key={item} className="flex items-center justify-start sm:justify-center lg:justify-start space-x-3 group">
                                    <div className="w-6 h-6 rounded-full bg-secondary-emerald/10 flex items-center justify-center group-hover:bg-secondary-emerald/20 transition-colors">
                                        <CheckCircle size={18} className="text-secondary-emerald" />
                                    </div>
                                    <span className="text-base text-brand-textSecondary font-medium">{item}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right Illustration */}
                    <div className="w-full lg:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, x: 20 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative z-10"
                        >
                            <div className="relative p-2 rounded-[2rem] bg-gradient-to-tr from-white/20 to-transparent backdrop-blur-sm">
                                {/* show only mobile */}
                                <img
                                    src="/assets/h-mobile.jpeg"
                                    alt="Modern POS Monitor"
                                    className="block sm:hidden w-full h-auto drop-shadow-2xl rounded-xl lg:scale-110 lg:translate-x-4"
                                />
                            </div>
                        </motion.div>

                        {/* Background Accents */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-primary-navy/5 rounded-full blur-[100px] -z-10"></div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero2;
