import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const faqs = [
    {
        q: 'How does GPOS handle payments?',
        a: 'GPOS currently supports manual and cash-based transactions. You can record sales, manage orders, and track payments easily within the system. (Card payment integrations will be available in future updates.)'
    },
    {
        q: 'Can I use GPOS without any special hardware?',
        a: 'Yes. GPOS works on standard systems like desktops, laptops, or touch screens. You don’t need any special hardware to get started.'
    },
    {
        q: 'Can I access reports and business insights?',
        a: 'Absolutely. GPOS provides easy-to-understand reports for sales, orders, and performance so you can make better business decisions.'
    },
    {
        q: 'Will payment integrations be added in the future?',
        a: 'Yes, we are planning to introduce payment integrations (card and online payments) in upcoming updates.'
    },
    {
        q: 'Is my data secure?',
        a: 'Yes, we use secure systems to ensure your business data is protected at all times.'
    },
    {
        q: 'How do I get started with GPOS?',
        a: 'Simply sign up, set up your menu, and start managing your orders. Our system is designed to be simple and quick to use.'
    }
];

const FAQAccordion: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="relative min-w-0 overflow-x-clip overflow-hidden bg-gradient-to-br from-sky-50 via-white to-[#eff6ff] py-20" id="faq">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-10 top-12 h-32 w-32 rounded-full bg-[#3B82F6]/14 blur-3xl" />
                <div className="absolute bottom-16 right-16 h-40 w-40 rounded-full bg-[#60A5FA]/14 blur-3xl" />
                <div className="absolute right-1/3 top-1/3 h-28 w-28 rounded-full bg-white/80 blur-2xl" />
            </div>

            <div className="relative mx-auto w-full px-4 sm:px-6 lg:px-10 2xl:px-15">
                <div className="grid min-w-0 grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
                    <div className="lg:col-span-5">
                        <div className="rounded-3xl border border-gray-200/90 bg-white p-5 shadow-[0_12px_40px_rgba(15,23,42,0.08)] sm:p-6">
                            <img
                                src="/assets/faq-pos-visual-new.png.png"
                                alt="GPOS point-of-sale hardware: touchscreen terminal, cash drawer, receipt printer, card terminal, and barcode scanner"
                                className="w-full rounded-2xl object-cover"
                            />
                            <div className="mt-6 border-t border-gray-200/90 pt-5">
                                <p className="text-2xl font-bold tracking-tight text-[#032c7e]">Still have questions?</p>
                                <Link
                                    to="/contact"
                                    className="mt-4 inline-flex items-center justify-center rounded-full border border-[#032c7e] bg-[#032c7e] px-8 py-3 text-center text-sm font-semibold text-white shadow-[0_8px_24px_rgba(3,44,126,0.22)] transition hover:bg-[#041a52] hover:shadow-[0_12px_28px_rgba(3,44,126,0.28)]"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7">
                        <div className="mb-8 lg:mb-10">
                            <h2 className="text-[clamp(1.75rem,3.6vw,3.75rem)] font-bold leading-[1.1] tracking-[-0.025em] text-[#032c7e]">
                                Frequently Asked Questions
                            </h2>
                            <p className="mt-3 font-['Poppins',sans-serif] text-lg font-semibold leading-snug tracking-tight text-[#334155] md:text-xl">
                                Everything you need to know about GPOS — features, setup, and support.
                            </p>
                        </div>

                        <div className="space-y-3">
                            {faqs.map((faq, index) => {
                                const isOpen = openIndex === index;
                                return (
                                    <div
                                        key={index}
                                        className={`group relative overflow-hidden rounded-xl border transition-all duration-300 ${isOpen
                                            ? 'border-[#3B82F6]/45 bg-white shadow-[0_12px_32px_rgba(15,23,42,0.1)]'
                                            : 'border-gray-200/95 bg-white/95 shadow-sm hover:border-gray-300 hover:shadow-md'
                                            }`}
                                    >
                                        <button
                                            type="button"
                                            onClick={() => toggleAccordion(index)}
                                            className="relative z-10 flex w-full items-center justify-between px-5 py-5 text-left transition-colors duration-300 focus:outline-none sm:px-6"
                                        >
                                            <span
                                                className={`text-[20px] font-bold transition-colors duration-300 md:text-[22px] ${isOpen
                                                    ? 'text-[#032c7e]'
                                                    : 'text-[#1e293b] group-hover:text-[#032c7e]'
                                                    }`}
                                            >
                                                {faq.q}
                                            </span>
                                            <div
                                                className={`ml-4 flex-shrink-0 transition-colors duration-300 ${isOpen ? 'text-[#032c7e]' : 'text-[#64748b] group-hover:text-[#032c7e]'
                                                    }`}
                                            >
                                                {isOpen ? (
                                                    <Minus size={24} strokeWidth={2.5} aria-hidden />
                                                ) : (
                                                    <Plus size={24} strokeWidth={2.5} aria-hidden />
                                                )}
                                            </div>
                                        </button>

                                        <AnimatePresence initial={false}>
                                            {isOpen && (
                                                <motion.div
                                                    key="content"
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="relative z-10 max-w-4xl px-5 pb-5 text-base leading-relaxed text-[#475569] sm:px-6">
                                                        {faq.a}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQAccordion;
