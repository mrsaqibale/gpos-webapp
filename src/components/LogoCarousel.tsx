import React from 'react';
import { motion } from 'framer-motion';
import {
    ChefHat,
    Coffee,
    Cookie,
    Package,
    Pizza,
    ShoppingBag,
    ShoppingCart,
    UtensilsCrossed,
} from 'lucide-react';

const LogoCarousel = () => {
    // Business categories served by GPOS
    const logos = [
        { name: 'Restaurants', icon: UtensilsCrossed },
        { name: 'Cafes', icon: Coffee },
        { name: 'Fast Food', icon: Pizza },
        { name: 'Retail Stores', icon: ShoppingBag },
        { name: 'Bakeries', icon: Cookie },
        { name: 'Butcher Shops', icon: Package },
        { name: 'Super Markets', icon: ShoppingCart },
        { name: 'Cloud Kitchens', icon: ChefHat },
    ];

    // Double the logos for infinite scroll effect
    const infiniteLogos = [...logos, ...logos];

    return (
        <section className="relative z-30 overflow-hidden border-b border-gray-100 bg-white pb-6 pt-0 sm:pb-8 logo-carousel-section">
            <div className="max-w-screen-2xl mx-auto px-4 pt-2 pb-2 text-center sm:px-6 sm:pt-10 lg:px-8 lg:pt-12">
                <p className="text-base font-extrabold uppercase tracking-[0.2em] text-primary-navy sm:text-lg md:text-xl lg:text-2xl">
                    Designed for Businesses That Want to Scale Faster
                </p>
            </div>

            <div className="relative mt-6 flex overflow-x-hidden sm:mt-8 lg:mt-10">
                <motion.div
                    className="flex whitespace-nowrap py-2"
                    animate={{ x: [0, "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30
                    }}
                >
                    {infiniteLogos.map((logo, index) => (
                        <div
                            key={index}
                            className="mx-5 flex cursor-default items-center gap-3 rounded-[22px] border border-[rgba(3,44,126,0.12)] bg-[linear-gradient(135deg,#edf1f9_0%,#f7f9fd_58%,#e3ebf8_100%)] px-4 py-3 shadow-[0_14px_30px_rgba(3,44,126,0.08)] ring-1 ring-white/70 transition-transform duration-300 hover:-translate-y-1"
                        >
                            <span
                                className="flex h-11 w-11 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#032c7e_0%,#0b4db3_100%)] text-white shadow-[0_10px_18px_rgba(3,44,126,0.24)]"
                            >
                                <logo.icon className="h-5 w-5" strokeWidth={2.4} aria-hidden />
                            </span>
                            <span className="text-[1.05rem] font-extrabold tracking-tight text-[#032c7e]">
                                {logo.name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default LogoCarousel;
