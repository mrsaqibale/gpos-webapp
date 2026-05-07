import React, { useEffect, useMemo, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const Testimonials: React.FC = () => {
    const reviews = [
        {
            name: "Ahmed Raza",
            role: "Restaurant Owner",
            location: "Dublin",
            content: "GPOS transformed our restaurant workflow. Orders are faster, billing is seamless.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=220&h=220&fit=crop"
        },
        {
            name: "Sara Khan",
            role: "Cafe Manager",
            location: "Cork",
            content: "Inventory and reports are so easy now. It saved us hours daily.",
            image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=220&h=220&fit=crop"
        },
        {
            name: "Michael Lee",
            role: "Bakery Owner",
            location: "Galway",
            content: "Best POS system for food businesses. Reliable, fast, and user-friendly.",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=220&h=220&fit=crop"
        },
        {
            name: "Emma Watson",
            role: "QSR Franchise",
            location: "Dublin",
            content: "Amazing support and robust features. We scaled operations without complexity.",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=220&h=220&fit=crop"
        }
    ];

    const [startIndex, setStartIndex] = useState(0);
    const [direction, setDirection] = useState<1 | -1>(1);

    const nextSlide = () => {
        setDirection(1);
        setStartIndex((prev) => (prev + 1) % reviews.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setStartIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    const goToSlide = (idx: number) => {
        if (idx === startIndex) return;
        setDirection(idx > startIndex ? 1 : -1);
        setStartIndex(idx);
    };

    useEffect(() => {
        const id = setInterval(() => {
            nextSlide();
        }, 4000);
        return () => clearInterval(id);
    }, [reviews.length]);

    const visibleDesktop = useMemo(
        () => [
            reviews[startIndex % reviews.length],
            reviews[(startIndex + 1) % reviews.length],
            reviews[(startIndex + 2) % reviews.length]
        ],
        [startIndex, reviews]
    );

    const visibleMobile = useMemo(
        () => reviews[startIndex % reviews.length],
        [startIndex, reviews]
    );

    return (
        <section className="relative min-w-0 overflow-x-clip overflow-hidden bg-[linear-gradient(180deg,#F4F8FF_0%,#FFFFFF_50%,#EFF6FF_100%)] py-24">
            <div className="pointer-events-none absolute inset-0">
                <div className="testimonial-float-a absolute left-12 top-8 h-28 w-28 rounded-full bg-[#3B82F6]/18 blur-3xl" />
                <div className="testimonial-float-b absolute bottom-10 right-10 h-44 w-44 rounded-full bg-[#60A5FA]/16 blur-3xl" />
                <div className="testimonial-float-c absolute right-1/4 top-24 h-24 w-24 rounded-full bg-white/70 blur-2xl" />
                <div className="absolute -left-32 top-1/3 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(11,86,234,0.07)_0%,rgba(11,86,234,0)_70%)] blur-3xl" />
                <div className="absolute -right-32 bottom-1/4 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(20,167,95,0.06)_0%,rgba(20,167,95,0)_70%)] blur-3xl" />
            </div>

            <div className="relative mx-auto min-w-0 max-w-screen-2xl px-4 sm:px-6 lg:px-8">
                <div className="mb-14 text-center">
                    <span className="home-eyebrow inline-flex items-center gap-[8px] rounded-full border border-[#E0E8F8] bg-white/85 px-[16px] py-[8px] text-[13px] font-extrabold uppercase tracking-[0.08em] text-[#0649C9] backdrop-blur">
                        Customer Stories
                    </span>
                    <h2 className="mt-[18px] text-[clamp(2.125rem,6.5vw,4rem)] font-extrabold leading-[1.05] tracking-[-0.028em] text-[#032c7e]">
                        What Our Clients Say
                    </h2>
                    <p className="mt-4 font-['Poppins',sans-serif] text-lg font-medium leading-[1.55] tracking-[-0.005em] text-[#334155] md:text-xl">
                        Trusted by Busy Restaurants
                    </p>
                </div>

                <div className="relative">
                    <button
                        onClick={prevSlide}
                        className="hidden md:flex absolute left-[-6px] top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-white/70 backdrop-blur border border-white/70 text-[#374151] items-center justify-center shadow-[0_8px_20px_rgba(30,58,95,0.16)] hover:bg-white transition-colors"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft size={28} />
                    </button>

                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={`desktop-${startIndex}`}
                            custom={direction}
                            variants={{
                                enter: (dir: 1 | -1) => ({ opacity: 0, x: dir === 1 ? -90 : 90 }),
                                center: { opacity: 1, x: 0 },
                                exit: (dir: 1 | -1) => ({ opacity: 0, x: dir === 1 ? 90 : -90 })
                            }}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.55, ease: "easeInOut" }}
                            className="hidden md:grid md:grid-cols-3 gap-6 px-0 md:px-12"
                        >
                            {visibleDesktop.map((review, index) => (
                                <motion.article
                                    key={`${review.name}-${index}`}
                                    whileHover={{
                                        scale: 1.03,
                                        y: -10,
                                        boxShadow: "0 18px 50px rgba(59,130,246,0.2)"
                                    }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="testimonial-glass-card relative overflow-hidden rounded-[20px] p-5 md:p-6"
                                >
                                    <span className="testimonial-shine" aria-hidden="true" />
                                    <div className="relative z-10">
                                        <div className="flex justify-center space-x-1 mb-4">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} size={18} className="fill-[#f6c436] text-[#f6c436]" />
                                            ))}
                                        </div>

                                        <p className="text-[1.2rem] leading-relaxed text-[#374151] text-center font-semibold mb-6">
                                            "{review.content}"
                                        </p>

                                        <div className="pt-4 border-t border-white/70 text-center">
                                            <img
                                                src={review.image}
                                                alt={review.name}
                                                className="w-20 h-20 rounded-full object-cover mx-auto border-4 border-white/80 shadow-md mb-3"
                                            />
                                            <h4 className="text-[1.45rem] font-extrabold text-[#374151]">{review.name}</h4>
                                            <p className="text-[#6B7280]">{review.role}</p>
                                            <p className="mt-1 text-[#6B7280] inline-flex items-center gap-1 text-sm">
                                                <MapPin size={14} />
                                                {review.location}
                                            </p>
                                        </div>
                                    </div>
                                </motion.article>
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={`mobile-${startIndex}`}
                            custom={direction}
                            variants={{
                                enter: (dir: 1 | -1) => ({ opacity: 0, x: dir === 1 ? -70 : 70 }),
                                center: { opacity: 1, x: 0 },
                                exit: (dir: 1 | -1) => ({ opacity: 0, x: dir === 1 ? 70 : -70 })
                            }}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="md:hidden px-2"
                        >
                            <motion.article
                                whileHover={{
                                    scale: 1.03,
                                    y: -10,
                                    boxShadow: "0 18px 50px rgba(59,130,246,0.2)"
                                }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="testimonial-glass-card relative overflow-hidden rounded-[20px] p-5"
                            >
                                <span className="testimonial-shine" aria-hidden="true" />
                                <div className="relative z-10">
                                    <div className="flex justify-center space-x-1 mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={18} className="fill-[#f6c436] text-[#f6c436]" />
                                        ))}
                                    </div>

                                    <p className="text-[1.15rem] leading-relaxed text-[#374151] text-center font-semibold mb-6">
                                        "{visibleMobile.content}"
                                    </p>

                                    <div className="pt-4 border-t border-white/70 text-center">
                                        <img
                                            src={visibleMobile.image}
                                            alt={visibleMobile.name}
                                            className="w-20 h-20 rounded-full object-cover mx-auto border-4 border-white/80 shadow-md mb-3"
                                        />
                                        <h4 className="text-[1.35rem] font-extrabold text-[#374151]">{visibleMobile.name}</h4>
                                        <p className="text-[#6B7280]">{visibleMobile.role}</p>
                                        <p className="mt-1 text-[#6B7280] inline-flex items-center gap-1 text-sm">
                                            <MapPin size={14} />
                                            {visibleMobile.location}
                                        </p>
                                    </div>
                                </div>
                            </motion.article>
                        </motion.div>
                    </AnimatePresence>

                    <button
                        onClick={nextSlide}
                        className="hidden md:flex absolute right-[-6px] top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-white/70 backdrop-blur border border-white/70 text-[#374151] items-center justify-center shadow-[0_8px_20px_rgba(30,58,95,0.16)] hover:bg-white transition-colors"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight size={28} />
                    </button>
                </div>

                <div className="mt-8 flex justify-center gap-2">
                    {reviews.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => goToSlide(idx)}
                            className={`h-3 rounded-full transition-all duration-300 ${
                                idx === startIndex ? 'w-6 bg-[#3B82F6]' : 'w-3 bg-white/70'
                            }`}
                            aria-label={`Go to testimonial ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
