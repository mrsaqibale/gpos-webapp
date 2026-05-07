import React from 'react';

const CTASection = () => {
    return (
        <section className="py-24 bg-primary-navy relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/5 rounded-full translate-y-1/3 -translate-x-1/4"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
                <h2 className="text-3xl md:text-5xl font-extrabold mb-8">
                    Start Growing Your Business with G Pos Today
                </h2>
                <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto">
                    Join 5,000+ businesses that have chosen the smarter way to manage their sales and operations.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="btn-primary hover:bg-white hover:text-primary-navy hover:border-primary-navy w-full sm:w-auto px-10">
                        Start Free Trial
                    </button>
                    <button className="btn-secondary hover:border-white hover:text-white w-full sm:w-auto px-10">
                        Book a Demo
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CTASection;